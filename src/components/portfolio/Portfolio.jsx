import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";
import './style.css';
import movie from './../../images/project1.png';
import hospital from './../../images/project2.png';
import todo from './../../images/project3.png';

import pretium from './../../images/project6.png';


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
							imageUrl={movie}
							title="VibeMatch ( Social Media Website )"
							videoUrl= "https://www.loom.com/share/c167ed702a594925b6a180ed3c5f9fe1?sid=e5927294-54d1-4e56-ac86-4b32a8356f64"
							buttonLink="https://github.com/nikhilkcodes/Vibe-match-social-media"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={movie}
							title="Movie database ( React & redux )"
							videoUrl="https://www.loom.com/share/2138576f3b274ca09cfe0549b9c6c8a8?sid=989ca4fa-96bf-40c5-b745-c48591ec0d89"
							buttonLink="https://github.com/nikhilkcodes/Cinemania-moviedb-react"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={hospital}
							title="Hospital Management System"
							videoUrl="https://www.loom.com/share/80e4fa64b47741259d076c993dc84db1?sid=439b13f3-8b1c-4f84-8e1f-a579d991708b"
							buttonLink="https://github.com/nikhilkcodes/Hospital-Management-System"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={todo}
							title="Employee Management DB"
							videoUrl="https://www.loom.com/share/960cc32aafb241e4a3754a0600aefc49?sid=3e9d822d-d06e-428a-9224-1d5b726ab273"
							buttonLink="https://github.com/nikhilkcodes/Employee-management-db"
							/>
							</div>
						</div>


						<div class="col">
							<div class="p-3"><Card  imageUrl={pretium}
							title="Pretium Soltech"
							buttonLink="https://pretiumsoltech.com/"
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
