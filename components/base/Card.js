import Image_slide from "../product/image_slide/Image_slide";
import SliderOne from "../product/slider/Slider";
import product_styles from "./CardStyle.module.css";
const Card = ({imgPath,title}) => {
  return (
<>

    <div className={product_styles.cardWrapper}>
      <div className={product_styles.cardContainer}>
        <div className={product_styles.card}>
          <img src={imgPath} alt=""/>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
</>
  );
};
export default Card;
