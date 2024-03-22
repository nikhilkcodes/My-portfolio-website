import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";
import './style.css';
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

const Portfolio = () => {
	return (
		<div className="portfolio-body">
			<ContentWrapper>
			<h1 className="text-black text-center pb-3">Projects</h1>
				<div className="container">
				<div class="container text-start">
						<div class="row row-cols-1 row-cols-md-3 g-2 g-lg-3">
						<div class="col">
							<div class="p-3"><Card
							imageUrl={vibe}
							title="VibeMatch ( Social Media Website )"
							videoUrl={vibevideo}
							buttonLink="https://github.com/nikhilkcodes/Vibe-match-social-media"
							Demo='https://vibematchup.netlify.app/sign-in'
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={movie}
							title="Movie database ( React & redux )"
							videoUrl={cinemania}
							buttonLink="https://github.com/nikhilkcodes/Cinemania-moviedb-react"
							Demo='https://cinemania-moviedb-react-zgvz-cqij30rbd-nikhil-singhs-projects.vercel.app/'
							/>
							</div>
						</div>
						<div class="col">
						    <div class="p-3"><Card  imageUrl={hospital}
							title="Hospital Management DB ( Node.JS )"
							videoUrl={hospitalvideo}
							buttonLink="https://github.com/nikhilkcodes/Hospital-Management-System"
						    Demo='https://www.loom.com/share/0573038c8203445388d919d2fe573a23?sid'
						/>
						</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={employee}
							title="Employee Management DB"
							videoUrl={employeevideo}
							buttonLink="https://github.com/nikhilkcodes/Employee-management-db"
							Demo='https://www.loom.com/share/15476fe1bb284f22963691a9f525ab75?sid=acd8c1fa-2d80-48a1-8487-b966d4f39fc0'
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={todo}
							title="Simple Todo-List"
							videoUrl={todovideo }
							buttonLink="https://github.com/nikhilkcodes/todo-react"
							Demo='https://todo-react-steel-alpha.vercel.app/'
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={pretium}
							title="Pretium Soltech"
							buttonLink="https://pretiumsoltech.com/"
							Demo='https://pretiumsoltech.com/'
							/>
						</div>
						</div>
					</div>
				</div>
				</div>
			</ContentWrapper>
		</div>
	)
}
export default Portfolio;
