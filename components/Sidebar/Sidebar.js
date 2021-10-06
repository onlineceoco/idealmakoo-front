import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
import Link from 'next/link';



const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>صفحه اصلی </SidebarLink>
                    <SidebarLink to='product'  onClick={toggle}>محصولات </SidebarLink>
                    <SidebarLink to='honers'  onClick={toggle}>گواهی و افتخارات </SidebarLink>
                    <SidebarLink to='news'  onClick={toggle}>وبلاگ و خبرنامه </SidebarLink>
                    <SidebarLink to='about'  onClick={toggle}>ارتباط با ما </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <Link href='login'>{<SidebarRoute>ثبت نام / ورود</SidebarRoute>}</Link>
                </SideBtnWrap>
                
            </SidebarWrapper>
        </SidebarContainer>    
    );
};

export default Sidebar;