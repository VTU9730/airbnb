import { useContext, useState } from "react";
import "./Carousel.style.css";
import { data1 } from "./housesData";
import { appContext } from "./Context";

function Carousel() {
  const [data, setdata] = useState(data1.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);
  const { appState, setAppState } = useContext(appContext);

  function handleNext() {
    setCurrentIndex(currentIndex + 1);
    setdata(data1.slice(currentIndex, currentIndex + 5));
  }

  function handlePrevious() {
    setCurrentIndex(currentIndex - 1);
    setdata(data1.slice(currentIndex, currentIndex + 5));
  }

  function handleClick(item) {
    setAppState({ ...appState, houseType: item.text });
  }
  console.log(appState);
  return (
    <div className="container text-center hide">
      <div className="row justify-content-center">
        <div className="col carousel-container">
          <div className="col">
            <button className="button" onClick={handlePrevious}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          {data.map((item, index) => (
            <span
              key={index}
              onClick={() => handleClick(item)}
              className="carousel"
            >
              <img src={item.src} alt="building" width="25px" />
              <p>{item.text}</p>
            </span>
          ))}
          <div className="col">
            <button className="button" onClick={handleNext}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
