import React, {useState, useEffect} from 'react'
import {FaBars, FaWindows} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn,Img  } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll } from 'react-scroll';
import  Link  from 'next/link';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrolNav] = useState(false);

    const changeNav = () => {
        if (FaWindows.scrolly >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
      <>
      <IconContext.Provider value={{ color: 'red'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavBtn>
                    <Link href='/login'>{<NavBtnLink > ثبت نام / ورود </NavBtnLink>}</Link>
                </NavBtn>
                
                
                <MobileIcon onClick={toggle} >
                    <FaBars style={{color:`#ff0000`}} />
                </MobileIcon>
                <NavMenu>
                
                
                <NavItem>
                        <NavLinks to='home' smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active' >صفحه اصلی</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='product' smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>محصولات</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='honers'
                           smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>گواهی و افتخارات</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='news'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>وبلاگ و خبرنامه</NavLinks>
                    </NavItem><NavItem>
                        <NavLinks to='about'
                        smooth={true} duration={1000} spy={true} exact='true' offset={-80} activeClass='active'>ارتباط با ما</NavLinks>
                    </NavItem>
                    
                </NavMenu>
                <Link href="/" >{<NavLogo  onClick={toggleHome} >  IDEAL MAKOO <Img src="./images/kk.jpg" alt="oficial"/> </NavLogo>}</Link>
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
