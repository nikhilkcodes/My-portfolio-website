import React, { useState } from 'react';
import './style.css';

const SimpleCard = ({ title, text }) => {

	const [isHovered, setIsHovered] = useState(false);

	const hoverBackgroundColors = ['#FF204E', '#007F73', '#7E30E1', '#6F61C0'];
	const backgroundColor = isHovered ? hoverBackgroundColors[Math.floor(Math.random() * hoverBackgroundColors.length)] : 'white';

  return (
    <div className="col-md-6 col-lg-3" data-aos="zoom-in"
	onMouseEnter={() => setIsHovered(true)}
	onMouseLeave={() => setIsHovered(false)}
	>
      <div className="card custom-card" style={{backgroundColor}}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
