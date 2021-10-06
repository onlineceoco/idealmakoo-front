import styles from "./Menubar.module.css";
import { FiSearch } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";

const Menubar = () => {
  return (
    <div className={styles["main"]}>
      <div className={styles["container_logo"]}>
        <Link href="/">
          {<img id={styles["logo_img"]} src="/images/logo.png" alt="logo" />}
        </Link>
        <Link href="/">{<h1 id={styles["logo_title"]}>IDEAL MAKOO</h1>}</Link>
      </div>
      <div className={styles["center"]}>
        <form className={styles["form"]} action="">
          <input id={styles["input"]} type="search" />
          <FiSearch id={styles["icon"]} />
        </form>
      </div>
      <Link href="/cart">{<HiShoppingCart id={styles["cart"]} />}</Link>
      <span id={styles["product_number"]}>0</span>
    </div>
  );
};

export default Menubar;
