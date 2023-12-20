import React from "react";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Card from "../card/Card";
import './style.css';
import movie from './../../images/project1.png';
import hospital from './../../images/project2.png';
import todo from './../../images/project3.png';
import weather from './../../images/project4.png';
import currency from './../../images/project5.png';
import pretium from './../../images/project6.png';


const Portfolio = () => {
	return (
		<div className="portfolio-body">
			<ContentWrapper>
				<div className="container">
								<h1 className="text-white text-end pb-3">Personal Projects</h1>
				<div class="container text-start">
						<div class="row row-cols-1 row-cols-md-3 g-2 g-lg-3">
						<div class="col">
							<div class="p-3"><Card  imageUrl={movie}
							title="Movie database ( React & redux )"
							description="
							Led the creation of a dynamic movie database project with React, Redux, and SCSS. Implemented advanced features, including lazy loading and infinite scrolling, utilizing the TMDB API"
							buttonLink="https://github.com/nikhilkcodes/Cinemania-moviedb-react"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={hospital}
							title="Hospital Management System"
							description="Hospital Management System Integrated encryption and authentication features for enhanced security and efficiency, ensuring robust functionality and streamlined hospital operations."
							buttonLink="https://github.com/nikhilkcodes/Hospital-Management-System"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={todo}
							title="Todo List With Mongodb"
							description="Designed a task management system with CRUD operations. Implemented task completion status, Dark Mode for low-light visibility, and a responsive layout. Integrated MongoDB for efficient data storage and retrieval"
							buttonLink="https://github.com/nikhilkcodes/todo-list-assignment"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={weather}
							title="Weather app"
							description="Developed a Weather App using the OpenWeather API. Enables users to check and track weather conditions. Responsive design for seamless usage on desktop and mobile devices, providing accurate and timely weather information"
							buttonLink="https://github.com/nikhilkcodes/SkyDynamics-weather-app"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={currency}
							title="Currency convertor ( React )"
							description="Crafted a Currency Converter using React, offering users the ability to convert between different currencies. Responsive design ensures optimal user experience on both desktop and mobile platforms."
							buttonLink="https://github.com/nikhilkcodes/currency_convertor_react"
							/>
							</div>
						</div>
						<div class="col">
							<div class="p-3"><Card  imageUrl={pretium}
							title="Pretium Soltech"
							description="Designed a static website, including a contact page, using PHP and Bootstrap for a client project. The website showcases a professional and engaging interface, ensuring a seamless user experience across various devices."
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
