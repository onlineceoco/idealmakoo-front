import sliderStyles from "./own.module.css";

export default function Own() {
  return (
    <>
      <div className={sliderStyles["sliderMain"]}>
        <div className={sliderStyles["image1"]}>
          <img src="images/is60.jpg" alt="" />
        </div>
        <div className={sliderStyles["image2"]}>
          <img src="images/is53.jpg" alt="" />
        </div>
        <div className={sliderStyles["image3"]}>
          <img src="images/iso54.jpg" alt="" />
        </div>
        <div className={sliderStyles["image4"]}>
          <img src="images/ios60.jpg" alt="" />
        </div>
        <div className={sliderStyles["image5"]}>
          <img src="images/iso66.jpg" alt="" />
        </div>
        <div className={sliderStyles["image6"]}>
          <img src="images/is60.jpg" alt="" />
        </div>
        <div className={sliderStyles["borderContainer"]}>
          <div className={sliderStyles["border"]}>
            <h1 style={{ marginLeft: "50px" }}>Ideal Life Ideal Smile</h1>
            <h1 style={{ marginLeft: "50px", textAlign: "left" }}>
               
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
