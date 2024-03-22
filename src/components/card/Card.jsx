import React, { useState } from "react";
import { IoMdExit } from "react-icons/io";
const Card = (props) => {
	const { imageUrl, title, videoUrl, buttonLink, Demo } = props

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="card h-100" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) }>
			<div className="video-container">
                {isHovered && <video autoPlay muted loop src={videoUrl} poster={imageUrl} className="card-img-top" alt="..." />}
                {!isHovered && <img src={imageUrl} className="card-img-top" alt="..." />}
            </div>
			<div className="card-body">
				<p className="card-title">{title}</p>
				<a href={buttonLink} className="btn btn-outline-dark d-flex justify-content-center">
				Github
				</a>
				<a href={Demo} className="btn btn-outline-dark d-flex justify-content-center">
				Demo
				</a>
			</div>
		</div>
	);
}
export default Card;
