import Layout from "../../components/H&F/Layout";
import DenturesP from "../../components/product/denturesProduct/DenturesP";
import styles from "../../styles/Toothpaste.module.css";
import React360Viewer from "../../components/3d/React360Viewer";

export default function Toothpaste() {
  return (
    <Layout>
      <div className={styles["container"]} style={{display:"flex"}}>
        <div className={styles["threeDSection"]}>
          <React360Viewer
            amount={30}
            i={1}
            imagePath="/images/toothBrush"
            fileName="00-{index}.jpg"
            autoplay={0}
            loop={1}
          />
        </div>
        
      </div>
      <DenturesP
        image="/images/toothpaste.jpg"
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="toothpasate"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="toothpaste"
        leftSubtitle="Total Original Mint Triple Action Toothpaste 100ml"
        direction="rtl"
      />
       <DenturesP
        image="/images/toothpaste.jpg"
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="toothpasate"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="toothpaste"
        leftSubtitle="Total Original Mint Triple Action Toothpaste 100ml"
        direction="ltr"
      />
       <DenturesP
        image="/images/toothpaste.jpg"
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="toothpasate"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="toothpaste"
        leftSubtitle="Total Original Mint Triple Action Toothpaste 100ml"
        direction="rtl"
      />
        <DenturesP
        image="/images/toothpaste.jpg"
        leftSquareColor="antiquewhite"
        middleSquareColor="aquamarine"
        rightSquareColor="rgb(255, 191, 191)"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="toothpasate"
        leftSubtitle="Total Original Mint Triple Action Toothpaste 100ml"
        direction="ltr"
      />
    </Layout>
  );
}
