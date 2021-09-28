import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={styles.grid}>
        <div className={styles.column1}>
          <h1 id={styles.title}>درباره ما</h1>
          <h2 id={styles.subTitle}>گواهی و افتخارات</h2>
          <h2 id={styles.subTitle}>مجوزها</h2>
          <h2 id={styles.subTitle}>ارتباط با ما</h2>
          <h2 id={styles.subTitle}>گالری تصاویر</h2>
          <h2 id={styles.subTitle}>حریم خصوصی</h2>
        </div>
        <div className={styles.column2}>
          <h1 id={styles.title}>محصولات</h1>
          <h2 id={styles.subTitle}>محصولات دندان</h2>
          <h2 id={styles.subTitle}>مواد دندان</h2>
          <h2 id={styles.subTitle}>خمیردندان</h2>
          <h2 id={styles.subTitle}>مسواک</h2>
          <h2 id={styles.subTitle}>تجهیزات تخصصی</h2>
        </div>
        <div className={styles.column3}>
          <h1 id={styles.title}>خدمات</h1>
          <h2 id={styles.subTitle}>منابع آموزشی</h2>
          <h2 id={styles.subTitle}>مشاوره تخصصی</h2>
          <h2 id={styles.subTitle}>خبرنامه ایده آل ماکو</h2>
          <h2 id={styles.subTitle}>خدمات دانشگاهی</h2>
          <h2 id={styles.subTitle}>تکنولوژی های جدید</h2>
        </div>
        <div className={styles.column4}>
          <h1 id={styles.title}>پشتیبانی</h1>
          <h2 id={styles.subTitle}>تماس با اپراتوری</h2>
          <h2 id={styles.subTitle}>پشتیبانی محصولات</h2>
          <h2 id={styles.subTitle}>پشتیبانی خدمات</h2>
          <h2 id={styles.subTitle}>انتقاد و پیشنهاد</h2>
          <h2 id={styles.subTitle}>همکاری با ما</h2>
        </div>
      </div>
      <div className={styles.bottomLogo}>
        <h1>IDEAL MAKOO</h1>
        <a href='https://www.onlineceo.ir' >OnlinCEO Programing company  {new Date().getFullYear()} All rights reserved</a>
        <div className={styles['logo']}>
        <div className={styles.otherlogo}><FaFacebook id={styles.facebook} /></div>
        <div className={styles.otherlogo}><FaInstagram id={styles.instagram} /></div>
        <div className={styles.otherlogo}><FaTwitter id={styles.twitter} /></div>
        <div className={styles.otherlogo}><FaWhatsapp id={styles.whatsapp} /></div>
        <div className={styles.otherlogo}><FaYoutube id={styles.youtube} /></div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
