import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import World from "../components/worldMap/world";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
  homeObjectFive,
} from "../components/InfoSection/Data";
import useInView from "react-cool-inview";
import HeroSectionLoad from "../components/HeroSection/HeroSectionLoad";
import React360Viewer from "../components/3d/React360Viewer";
const Drawer = dynamic(() => import("../components/Drawer/Drawer"));
const Navbar = dynamic(() => import("../components/Navbar/Navbar"));
const Sidebar = dynamic(() => import("../components/Sidebar/Sidebar"));
const Own = dynamic(() => import("../components/ownSlider/own"));
const InfoSection = dynamic(() =>
  import("./../components/InfoSection/InfoSection")
);
const Services = dynamic(() => import("../components/Services/Services"));
const Footer = dynamic(() => import("../components/Footer/Footer"));
const SliderOne = dynamic(() => import("../components/cardslider/sliderone"));
const Dental = dynamic(() => import("../components/3d/dental"));

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <>
      <Drawer />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Own />

      <InfoSection {...homeObjectOne} style={{ backgroundColor: "black" }} />
      <div style={{ margin: "0", padding: "0" }} ref={observe}>
        <InfoSection {...homeObjectTwo} />
        <h1 id={styles["threedView"]}>3D View</h1>
        <div className={styles["container"]}>
          <div className={styles["threeDSection"]}>
            {inView && (
              <React360Viewer
                amount={33}
                i={0}
                imagePath="images/awair-360"
                fileName="t{index}.png"
                autoplay={0}
                loop={5}
              />
            )}
          </div>
          {inView && <Dental />}
        </div>
        <div>{inView && <Services />}</div>
        <div>{inView && <InfoSection {...homeObjectThree} />}</div>

        {inView && <SliderOne />}

        <div>{inView && <InfoSection {...homeObjectFour} />}</div>
        <div>{inView && <InfoSection {...homeObjectFive} />}</div>
        {inView && <World />}

        <div>{inView && <Footer />}</div>
      </div>
    </>
  );
}
