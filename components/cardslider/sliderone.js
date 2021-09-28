import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slideronestyle.module.css";
export default class SliderOne extends Component {
  render() {
    const settings = {
      autoplay:true,
      pouseOnHover:true,
      infinite: true,
      slidesToShow: 5,
      speed: 500,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
           
          }},
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          
          }},{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          
           
          }},{
          breakpoint: 480,
          settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1,
            
     
           
            
          },
        },
      ],
    };
    return (
      <div   >
        <div className={styles.main}>
          <Slider {...settings}>
            <div >
              <div className={styles.card}>
                <img src="images/20.jpg" alt="" />
              </div>
                <h1 id={styles.title} >توسعه صادرات منطقه آزاد ماکو</h1>
            </div>
          
            <div>
              <div className={styles.card}>
                <img src="images/21.jpg" alt="" />
              </div>
              <h1 id={styles.title} >رتبه برتر صادرات سال 1398</h1>
            </div>

            <div>
              <div className={styles.card}>
                <img src="images/22.jpg" alt="" />
              </div>
                <h1 id={styles.title} >نمونه کشوری سال 1399</h1>
            </div>

            <div>
              <div className={styles.card}>
                <img src="images/24.jpg" alt="" />
              </div>
                <h1 id={styles.title} >استانداردهای جهانی</h1>
            </div>

            <div>
              <div className={styles.card}>
                <img src="images/ww.png" alt="" />
              </div>
                <h1 id={styles.title} >واحد نمونه در استاندارد</h1>
            </div>

            <div>
              <div className={styles.card}>
                <img src="images/22.jpg" alt="" />
              </div>
                <h1 id={styles.title} >نمونه کشوری سال 1399</h1>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
