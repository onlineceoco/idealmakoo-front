import imageTab from "./ImageTab.module.css";
const ImageTab = ({ image1, image2, image3, image4 }) => {
  return (
    <div>
      <main className={imageTab["main"]}>
        <input
          id={imageTab["radio1"]}
          type="radio"
          name="css-tabs"
          defaultChecked
        />
        <input id={imageTab["radio2"]} type="radio" name="css-tabs" />
        <input id={imageTab["radio3"]} type="radio" name="css-tabs" />
        <input id={imageTab["radio4"]} type="radio" name="css-tabs" />

        <div id={imageTab["content"]}>
          <section id={imageTab["content1"]}>
            <img src={image1} alt="" />
          </section>
          <section id={imageTab["content2"]}>
            <img src={image2} alt="" />
          </section>
          <section id={imageTab["content3"]}>
            <img src={image3} alt="" />
          </section>
          <section id={imageTab["content4"]}>
            <img src={image4} alt="" />
          </section>
        </div>
        <div id={imageTab["tabs"]}>
          <label id={imageTab["tab1"]} htmlFor={imageTab["radio1"]}></label>
          <label id={imageTab["tab2"]} htmlFor={imageTab["radio2"]}></label>
          <label id={imageTab["tab3"]} htmlFor={imageTab["radio3"]}></label>
          <label id={imageTab["tab4"]} htmlFor={imageTab["radio4"]}></label>
        </div>
      </main>
      <style jsx>
        {`
          #tab1::before {
            background-image: url(${image1});
          }
          #tab2::before {
            background-image: url(${image2});
          }
          #tab3::before {
            background-image: url(${image3});
          }
          #tab4::before {
            background-image: url(${image4});
          }
        `}
      </style>
    </div>
  );
};

export default ImageTab;
