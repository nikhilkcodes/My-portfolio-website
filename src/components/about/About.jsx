import React from 'react';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import profile from '../../images/profile-img.jpeg';
import SimpleCard from './SimpleCard';
import './style.css';  // Assuming this is where your custom styles are imported from
import Education from './Education';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import Contact from '../contact/Contact';
import useTheme from '../../Context/Theme';

const About = () => {

	const { themeMode } = useTheme();

	const experiences = [
		{
			id: 1,
			title: 'Node.js Developer',
			company: 'Vega6 Webware Technologies Pvt Ltd',
			date: 'July 2024 - Present',
			description: 'Responsible for backend development using Node.js and Express.js. Designed and implemented RESTful APIs for various functionalities. Collaborated with frontend developers to integrate user-facing elements with server-side logic. Implemented database solutions using MongoDB and PostgreSQL , and Cloud services like AWS and lenode.',
		},
		{
			id: 2,
			title: 'Frontend Developer',
			company: 'Virtual Orign',
			date: 'Aug 2022 - Feb 2023',
			description: 'Collaborated with a development team to create responsive web applications using HTML, CSS, and JavaScript. Ensured cross-browser compatibility and optimized website performance. Contributed to UI/UX design, implementing mockups and conducting user testing. Utilized Git for version control and actively participated in problem-solving.',
		},
		{
			id: 3,
			title: 'Future Ready Talent Intern',
			company: 'Nasscom',
			date: 'Jun 2022 - Aug 2022',
			description: 'Future Ready Talent is a virtual internship platform for students with an opportunity to learn in-demand technology skills and work towards solving real-world problems using Microsoft Azure & GitHub tools.',
		},
	];


	const socialIcons = [
		{ icon: <FaXTwitter />, url: 'https://twitter.com/mainikhilhun' },
		{ icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/nikhil-singh-in/' },
		{ icon: <RiGithubLine />, url: 'https://github.com/nikhilkcodes' }
	];

	const handleClick = (url) => {
		window.location.href = url;
	};

	return (
		<div className={`about-body ${themeMode === 'dark' ? 'bg-slate-700 text-white' : 'bg-white text-black'}`}>
			<ContentWrapper>
				<div className="pt-2" data-aos="zoom-in">
					<h2 className='text-center dark:text-white'><u> Who </u> am i ?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 pt-2">
						<div className='flex justify-center md:justify-start'>
							<div className="profile-img">
								<img src={profile} alt="" className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover" />
							</div>
						</div>
						<div className="flex justify-center md:justify-end">
							<div className="center-content">
								<p className='content text-lg-start text-sm-center dark:text-white'>
									Hey there, I'm Nikhil Singh, a MERN stack developer with a passion for cloud computing. I graduated from IMS Noida in 2023 with a BCA degree.
									I'm not just your average coder—I'm also big on sharing what I know through easy-to-understand tech content. And when I'm not glued to my screen, you'll probably catch me strumming my guitar, lost in the music.
									My dream? To use my skills to build something that really matters, something that makes a positive difference in the world. Stick around, and let's make some magic happen together, one step at a time.
								</p>
								<div className='text-center dark:text-white'>
									{socialIcons.map((socialIcon, index) => (
										<div key={index} className="flex items-center circle text-black cursor-pointer mx-2" onClick={() => handleClick(socialIcon.url)}>
											<span>{socialIcon.icon}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='pt-3'>
					<h2 className='text-center dark:text-white'>What i <u>do ?</u></h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						<SimpleCard title="Web Designing" text="Apart from CSS i do designing as well with Tailwind & tools like Figma & Adobe XD." />
						<SimpleCard title="Frontend Development" text="As a JavaScript developer, i am proficient in React, Redux, Tanstack & React Router." />
						<SimpleCard title="Backend Development" text="Node.JS, Express.JS, Databases like MongoDB & PostgresSQL." />
						<SimpleCard title="Cloud Computing" text="I am Certified in GCP, with Hands-on experience in Firebase & Appwrite too." />
					</div>
				</div>
				<div className='pt-3 pb-4'>
					<div className='education'>
						<h2 className='text-center dark:text-white'><u>Edu</u>cation</h2>
						<Education />
						<section className="colorlib-experience mt-4">
							<div className="grid grid-cols-1">
								<h2 className="text-center dark:text-white"><u>Work</u> Experience</h2>
							</div>
							<div className="grid grid-cols-1">
								{experiences.map((exp) => (
									<div key={exp.id} className="col-md-12">
										<div className="timeline-centered">
											<article className="timeline-entry">
												<div className="timeline-entry-inner">
													<div className="timeline-icon color-1">
														{/* include icon */}
													</div>
													<div className="timeline-label" data-aos="fade-right">
														<p className='dark:text-black'>{exp.title} - {exp.company} | &nbsp;&nbsp;<span>{exp.date}</span></p>
														<p className='dark:text-black'>{exp.description}</p>
													</div>
												</div>
											</article>
										</div>
									</div>
								))}
							</div>
						</section>
						<Contact />
					</div>
				</div>

			</ContentWrapper>
		</div>
	)
}

export default About;
