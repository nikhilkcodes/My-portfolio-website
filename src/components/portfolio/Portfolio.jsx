import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";
import movie from './../../images/project1.png';
import hospital from './../../images/project2.png';
import pretium from './../../images/project6.png';
import todo from './../../images/todo.png';
import vibe from './../../images/vibe.png';
import employee from './../../images/employee.png';
import vibevideo from './../../assets/videos/vibe.mp4';
import hospitalvideo from './../../assets/videos/hospital.mp4';
import employeevideo from './../../assets/videos/employee.mp4';
import cinemania from './../../assets/videos/cinemania.mp4';
import todovideo from './../../assets/videos/todo.mp4';
import useTheme from "../../Context/Theme"; // Adjust the import path as per your actual file location

const Portfolio = ({ style }) => {
	const { themeMode } = useTheme(); // Assuming useTheme provides themeMode

	return (
		<div className={`portfolio-body ${themeMode === 'dark' ? 'bg-slate-700' : 'bg-white'}`} style={style}>
			<ContentWrapper>
				<h1 className={`text-lg ${themeMode === 'dark' ? 'text-white' : 'text-black'} text-center pt-4 pb-3`}>
					<u>Proj</u>ects
				</h1>
				<div className="container pb-5">
					<div className="container text-start">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
							<div className="col">
								<CardWithDarkBackground
									imageUrl={vibe}
									title="VibeMatch ( Social Media Website )"
									videoUrl={vibevideo}
									buttonLink="https://github.com/nikhilkcodes/Vibe-match-social-media"
									Demo='https://vibematchup.netlify.app/sign-in'
									themeMode={themeMode}
								/>
							</div>
							<div className="col">
								<CardWithDarkBackground
									imageUrl={movie}
									title="Movie database ( React & redux )"
									videoUrl={cinemania}
									buttonLink="https://github.com/nikhilkcodes/Cinemania-moviedb-react"
									Demo='https://cinemania-moviedb-react-zgvz-cqij30rbd-nikhil-singhs-projects.vercel.app/'
									themeMode={themeMode}
								/>
							</div>
							<div className="col">
								<CardWithDarkBackground
									imageUrl={hospital}
									title="Hospital Management DB ( Node.JS )"
									videoUrl={hospitalvideo}
									buttonLink="https://github.com/nikhilkcodes/Hospital-Management-System"
									Demo='https://www.loom.com/share/0573038c8203445388d919d2fe573a23?sid'
									themeMode={themeMode}
								/>
							</div>
							<div className="col">
								<CardWithDarkBackground
									imageUrl={employee}
									title="Employee Manage DB"
									videoUrl={employeevideo}
									buttonLink="https://github.com/nikhilkcodes/Employee-management-db"
									Demo='https://www.loom.com/share/15476fe1bb284f22963691a9f525ab75?sid=acd8c1fa-2d80-48a1-8487-b966d4f39fc0'
									themeMode={themeMode}
								/>
							</div>
							<div className="col">
								<CardWithDarkBackground
									imageUrl={todo}
									title="Simple Todo-List"
									videoUrl={todovideo}
									buttonLink="https://github.com/nikhilkcodes/todo-react"
									Demo='https://todo-react-steel-alpha.vercel.app/'
									themeMode={themeMode}
								/>
							</div>
							<div className="col">
								<CardWithDarkBackground
									imageUrl={pretium}
									title="Pretium Soltech"
									buttonLink="https://pretiumsoltech.com/"
									Demo='https://pretiumsoltech.com/'
									themeMode={themeMode}
								/>
							</div>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
}

const CardWithDarkBackground = ({ imageUrl, title, videoUrl, buttonLink, Demo, themeMode }) => {
	return (
		<div className={`card ${themeMode === 'dark' ? 'dark:bg-slate-900' : 'bg-white'} rounded-lg border border-gray-300 hover:shadow-md transition duration-300`}>
			<div className="p-3">
				<Card
					imageUrl={imageUrl}
					title={title}
					videoUrl={videoUrl}
					buttonLink={buttonLink}
					Demo={Demo}
					darkMode={themeMode === 'dark'} // Pass darkMode prop based on themeMode
					titleClassName={themeMode === 'dark' ? 'text-white' : 'text-black'} // Conditional title text color class
				/>
			</div>
		</div>
	);
}

export default Portfolio;
