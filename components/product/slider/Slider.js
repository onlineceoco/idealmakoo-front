import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Slider.module.css";
import Image_slide from "../image_slide/Image_slide";


export default class SliderOne extends Component {
  render() {
    var settings = {
      initialSlide: 0,
      autoplay: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      fade: true,
      
    };
    return (
      <div className={styles.main}>
        <Slider {...settings}>
          
            <div className={styles.cart}>
                <Image_slide image={this.props.slide1}/>
                <h1>دسترسی به داروهای تخصصی طیور</h1>
            </div>
            <div className={styles.cart}>
                <Image_slide image={this.props.slide2}/>
                <h1>تضمین قیمت = تضمین اصالت</h1>
            </div>
            <div className={styles.cart}>
                <Image_slide image={this.props.slide3}/>
                <h1>دسترسی سریع با ارسال سفارشی</h1>
            </div>
            <div className={styles.cart}>
                <Image_slide image={this.props.slide4}/>
                <h1>دسترسی به داروهای تخصصی طیور</h1>
            </div>
          
        </Slider>
      </div>
    );
  }
}
