import modalcssStyle from "../../styles/single_product.module.css";
import ImageTab from "../../components/SingleProductElement/ImageTab";
import PlusMinusBtn from "../../components/SingleProductElement/PlusMinusBtn";
import DescriptionComment from "../../components/SingleProductElement/DescriptionComment";
import Head from "next/head";

const detaile = {
  image1: "/images/5211.jpg",
  image2: "/images/bstar.jpg",
  image3: "/images/0125.png",
  image4: "/images/5211.jpg",
  linkTitle: "داروخانه",
  subLinkTitle: "واکسن",
  productName_fa: "نام محصول",
  productName_en: "Product Name",
  productDetaile: "matn",
  price: "2000000",
  btnTitle: "Add to cart",
  leftTabTitle: "Description",
  rightTabTitle: "Comment",
};
export default function Modal() {
  return (
    <>
      <Head>
        <title>IdealMakoo</title>
      </Head>
      <div>
        <div className={modalcssStyle["setFixed"]}>
          <div className={modalcssStyle["container"]}>
            <div className={modalcssStyle["leftSide"]}>
              <ImageTab
                image1={detaile.image1}
                image2={detaile.image2}
                image3={detaile.image3}
                image4={detaile.image4}
              />
            </div>
            <div className={modalcssStyle["rightSide"]}>
              <div className={modalcssStyle["linkName"]}>
                <h1 id={modalcssStyle.link}>{detaile.linkTitle}</h1>
                <h1 id={modalcssStyle.dash}>/</h1>
                <h1 id={modalcssStyle.link}>{detaile.subLinkTitle}</h1>
              </div>
              <h1 id={modalcssStyle["productTitleFa"]}>
                {detaile.productName_fa}
              </h1>
              <h1 id={modalcssStyle["productTitleEn"]}>
                {detaile.productName_en}
              </h1>
              <p id={modalcssStyle["productDetaile"]}>
                {detaile.productDetaile}
              </p>
              <PlusMinusBtn />
              <div className={modalcssStyle["price"]}>
                <h1 id={modalcssStyle["priceTitle"]}>{detaile.price} تومان</h1>
                <h1 id={modalcssStyle["priceTitle"]}>قیمت</h1>
              </div>
              <button id={modalcssStyle["button"]}>{detaile.btnTitle}</button>
            </div>
            <div className={modalcssStyle.description}>
              <DescriptionComment
                leftTabTitle={detaile.leftTabTitle}
                rightTabTitle={detaile.rightTabTitle}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
