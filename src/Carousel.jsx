import { useState } from "react";
import "./Carousel.style.css";
import {data1} from './housesData'

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
            <i className="fa-solid fa-arrow-left"></i>
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
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
