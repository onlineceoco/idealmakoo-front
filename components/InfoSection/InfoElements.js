import styled from "styled-components";

export const InfoContainer = styled.div`
  animation: sub 1.5s ease-in-out;
  direction: rtl;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#FFE6E6")};
  z-index: 1;
  font-family: iransans;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }`;
  /* }
  @keyframes sub {
    from {
      opacity: 0;
      margin-top: 80px;
    }
    to {
      opacity: 1;
      margin-top: 40;
    }
  } */


export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 100%;
  justify-content: center;

  @media screen and (max-width: 1048px) {
    height: auto;
    min-height: 500px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 50px;
    min-height: 500px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  padding: ;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 993px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    margin-right: 15px;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  max-width: 100%;
`;

export const Column2 = styled.div`
  grid-area: col2;
  max-width: 100%;
`;

export const TextWrapper = styled.div`
  max-width: max-content;
  padding-top: 0;
  text-align: center;
  white-space: nowrap;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #ff0000;
  white-space: nowrap;
  text-align: center;
  padding-top: 25px;
  font-size: 20px;
  line-height: 70px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  padding-top: 15px;
  white-space: normal;
  font-size: 15px;
  line-height: 25x;
  text-align: center;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#000" : "#010606")};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    line-height: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Subtitle = styled.p`
  max-width: 550px;
  text-align: justify;
  margin: 20px;
  white-space: normal;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  color: ${({ darkText }) => (darkText ? "#000" : "#000")};
  padding-bottom: 20px;
  padding-top: 20px;

  @media screen and (max-width: 480px) {
    margin: 0px;

    font-size: 12px;
    max-width: 100%;
    white-space: normal;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgWrap = styled.div`
  max-width: 94%;
  // background-color:black;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const Img = styled.img`
  width: 98%;
  border-radius: 50px;
  transition: all 0.6s ease-out;
  filter: drop-shadow(00px 10px 20px rgba(0, 0, 0, 0.425));

  &:hover {
    transform: scale(1.06);
    filter: drop-shadow(00px 40px 20px rgba(0, 0, 0, 0.425));
    cursor: pointer;
  }
`;

export const img = styled.img`
  width: 100%;
`;
