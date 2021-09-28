import styles from "./world.module.css";
function World() {
  return (
    <div>
      <div className={styles["container-center-horizontal"]}>
        <div className={` ${styles["desktop"]} ${styles["screen"]}`}>
          <div className={styles["overlap-group"]}>
            <img className={styles["world-1"]} src="/images/worldMap/world.png" />

            <img className={styles["circle1"]} src="/images/worldMap/circle1.svg" />

            <img className={styles["circle2"]} src="/images/worldMap/circle2.svg" />

            <img className={styles["circle3"]} src="/images/worldMap/circle3.svg" />
          </div>
        </div>

      </div>
        <div className={styles["detail"]}>
          <h1>آدرس :تهران، منطقه 6، محله وصال شیرازی، م. ولی عصر، ضلع جنوبی بلوار کشاورز، پلاک 22، طبقه پنجم
  کد پستی : 1416773117</h1>
          <h2>021 -- شماره تماس : 88899776-88897672-88897237</h2>
          </div>
    </div>
  );
}

export default World;
