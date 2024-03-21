import React, {useState, useEffect} from "react";
import './style.css';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import hand from '../../images/hand.png';
import profile from '../../images/profile-img.jpeg';
import Button from '../Button/Button'
const Intro = () => {
    const openGmailMessage = () => {
	const recipientEmail = 'nikhilsingh.cc@gmail.com';  // Replace with the recipient's email address
    const subject = 'Regarding Work';
    const customMessage = 'Hello, I would like to discuss a matter with you.';

    const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(customMessage)}`;

    window.location.href = mailtoURL;
	}

	const openLinkedInMessage = () => {
		const linkedinUsername = 'nikhil-singh-in';

		const customMessage = 'Hello Nikhil I saw your profile and loved your work i want to talk about collaboration !';
		const linkedinMessageURL = `https://www.linkedin.com/in/${linkedinUsername}/?originalSubdomain=messaging&isAuthenticated=true&message=${encodeURIComponent(customMessage)}`;
	    window.open(linkedinMessageURL, '_blank');
	}
	const roles = ["Mern Stack Developer", "Web Designer", "Freelancer"];
	const [currentRole, setCurrentRole] = useState("");
	useEffect(() => {
		// Declare variables to keep track of the current role index and character index.
		let roleIndex = 0;
		let charIndex = 0;
		// Set up an interval to run a function every 100 milliseconds.
		const intervalId = setInterval(() => {
			// Get the text of the current role from the roles array.
			const currentText = roles[roleIndex];
			// Update the displayed role by slicing the text up to the current character index.
			setCurrentRole((prevRole) =>
				charIndex < currentText.length
				? currentText.slice(0, charIndex + 1)
					: prevRole
			);
			// Increment the character index.
			charIndex += 1;
            //console.log(currentText);
			// Check if we've reached the end of the current role's text.
			if (charIndex > currentText.length) {
			// Reset the character index to start typing the next role from the beginning.
				charIndex = 0;

				// Move to the next role in the array, looping back to the first role if necessary.
				roleIndex = (roleIndex + 1) % roles.length;
		}
			//console.log(currentText);
		}, 100);
		return () => clearInterval(intervalId);

	}, []);

	return (
		<div className="intro-color">
		<ContentWrapper>
			<div className="intro-section">
				<div className="container" />
				<div className="row align-items-start">
					<div className="col-md-6 order-md-1">
						<span className="profile-icn">
							<img src={profile} alt="Profile" />
						</span>
					</div>
					<div className="col-md-6 order-md-2">
						<div>
							<h5 className="text-black text-center">
								<a target="_blank" rel="noopener noreferrer">Hello
									<span className="icon">
										<img src={hand} />
									</span>
								</a>
							</h5>
							<h2 className="mt-3 mb-3 text-black text-center">I'm Nikhil Singh</h2>
							<h5 className="mb-4 text-black text-center">{currentRole}</h5>
							<p className="text-black text-center">
								I'm Nikhil Singh, a recent graduate and MERN stack developer. Armed
								with expertise in MongoDB, Express.js, React.js, and Node.js. I love
								to write about new technologies and build cool products, seeking job
								and freelance opportunities. Passionate about crafting dynamic web
								solutions. Let's collaborate and create something amazing! Explore
								my portfolio for more.
							</p>
							<div className="container text-center">
								<div className="row">
									<div className="col">
										<Button onClick={openGmailMessage} value="Contact me" />
									</div>
									<div className="col">
										<Button onClick={openLinkedInMessage} value="Hire me" />
									</div>
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
