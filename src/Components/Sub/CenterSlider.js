import React, { Component } from "react";
import styles from "./CenterSlider.module.css";
import { useState } from "react";
import polygonl from "../../assets/Polygonl.png";
import polygonr from "../../assets/Polygonr.png";
function CenterSlider() {
    const[index, setIndex] = useState(0);
    const slides = [
        {
            title: "참여 가능 리그",
            leagues: [
                {name: "A 리그", date:"2024.02.27(화) 17:00 마감"},
                {name: "A 리그", date:"2024.02.27(화) 17:00 마감"}
            ]
        },
        {
            title: "Now 진행중인 리그",
            leagues: [
              { name: "인천 A리그", date: "2024.02.27(화) 17:00 ~ 2024.02.27(화) 17:00" },
              { name: "서울 A리그", date: "2024.02.27(화) 17:00 ~ 2024.02.27(화) 17:00" }
            ]
          },
          {
            title: "마감된 리그",
            leagues: [
              { name: "A 리그", date: "2024.02.27(화) 17:00 마감" },
              { name: "A 리그", date: "2024.02.27(화) 17:00 마감" }
            ]
          }
    ];
    const handleNext = () => {
        setIndex((index) => (index === slides.length - 1 ? 0 :index +1))
        console.log(index)
    }
    const handlePrev = () => {
        setIndex((index) => (index === 0 ? slides.length - 1 : index - 1));
        console.log(index)
      };
    
  return (
    <>
    <div className={styles.slickslider}>
        <img className={styles.polyL}src={polygonl} onClick={handlePrev}/>
        {slides.map((slide,i) => (
            <div key={i} className={`${styles.slide} ${i === index ? styles.active : ""}`}>
            <h2 className={styles.leaguename}>{slide.title}</h2>
            {slide.leagues.map((league, j) => (
              <div key={j}>
                <h3 className={styles.name}>{league.name}</h3>
                <p className={styles.date}>{league.date}</p>
              </div>
              
            ))}
            <p className={styles.goto}>자세히 보러가기 ></p>
          </div>
        ))}
        
        <img className={styles.polyR}src={polygonr} onClick={handleNext}/>
    </div>
    </>
  );
}

export default CenterSlider;