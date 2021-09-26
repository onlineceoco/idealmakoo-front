/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Tooltip2 from "../tooltip/tooltip2";
import styles from "./dental.module.css";
function Dental() {
  const [show, setShow] = useState(false);
  let menRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     if (menRef.current) {
  //       if (!menRef.current.contains(event.target)) {
  //         setShow(!show);
  //       }
  //     }
  //   });
  // });
  return (
    <div className={styles["container-center-horizontal"]}>
      <div className={`${styles["frame-2"]} ${styles["screen"]}`}>
        <div className={styles["overlap-group"]}>
          
            <img
              alt=""
              ref={menRef}
              className={styles["t1"]}
              src="images/tooth/t1.png"
            />
         
          <img alt="" className={styles["t2"]} src="images/tooth/t2.png" />
          <img alt="" className={styles["t3"]} src="images/tooth/t3.png" />
          <img alt="" className={styles["t4"]} src="images/tooth/t4.png" />
          <img alt="" className={styles["t5"]} src="images/tooth/t5.png" />
          <img alt="" className={styles["t6"]} src="images/tooth/t6.png" />
          <img alt="" className={styles["t7"]} src="images/tooth/t7.png" />
          <img alt="" className={styles["t8"]} src="images/tooth/t8.png" />
          <img alt="" className={styles["t9"]} src="images/tooth/t9.png" />
          <img alt="" className={styles["t10"]} src="images/tooth/t10.png" />
          <img alt="" className={styles["t11"]} src="images/tooth/t11.png" />
          <img alt="" className={styles["t13"]} src="images/tooth/t13.png" />
          <img alt="" className={styles["t14"]} src="images/tooth/t14.png" />
          <img alt="" className={styles["t15"]} src="images/tooth/t15.png" />
          <img alt="" className={styles["t16"]} src="images/tooth/t16.png" />
          <Tooltip2
            content="Third Molar"
            direction="right"
            top="100%"
          >
            <img
              ref={menRef}
              alt=""
              className={`${styles["t1r"]}`}
              src="images/tooth-red/t1.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Molar"
            direction="right"
            top="100%"
          >
            <img
              ref={menRef}
              alt=""
              className={`${styles["t2r"]} `}
              src="images/tooth-red/t2.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Molar"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t3r"]}
              src="images/tooth-red/t3.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Bicuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t4r"]}
              src="images/tooth-red/t4.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Bicuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t5r"]}
              src="images/tooth-red/t5.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Cuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t6r"]}
              src="images/tooth-red/t6.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Lateral incisot"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t7r"]}
              src="images/tooth-red/t7.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Central Incisor"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t8r"]}
              src="images/tooth-red/t8.png"
            />
          </Tooltip2>
          <Tooltip2
            content=" Lateral Incisot"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t9r"]}
              src="images/tooth-red/t9.png"
            />
          </Tooltip2>
          <Tooltip2
            content=" Cuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t10r"]}
              src="images/tooth-red/t10.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Bicuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t11r"]}
              src="images/tooth-red/t11.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Bicuspid"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t12r"]}
              src="images/tooth-red/t12.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Molar"
            direction="right"
            top="100%"
          >
            <img
              alt=""
              className={styles["t13r"]}
              src="images/tooth-red/t13.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Molar"
            direction="right"
            top="100%"
          >
            <img
              ref={menRef}
              alt=""
              className={styles["t14r"]}
              src="images/tooth-red/t14.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Third Molar"
            direction="right"
            top="100%"
          >
            <img
              ref={menRef}
              alt=""
              className={styles["t15r"]}
              src="images/tooth-red/t15.png"
            />
          </Tooltip2>
        </div>
        <div className={styles["overlap-group1"]}>
          <img alt="" className={styles["t17"]} src="images/tooth/t17.png" />
          <img alt="" className={styles["t18"]} src="images/tooth/t18.png" />
          <img alt="" className={styles["t19"]} src="images/tooth/t19.png" />
          <img alt="" className={styles["t20"]} src="images/tooth/t20.png" />
          <img alt="" className={styles["t21"]} src="images/tooth/t21.png" />
          <img alt="" className={styles["t22"]} src="images/tooth/t22.png" />
          <img alt="" className={styles["t23"]} src="images/tooth/t23.png" />
          <img alt="" className={styles["t24"]} src="images/tooth/t24.png" />
          <img alt="" className={styles["t25"]} src="images/tooth/t25.png" />
          <img alt="" className={styles["t26"]} src="images/tooth/t26.png" />
          <img alt="" className={styles["t27"]} src="images/tooth/t27.png" />
          <img alt="" className={styles["t28"]} src="images/tooth/t28.png" />
          <img alt="" className={styles["t29"]} src="images/tooth/t29.png" />
          <img alt="" className={styles["t30"]} src="images/tooth/t30.png" />
          <img alt="" className={styles["t31"]} src="images/tooth/t31.png" />
          <Tooltip2
            content="Third Molar"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t16r"]}
              src="images/tooth-red/t16.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Molar"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t17r"]}
              src="images/tooth-red/t17.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Molar"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t18r"]}
              src="images/tooth-red/t18.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Bicuspid"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t19r"]}
              src="images/tooth-red/t19.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Bicuspid"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t20r"]}
              src="images/tooth-red/t20.png"
            />
          </Tooltip2>
          <Tooltip2
            content="cuspid"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t21r"]}
              src="images/tooth-red/t21.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Lateral Incisot"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t22r"]}
              src="images/tooth-red/t22.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Central Incisor"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t23r"]}
              src="images/tooth-red/t23.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Lateral Incisot"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t24r"]}
              src="images/tooth-red/t24.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Cuspid"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t25r"]}
              src="images/tooth-red/t25.png"
            />
          </Tooltip2>
          <Tooltip2 content="First Bicuspid" direction="right" top="-10%">
            <img
              alt=""
              className={styles["t26r"]}
              src="images/tooth-red/t26.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Bicuspid"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t27r"]}
              src="images/tooth-red/t27.png"
            />
          </Tooltip2>
          <Tooltip2
            content="First Molar"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t28r"]}
              src="images/tooth-red/t28.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Second Molar"
            direction="right"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t29r"]}
              src="images/tooth-red/t29.png"
            />
          </Tooltip2>
          <Tooltip2
            content="Third Molar"
            direction="left"
            top="-10%"
          >
            <img
              alt=""
              className={styles["t30r"]}
              src="images/tooth-red/t30.png"
            />
          </Tooltip2>
        </div>
      </div>
    </div>
  );
}

export default Dental;
