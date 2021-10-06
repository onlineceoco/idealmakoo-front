import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/dentuer.module.css";
import Link from "next/link";
import Head from "next/head";

const Advisor = () => (
  <>
    <Head>
      <title>IdealMakoo</title>
    </Head>
    <Layout className={styles.container}>
      {/* ######################################################Video Section */}
      <div className={styles.videoPlace}>
        <div className={styles.video}>
          <video
            src="/videos/factory2.mp4"
            alt=""
            autoPlay
            loop
            muted
            type="video/mp4"
          />
        </div>
        <div className={styles.video_title}>
          <h1>Robotic </h1>
          <h2>Product Line</h2>
        </div>
      </div>
      {/* ############################################################################# Section One */}
      <div className={styles.section} style={{ background: "#fff" }}>
        <div className={styles.leftSide}>
          <img src="/images/iso66.jpg" alt="ideal makoo Company" />
        </div>
        <div className={styles.rightSide}>
          <h1>زمینه فعالیت شرکت</h1>
          <h2 id={styles.titleh2}>
            تولیدات شرکت تولیدی دندان مصنوعی ایده آل ماکو در زمینه تجهیزات پزشکی
            و مصرفی پروتز دندانپزشکی می باشد که به صورت مستقل تولید و با برند
            های ایده آل ماکو به فروش می رسد. از جمله این محصولات می توان به
            دندان مصنوعی و کامپوزیت ،آمال کپ، آلژینات ،بیو فیلم ،آکریل ، انواع
            گچ ،موم دندانپزشکی و مسواک و خمیردندان اشاره کرد.
          </h2>
          {/* <Link href="/"><button  >ورود به چت روم دامپزشکان</button></Link> */}
        </div>
      </div>
      {/* ############################################################################# Section Two */}
      <div
        className={styles.section}
        style={{ direction: "rtl", background: "#FFE6E6" }}
      >
        <div className={styles.leftSide}>
          <img src="/images/teeth0112.png" alt="ideal makoo Company" />
        </div>
        <div className={styles.rightSide}>
          <h1 style={{ color: "#b30000" }}>طراحی مهندسی </h1>
          <h2 style={{ color: "#000" }}>
            تمام محصولات قبل از ورود به خط تولید توسط متخصصین این حوزه بررسی و
            از لحاظ هندسی و ساختاری آنالیز می شوند تا کوچکترین جزئیات رعایت شود
            تا محصول با کیفیت تولید شود.
          </h2>
          <Link href="/products/dentures">
            <button>مشاهده محصولات دندان</button>
          </Link>
        </div>
      </div>
      {/* ############################################################################# Section Three */}
      <div className={styles.section}>
        <div className={styles.leftSide}>
          <img src="/images/ios60.jpg" alt="VetNow Company" />
        </div>
        <div className={styles.rightSide} style={{ backgroundColor: "#fff" }}>
          <h1 style={{ color: "#ff9900" }}>کنترل کیفیت</h1>
          <h2>
            . محصولات تولید شده بصورت کامل توسط کارشناس های متخصص بررسی و آنالیز
            می شود تا دندان پزشکان و مصرف کنندگان عزیز با خیالی راحت از محصولات
            ایده آل ماکو استفاده کنند
          </h2>
          <Link href="/base/r_d/">
            <button>منابع تحقیقاتی</button>
          </Link>
        </div>
      </div>
      {/* ############################################################################# Section Four */}

      <style global jsx>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </Layout>
  </>
);
export default Advisor;
