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
          <h1 id={styles["title"]}>Always A Level</h1>
          <h1 id={styles["subtitle"]}>
            100% Proved
          </h1>
        </div>
      </div>
      <DenturesP image="/images/glomlor.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="GLAMOUR"
        leftSubtitle="Materials: 
        %25 Composite
         %25 isosit 
        %50 PMMA
         4 Layers
         5 Cook 
        Materials from GERMANY 
        Made in I.D.M "
        direction="rtl"
      />
      <DenturesP
        image="/images/president.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="PRESIDENT"
        leftSubtitle=" Nano Composite Materials 
        5 Layers 6 Cook 
        Materials from GERMANY Made in I.D.M"
       direction="ltr"
      />
      <DenturesP
        image="/images/bstar.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="B STAR"
        leftSubtitle="  NANO COMPOSITE 
        best-dental 
        Made in GERMANy 
        Materials: 
        %35 NANO Composite
         %20 THF MMA
         %5 Ray Sorb MATERIAL
         %40 PMMA Nano Grade 
        4 Layers 5 Cook"
        direction="rtl"
      />
      <DenturesP
        image="/images/bstar2.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="B.STAR  (new)"
        leftSubtitle="MONO PLAN 
        NANO GLASS _MONO PLAN 
        best-dental
        Made in GERMANY 
        Materials:
         %35 NANO Composite 
        %20 THF MMA 
        %5 Ray Sorb MATERIAL 
        %40 PMMA Nano Grade 
        4 Layers 
        5 Cook "
        direction="ltr"
      />
      <DenturesP
        image="/images/apple.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="APPLE"
        leftSubtitle="Materials: 
        %30 Composite
        %20 isosit
        %10 Glanz
        %40 PMMA
        4 Layers 
       5 Cook 
       Materials from GERMANY Made in I.D.M"
        direction="rtl"
      />
      <DenturesP
        image="/images/superberelian.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="SUPER BERELIAN"
        leftSubtitle="Materials: 
        %13 Composite
         %15 isosit 
        %72 PMMA 
        3 Layers 
        4 Cook 
        Materials from GERMANY
         Made in I.D.M "
        direction="ltr"
      />
       <DenturesP
        image="/images/marjan.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="MARJAN NEW "
        leftSubtitle="Materials: 
        %13 Cross Linker
         %10 isosit 
        %77 PMMA 
        2 Layers 
        3 Cook 
        Materials from GERMANY 
        Made in I.D.M"
        direction="rtl"
      />
       <DenturesP
        image="/images/yagoot.jpg"
        leftSquareColor="#FFFBF0"
        middleSquareColor="#F6F0DE"
        rightSquareColor="#FFF"
        rightTitle="COLORS"
        leftBtnTitle="more Detail"
        middleBtnTitle="Like"
        rightBtnTitle="Add to"
        leftTitle="YAGHOOT"
        leftSubtitle="Materials: 
        %13 Composite
         %15 isosit 
        %72 PMMA 
        3 Layers 
        4 Cook 
        Materials from GERMANY
         Made in I.D.M "
        direction="ltr"
      />
    </Layout>
  );
}
