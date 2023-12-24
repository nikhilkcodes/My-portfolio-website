import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const Card = (props) => {
	const {imageUrl, title, description, buttonLink} = props
	return (
		<div className="card bg-black" style={{ width: '18rem' }}>
		  <img src={imageUrl} className="card-img-top" alt="..." />
		  <div className="card-body">
			<h5 className="card-title text-white text-center">{title}</h5>
			<p className="card-text text-white text-center">{description}</p>
			<a href={buttonLink} className="btn btn-outline-light d-flex justify-content-center">
			  View Project &emsp;  <FaArrowUpRightFromSquare />
			</a>
		  </div>
		</div>
	  );
}
export default Card;
