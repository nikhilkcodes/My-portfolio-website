import React from "react";
import ContentWrapper from './../contentWrapper/ContentWrapper'
import './style.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import useTheme from "../../Context/Theme";

const Footer = () => {
    const { themeMode } = useTheme();
    const socialIcons = [
        { icon: <FaTwitter />, url: 'https://twitter.com/mainikhilhun' },
        { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/nikhil-singh-in/' },
        { icon: <RiGithubLine />, url: 'https://github.com/nikhilkcodes' }
    ];

    const handleClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className={`footer-body ${themeMode === 'dark' ? 'bg-slate-800' : ''}`}>
            <ContentWrapper>
                <div className='text-center pt-2' data-aos="zoom-in">
                    {socialIcons.map((socialIcon, index) => (
                        <div key={index} className="circle text-black" onClick={() => handleClick(socialIcon.url)}>
                            <span>{socialIcon.icon}</span>
                        </div>
                    ))}
                    <p className="text-center pt-3 pb-2 text-black dark:text-white">© Copyright ©2024 All rights reserved | Designed & Developed By Nikhil Singh</p>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Footer;
