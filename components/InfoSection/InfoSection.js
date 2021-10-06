import React from 'react'
import { Button } from '../Button/ButtonElemnts';
import Resp from '../responsive/resp';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements'
import Link from 'next/link'



const InfoSection = ({lightBg, id,btnDisplay, topLine, headLine, description,btnLink, buttonLable,img,alt,imgStart, lightText, darkText, dark, dark2,
    details, primary,imgDisplay,videoDisplay,respDisplay }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart} >
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading  lightText={lightText}>{headLine} </Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <div style={{display:btnDisplay}}>
                            <BtnWrap>
                                <Link href={btnLink} passHref><Button 
                                to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}

                               >{buttonLable}</Button></Link>
                            </BtnWrap></div>
                        </TextWrapper>
                                
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <div style={{display:respDisplay}}><Resp /></div>
                                <Img src={img} alt={alt} style={{display:imgDisplay}} />
                                <video  id='video' src="videos/factory2.mp4" style={{display:videoDisplay}} autoPlay loop muted  type="video/mp4"/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
                <style jsx>
                    {`
                        #video{
                            width: 100%;
                            height: 100%;
                            display: none;
                            filter: drop-shadow(00px 10px 20px rgba(0, 0, 0, 0.425));  
                            transition: all 1s ease-in-out;
                            border-radius: 10px;
                        }
                        #video:hover {
                            transform: scale(1.06);
                            filter: drop-shadow(00px 40px 20px rgba(0, 0, 0, 0.425));
                               cursor: pointer; 
                        }
                    `}
                </style>
            </InfoContainer>
        </>
    )
}

export default InfoSection
