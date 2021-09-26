import styles from "./world.module.css";
function World() {
  return (
    <div className={styles["container-center-horizontal"]}>
      <div className={` ${styles["desktop"]} ${styles["screen"]}`}>
        <div className={styles["overlap-group"]}>
          <img className={styles["world-1"]} src="/images/worldMap/world.png" />

          <img className={styles["circle1"]} src="/images/worldMap/circle1.svg" />

          <img className={styles["circle2"]} src="/images/worldMap/circle2.svg" />

          <img className={styles["circle3"]} src="/images/worldMap/circle3.svg" />
        </div>
      </div>
      <div className={styles["detail"]}>
        <h1>آدرس کارخانه : ایران , آذربایجان غربی , منطقه آزاد ماکو ,کارخانجات ایده آل ماکو</h1>
        <h2> شماره تماس : 044 3333 3333</h2>
        </div>

    </div>
  );
}

export default World;
