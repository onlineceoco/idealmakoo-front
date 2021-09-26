import Layout from "../../components/H&F/Layout";
import DenturesP from "../../components/product/denturesProduct/DenturesP";
import styles from "../../styles/Toothpaste.module.css";
import React360Viewer from "../../components/3d/React360Viewer";

export default function Toothpaste() {
  return (
    <Layout>
      <div className={styles["container"]}>
        <div className={styles["threeDSection"]}>
          <React360Viewer
            amount={33}
            i={0}
            imagePath="/images/awair-360"
            fileName="t{index}.png"
            autoplay={0}
            loop={1}
          />
        </div>
        <div className={styles["stuff"]}>
          <h1 id={styles["title"]}>Eu ipsum mollit dolor.</h1>
          <h1 id={styles["subtitle"]}>
            Est quis magna incididunt
          </h1>
        </div>
      </div>
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Glamour"
        leftSubtitle="subTitle"
        direction="rtl"
      />
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Title"
        leftSubtitle="subTitle"
        direction="ltr"
      />
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Title"
        leftSubtitle="subTitle"
        direction="rtl"
      />
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Title"
        leftSubtitle="subTitle"
        direction="ltr"
      />
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Title"
        leftSubtitle="subTitle"
        direction="rtl"
      />
      <DenturesP
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="GLAMOUR"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="Title"
        leftSubtitle="subTitle"
        direction="ltr"
      />
    </Layout>
  );
}
