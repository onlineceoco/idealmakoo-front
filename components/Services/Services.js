import React from "react";
import {  ServicesContainer, ServicesWrapper, ServicesH1, ServicesCard,  ServicesIcon, ServicesH2, ServicesP,
} from "./ServicesElements";

const Services = () => {
  const services = [
    {
      image: "images/521.JPG",
      title: "دندان مصنوعی",
      descreption:
        "تولید دندان های مصنوعی برای بازار های داخلی و خارجی",
    },
    {
      image: "images/000.JPG",
      title: "مواد دندان",
      descreption:
        "تولید مواد دندان در کیفیت های جهانی",
    },
    {
      image: "images/001.JPG",
      title: " مسواک و خمیردندان",
      descreption:
        "  محافظ و پاک کننده بسیار قوی دندان ",
    },
  ];
  return (
    <ServicesContainer id="Services">
      <ServicesH1> Our Product Line </ServicesH1>
      <ServicesWrapper>
        {services.map((item, index) => (
          <ServicesCard key={index}>
            <ServicesIcon src={item.image} />
            <ServicesH2>{item.title}</ServicesH2>
            <ServicesP>{item.descreption}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
