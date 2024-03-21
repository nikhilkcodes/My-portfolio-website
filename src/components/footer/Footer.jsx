import React from "react";
import ContentWrapper from './../contentWrapper/ContentWrapper'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './style.css';

const Footer = () => {
	return (
		<div className="footer-body">
			<ContentWrapper>
				<div className="container text-center">
					<div class="row row-cols-4 row-cols-lg-4 g-2 g-lg-3">
						<div className="col">
							<a href="https://www.linkedin.com/in/nikhil-singh-in/">
							<div className="social-icn text-black">
							<FaLinkedin />
							</div>
							</a>
						</div>
						<div className="col">
							<a href="https://www.instagram.com/nikhilsingh.dev/">
							<div className="social-icn text-black">
							<FaInstagram />
							</div>
							</a>
						</div>
						<div className="col">
							<a href="https://github.com/nikhilkcodes">
							<div className="social-icn text-black">
							<FaGithub />
							</div>
							</a>
						</div>
						<div className="col pb-4">
							<a href="https://twitter.com/mainikhilhun">
							<div className="social-icn text-black">
								<FaXTwitter />
							</div>
							</a>
						</div>
					</div>
					<h5 className="text-center text-black">Designed and developed by Nikhil Singh</h5>
				</div>
			</ContentWrapper>
		</div>
	)
}
export default Footer;
