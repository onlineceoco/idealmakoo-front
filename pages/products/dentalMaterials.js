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
              amount={36}
              i={1}
              imagePath="/images/molocul"
              fileName="m{index}.jpg"
              autoplay={0}
              loop={1}
            />
          </div>
          <div className={styles["stuff"]}>
            <h1 id={styles["title"]}> Dental Materials</h1>
            <h1 id={styles["subtitle"]}>Best Quality</h1>
          </div>
        </div>
        <DenturesP
          image="/images/material011.jpg"
          leftSquareColor="antiquewhite"
          middleSquareColor="aquamarine"
          rightSquareColor="rgb(255, 191, 191)"
          rightTitle="B star"
          leftBtnTitle="more Detail"
          middleBtnTitle="Like"
          rightBtnTitle="Add to"
          leftTitle="B STAR CUP 2"
          leftSubtitle="subTitle"
          direction="rtl"
        />
        <div ref={observe}>
          <DenturesP
            image="/images/materiall012.jpg"
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
            image="/images/matria013.jpg"
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
            image="/images/material011.jpg"
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
            image="/images/material011.jpg"
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
            image="/images/material011.jpg"
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
      </Layout>
    </>
  );
}
