import Layout from "../Adviser/Layout";
import ImageSlider from "./ImageSlider";
import product_styles from "./ProductsStyle.module.css";
import Card from "./Card";
import useInView from "react-cool-inview";


const Products = ({
  img1Slider,
  img2Slider,
  img3Slider,
  title1Banner,
  img2Banner,
  title2Banner,
  subtitle2Banner,
  title3Banner,
  img3Banner,
  leftSideBgColor,
  rightSideBgColor,
  subtitle3Banner,
  title4Banner,
  img4Banner,
  subtitle4Banner,
  title5Banner,
  img5Banner,
  subtitle5Banner,
  title1Footer,
  title3Footer,
}) => {
  const { observe, inView } = useInView({
    threshold: 0.1,
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <Layout>
      <div className={product_styles.sectionOne}>
        <ImageSlider
          img1Slider={img1Slider}
          img2Slider={img2Slider}
          img3Slider={img3Slider}
        />
        
      </div>
      <h1 id={product_styles.sectionTwoTitle}>{title1Banner}</h1>
      <div ref={observe} className={product_styles["sectionTwo"]}>
        <div className={product_styles["rightSide"]} style={{backgroundColor:leftSideBgColor}}>
          <div className={product_styles["top_of_rightSide"]}>
            <img src={img2Banner} alt="" />
            <div className={product_styles["wordsTop_of_rightSide"]}>
              <h1 id={product_styles.title}>{title2Banner}</h1>
              <h1 id={product_styles.subtitle}>{subtitle2Banner}</h1>
            </div>
          </div>

          <div className={product_styles.bottom_of_rightside}>
            <div className={product_styles.right_bottom_rightSide}>
              <div className={product_styles.container_right_bottom_rightSide}>
                <h1 id={product_styles.title_right_bottom}>{title3Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img3Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle3Banner}
                </h1>
              </div>
            </div>
            <div className={product_styles.left_bottom_rightside}>
              <div className={product_styles.container_left_bottom}>
                <h1 id={product_styles.title_right_bottom}>{title4Banner}</h1>
                <img
                  id={product_styles.img_right_bottom_rightSide}
                  src={img4Banner}
                  alt=""
                />
                <h1 id={product_styles.subtitle_right_bottom}>
                  {subtitle4Banner}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className={product_styles.leftSide} style={{backgroundColor:rightSideBgColor}}>
          <div className={product_styles.container_leftSide}>
            <img id={product_styles.img_leftSide} src={img5Banner} alt="" />
            <h1 id={product_styles.title_leftside}>{title5Banner}</h1>
            <h1 id={product_styles.subtitle_leftside}>{subtitle5Banner}</h1>
            
          </div>
        </div>
      </div>
      {inView && (
        <div className={product_styles.CardContainer}>
          <Card imgPath='/images/99.jpg' title="تاییدیه  وسیله پزشکی  وزارت بهداشت و درمان و اموزش پزشکی و اداره کل تجهیزات پزشکی IMED"/>
          <Card imgPath='/images/100.jpg' title="پروانه ساخت وسایل پزشکی"/>
          <Card imgPath='/images/101.jpg' title="ایزوی ۱۳۴۸۵ ویژه تجهیزات پزشکی I QNET"/>
          <Card imgPath='/images/102.jpg' title="لوح تقدیر و تشکر در راستای خدمات ارزنده شرکت ایده آل ماکو از طرف دهمین کنگره بین المللی انجمن متخصصین دندانپزشکی ترمیمی ایران سال۱۳۸۹"/>
          <Card imgPath='/images/103.jpg' title="بازدید رییس جمهور وقت  جناب آقای آیت الله اکبر هاشمی رفسنجانی از واحد تولیدی شرکت ایده آل ماکو  و تقدیر از شرکت"/>
          <Card imgPath='/images/104.jpg' title="بازدید رییس جمهور وقت  جناب آقای آیت الله سید محمد خاتمی از واحد تولیدی شرکت ایده آل ماکو  و تقدیر از شرکت"/>
          <Card imgPath='/images/105.jpg' title="بازدید رهبر معظم انقلاب آیت الله سید علی خامنه ای از غرفه نمونه نمایشگاه  تجهیزات پزشکی و دندانپزشکی سال ۱۳۷۲ شرکت ایده آل ماکو"/>
          <Card imgPath='/images/106.jpg' title="کسب پروانه کاربرد علامت استاندارد اجباری از طرف اداره کل استاندارد استان آذر بایجان غربی"/>
          {/* <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/>
          <Card imgPath='/images/16.jpg' title="Hello"/> */}
        </div>
      )}
      {inView && (
        <div className={product_styles.Company}>
          <h1>{title1Footer}</h1>
          <h2>
            {new Date().getFullYear()}/{new Date().getMonth() + 1}/
            {new Date().getDate()}
          </h2>
          <h3>{title3Footer}</h3>
        </div>
      )}
      <style global jsx>
        {`
          body {
            font-family: "Yanone Kaffeesatz", sans-serif;
          }
        `}
      </style>
    </Layout>
  );
};
export default Products;
