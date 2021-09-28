
import React,{useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import {Button} from '../Button/ButtonElemnts'; 
import Loading from '../Loading/Loading';


const HeroSectionLoad = () => {
    const [hover, setHover] = useState(false);
    const onHover = ()=> {setHover(!hover)};
            return (
        <HeroContainer>
            <HeroBg style={{backgroundColor:'white'}}>
               <Loading/>
            </HeroBg>
           
        </HeroContainer>
    );
};

export default HeroSectionLoad;
