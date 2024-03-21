import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Card = (props) => {
	const { imageUrl, title, videoUrl, buttonLink } = props

	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="card h-100" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false) }>
			<div className="video-container">
                {isHovered && <video autoPlay muted loop src={videoUrl} poster={imageUrl} className="card-img-top" alt="..." />}
                {!isHovered && <img src={imageUrl} className="card-img-top" alt="..." />}
            </div>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<a href={buttonLink} className="btn btn-outline-light d-flex justify-content-center">
					View Project &emsp;  <FaArrowUpRightFromSquare />
				</a>
			</div>
		</div>
	);
}
export default Card;
