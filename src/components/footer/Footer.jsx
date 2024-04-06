import React from "react";
import ContentWrapper from './../contentWrapper/ContentWrapper'
import './style.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";

const Footer = () => {
	const socialIcons = [
		{icon : <FaXTwitter />, url: 'https://twitter.com/mainikhilhun' },
		{icon : <FaLinkedinIn />, url: 'https://www.linkedin.com/in/nikhil-singh-in/' },
		{icon : <RiGithubLine />, url: 'https://github.com/nikhilkcodes' }
	]


	const handleClick = (url) => {
         window.location.href = url;
	}
	return (
		<div className="footer-body">
			<ContentWrapper>
			<div className='text-center pt-2' data-aos="zoom-in">
			{socialIcons.map((socialIcons, index)=> (
									<div key={index} className="circle text-black" onClick={() => handleClick(socialIcons.url)}>
									<span>{socialIcons.icon}</span>
								  </div>
								  ))}
								<p className="text-center pt-3 pb-2">© Copyright ©2024 All rights reserved | Designed & Developed By Nikhil Singh</p>
					</div>
			</ContentWrapper>
		</div>
	)
}
export default Footer;
