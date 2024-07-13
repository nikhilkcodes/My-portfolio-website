import React, { useState } from "react";
const Card = (props) => {
	const { imageUrl, title, videoUrl, buttonLink, Demo } = props

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="card h-100" data-aos="zoom-in" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div className="video-container">
				{isHovered && <video autoPlay muted loop src={videoUrl} poster={imageUrl} className="card-img-top" alt="..." />}
				{!isHovered && <img src={imageUrl} className="card-img-top" alt="..." />}
			</div>
			<div className="card-body">
				<p className="card-title dark:text-white">{title}</p>
				<a href={buttonLink} className="bg-transparent border border-black text-black rounded-lg py-2 px-4 block text-center dark:bg-gray-900 dark:text-white dark:border-white">
					Github
				</a>
				<a href={Demo} className="bg-transparent border border-black text-black rounded-lg py-2 px-4 block mt-2 text-center dark:bg-gray-900 dark:text-white dark:border-white">
					Demo
				</a>
			</div>
		</div>
	);
}
export default Card;
