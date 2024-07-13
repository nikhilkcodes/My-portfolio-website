import React, { useState } from 'react';

const SimpleCard = ({ title, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    const hoverBackgroundColors = ['#FF204E', '#007F73', '#7E30E1', '#6F61C0'];
    const backgroundColor = isHovered ? hoverBackgroundColors[Math.floor(Math.random() * hoverBackgroundColors.length)] : 'white';

    return (
        <div className="col-md-6 col-lg-3" data-aos="zoom-in">
            <div
                className="card dark:text-white p-4 custom-card border-2 border-gray-200 rounded-lg overflow-hidden"
                style={{ backgroundColor }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="card-body dark:text-black" >
                    <h5 className="card-title text-xl font-bold mb-2">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;
