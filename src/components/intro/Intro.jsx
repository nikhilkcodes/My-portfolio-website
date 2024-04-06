import React, {useState, useEffect} from "react";
import './style.css';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { GoLocation } from "react-icons/go";
import Button from '../Button/Button'
const Intro = () => {
    const openGmailMessage = () => {
	const recipientEmail = 'nikhilsingh.cc@gmail.com';  // Replace with the recipient's email address
    const subject = 'Regarding Work';
    const customMessage = 'Hello, I would like to discuss a matter with you.';

    const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(customMessage)}`;

    window.location.href = mailtoURL;
	}


	return (
		<div className="intro-color" data-aos="fade-right">
		<ContentWrapper>
			<div className="intro-section">
				<div className="container" />
				<div className="row align-items-center">
						<div>
							<h1 className="first-para text-black text-center">
								<a target="_blank" rel="noopener noreferrer">Hello
								👋
									World
								</a>
							</h1>
							<h2 className="first-para mt-3 mb-3 text-black text-center">I'm <u>Nikhil Singh</u> a Developer <br/> From Noida <GoLocation /> India</h2>
							<p className="text-black text-center">
							Experienced MERN stack developer passionate about crafting dynamic web solutions.
							<br />Open to job and freelance opportunities to collaborate and innovate.
							</p>
							<div className="container text-center">
								<div className="row">
									<div className="col">
										<Button onClick={openGmailMessage} value="Get In Touch" />
									</div>
								</div>
							</div>
						</div>
				</div>
			</div>
		</ContentWrapper>
		</div>
	);
}

export default Intro;
