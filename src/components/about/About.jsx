import React from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import profile from '../../images/profile-img.jpeg';
import SimpleCard from './SimpleCard';
import './style.css';
import Education from './Education';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import Contact from '../contact/Contact';

const About = () => {

	const socialIcons = [
		{icon : <FaXTwitter />, url: 'https://twitter.com/mainikhilhun' },
		{icon : <FaLinkedinIn />, url: 'https://www.linkedin.com/in/nikhil-singh-in/' },
		{icon : <RiGithubLine />, url: 'https://github.com/nikhilkcodes' }
	]


	const handleClick = (url) => {
         window.location.href = url;
	}

	return (
		<div className="about-body">
			<ContentWrapper>
				<div className="pt-2" data-aos="zoom-in">
					<h2 className='text-center'><u> Who </u> am i ?</h2>
						<div class="row pt-2">
							<div className='col-md-6 center-content'>
								<div className="profile-img">
									<img src={profile} alt="" />
								</div>
							</div>
							<div className="col-md-6">
								<div className="center-content">
									<p className='content text-lg-start text-sm-center'>
										Hey there, I'm Nikhil Singh, a MERN stack developer with a passion for cloud computing. I graduated from IMS Noida in 2023 with a BCA degree.
										I'm not just your average coder—I'm also big on sharing what I know through easy-to-understand tech content. And when I'm not glued to my screen, you'll probably catch me strumming my guitar, lost in the music.
										My dream? To use my skills to build something that really matters, something that makes a positive difference in the world. Stick around, and let's make some magic happen together, one step at a time.
									</p>
								</div>
								<div className='text-center'>
								  {socialIcons.map((socialIcons, index)=> (
									<div key={index} className="circle text-black" onClick={() => handleClick(socialIcons.url)}>
									<span>{socialIcons.icon}</span>
								  </div>
								  ))}
								</div>
						</div>
					</div>
				</div>

				<div className='pt-3'>
					<h2 className='text-center'>What i <u>do ?</u></h2>
					<div class="row">
						<SimpleCard title="Web Designing" text="Apart from CSS i do designing as well with Tailwind & tools like Figma & Adobe XD." />
						<SimpleCard title="Frontend Development" text="As a JavaScript developer, i am proficient in React, Redux, Tanstack & React Router." />
						<SimpleCard title="Backend Development" text="Node.JS, Express.JS, Databases like MongoDB & PostgresSQL." />
						<SimpleCard title="Cloud Computing" text="I am Certified in GCP, with Hands-on experience in Firebase & Appwrite too." />
					</div>
				</div>
				<div className='pt-3 pb-4'>
					<div className='education'>
						<h2 className='text-center'><u>Edu</u>cation</h2>
						<Education />
						<section className="colorlib-experience">
							<div className="row">
								<h2 className='text-center'><u>Work</u> Experience</h2>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="timeline-centered">
										<article className="timeline-entry">
											<div className="timeline-entry-inner">
												<div className="timeline-icon color-1">
													{/**include icon */}
												</div>
												<div className="timeline-label"  data-aos="fade-right">
													<p>Frontend Developer - Virtual Orign | &nbsp;&nbsp;<span>Aug 2022 - Feb 2023</span></p>
													<p>Collaborated with a development team to create responsive web applications using HTML, CSS, and JavaScript.
														Ensured cross-browser compatibility and optimized website performance.Contributed to UI/UX design, implementing mockups and conducting user testing.
														Utilized Git for version control and actively participated in problem-solving.</p>
												</div>

											</div>
										</article>
										<article className="timeline-entry">
											<div className="timeline-entry-inner">
												<div className="timeline-icon color-2">
													{/** */}
												</div>
												<div className="timeline-label"  data-aos="fade-right">
													<p>Future Ready Talent Intern - Nasscom | &nbsp;&nbsp;<span>Jun 2022 - Aug 2022</span></p>
													<p>Future Ready Talent is a virtual internship platform for students with an opportunity to learn the in-demand technology skills and work towards solving real world problem using the power of Microsoft Azure & GitHub tools.</p>
												</div>
											</div>
										</article>
										<article className="timeline-entry">
											<div className="timeline-entry-inner">
												<div className="timeline-icon color-none">
												</div>
											</div>
										</article>
									</div>
								</div>
							</div>
						</section>
                    <Contact />
					</div>
				</div>

			</ContentWrapper>
		</div>
	)
}

export default About
