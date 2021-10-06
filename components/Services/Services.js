import React from "react";
import { ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      link: "/products/dentures ",
      image: "images/521.jpg",
      title: "دندان مصنوعی",
      descreption: "تولید دندان های مصنوعی برای بازار های داخلی و خارجی",
    },
    {
      link: "/products/dentalMaterials ",
      image: "images/000.jpg",
      title: "مواد دندان",
      descreption: "تولید مواد دندان در کیفیت های جهانی",
    },
    {
      link: "/products/Toothpaste ",
      image: "images/001.jpg",
      title: " مسواک و خمیردندان",
      descreption: "  محافظ و پاک کننده بسیار قوی دندان ",
    },
  ];
  return (
    <ServicesContainer id="Services">
      <ServicesH1> Our Product Line </ServicesH1>
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
            <Link href={`${item.link}`} passHref>
              <ServicesIcon src={item.image} /></Link>
            <Link href={`${item.link}`} passHref><ServicesH2>{item.title}</ServicesH2></Link>
            <Link href={`${item.link}`} passHref><ServicesP>{item.descreption}</ServicesP></Link>
            
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
