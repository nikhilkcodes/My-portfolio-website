import React from 'react'
import './style.css'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
const Testimonial = () => {
  return (
    <div className="testimonial-body pt-3">
      <ContentWrapper >
        <h2 className='text-center'>Testimo<u>nials</u></h2>
        <div id="testimonial-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="testimonies">
            <div className="carousel-item active p-3">
              <div className="text-center">
                <h4 className='text-black'>"Nikhil's enthusiasm and commitment to learning as an intermediate MERN stack developer have been commendable. Despite his intermediate level, he has shown a great attitude towards collaboration and a willingness to tackle new challenges. He's a valuable asset to any team."</h4>
                <p className='text-black'><MdKeyboardDoubleArrowDown /></p>
                <h6 className='text-black pt-3'>Nisha Singh - Business Development Manager</h6>
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="text-center">
                <h4 className='text-black'>"Working with Nikhil, I found him to be a proactive and eager learner. As an intermediate MERN stack developer, he quickly grasped concepts and contributed effectively to our project. His positive attitude and adaptability make him a promising talent."</h4>
                <p className='text-black'><MdKeyboardDoubleArrowDown /></p>
                <h6 className='text-black pt-3'> Akash Kumar Singh - Animator Freelancer</h6>
              </div>
            </div>
            <div className="carousel-item p-3">
              <div className="text-center">
                <h4 className='text-black'>"Nikhil's internship showcased his dedication and proactive approach to learning. As an intermediate developer, he displayed a strong work ethic and a willingness to take on tasks. Nikhil's potential for growth in the field is evident, and I believe he will continue to excel."</h4>
                <p className='text-black'><MdKeyboardDoubleArrowDown /></p>
                <h6 className='text-black pt-3'> Roshan Kumar - Manager, Virtual Origin</h6>
              </div>
            </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
         <span className='text-dark'> <FaArrowLeft /> </span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
          <span className='text-dark'><FaArrowRight /></span>
        </button>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Testimonial
