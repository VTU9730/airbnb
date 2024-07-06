import { useState } from "react";
import "./Carousel.style.css";
const data1 = [
  {
    src: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
    text: "Top of mountine",
  },
  // {
  //     src:'https://a0.muscache.com/im/pictures/mediaverse/cat…original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png',
  //     text:'Icons'
  // },
  {
    src: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
    text: "Farms",
  },
  {
    src: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
    text: "Amazing pools",
  },
  {
    src: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
    text: "OMG",
  },
  {
    src: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
    text: "Surfing",
  },
  {
    src: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
    text: "Amazing views",
  },
  {
    src: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    text: "Countryside",
  },
  {
    src: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
    text: "Luke",
  },
  {
    src: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    text: "Cabins",
  },
  {
    src: "https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg",
    text: "Treehouses",
  },
  {
    src: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    text: "eachfront",
  },
  {
    src: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    text: "Lake",
  },
  {
    src: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
    text: "Rooms",
  },
];
function Carousel() {
  const [data, setdata] = useState(data1.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNext() {
    setCurrentIndex(currentIndex + 1);
    setdata(data1.slice(currentIndex, currentIndex + 5));
  }

  function handlePrevious() {
    setCurrentIndex(currentIndex - 1);
    setdata(data1.slice(currentIndex, currentIndex + 5));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col carousel-container">
          <button className="button" onClick={handlePrevious}>
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          {data.map((item, index) => (
            <span
              key={index}
              onClick={() => console.log(item.text)}
              className="carousel"
            >
              <img src={item.src} alt="building" width="25px" />
              <p>{item.text}</p>
            </span>
          ))}
          <button className="button" onClick={handleNext}>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
