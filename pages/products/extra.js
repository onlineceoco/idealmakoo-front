import Layout from "../../components/H&F/Layout";
import DenturesP from "../../components/product/denturesProduct/DenturesP";
import styles from "../../styles/Toothpaste.module.css";
import React360Viewer from "../../components/3d/React360Viewer";
import useInView from "react-cool-inview";
import Head from "next/head";

export default function Toothpaste() {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });
  return (
    <>
      <Head>
        <title>IdealMakoo</title>
      </Head>
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
            <h1 id={styles["title"]}>لوازم جانبی</h1>
            <h1 id={styles["subtitle"]}>دندان پزشکی</h1>
          </div>
        </div>
        <DenturesP
          image="/images/extra.jpg"
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
        <div ref={observe}>
          <DenturesP
            image="/images/extra.jpg"
            leftSquareColor="antiquewhite"
            middleSquareColor="aquamarine"
            rightSquareColor="rgb(255, 191, 191)"
            rightTitle=""
            leftBtnTitle="more Detail"
            middleBtnTitle="Like"
            rightBtnTitle="Add to"
            leftTitle="Title"
            leftSubtitle="subTitle"
            direction="ltr"
          />
        </div>
        {inView && (
          <DenturesP
            image="/images/extra.jpg"
            leftSquareColor="antiquewhite"
            middleSquareColor="aquamarine"
            rightSquareColor="rgb(255, 191, 191)"
            rightTitle=""
            leftBtnTitle="more Detail"
            middleBtnTitle="Like"
            rightBtnTitle="Add to"
            leftTitle="Title"
            leftSubtitle="subTitle"
            direction="rtl"
          />
        )}
        {inView && (
          <DenturesP
            image="/images/extra.jpg"
            leftSquareColor="antiquewhite"
            middleSquareColor="aquamarine"
            rightSquareColor="rgb(255, 191, 191)"
            rightTitle=""
            leftBtnTitle="more Detail"
            middleBtnTitle="Like"
            rightBtnTitle="Add to"
            leftTitle="Title"
            leftSubtitle="subTitle"
            direction="ltr"
          />
        )}
        {inView && (
          <DenturesP
            leftSquareColor="antiquewhite"
            middleSquareColor="aquamarine"
            rightSquareColor="rgb(255, 191, 191)"
            rightTitle=""
            leftBtnTitle="more Detail"
            middleBtnTitle="Like"
            rightBtnTitle="Add to"
            leftTitle="Title"
            leftSubtitle="subTitle"
            direction="rtl"
          />
        )}
        {inView && (
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
        )}
      </Layout>
    </>
  );
}
