import React from 'react'
import './style.css'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { Carousel } from 'antd';
import useTheme from '../../Context/Theme';

const Testimonial = () => {
  const { themeMode } = useTheme();
  const iconColor = themeMode === 'dark' ? 'text-white' : 'text-black';
  const contentStyle = {
    height: 'auto', // Ensure height is auto or sufficiently large
    lineHeight: '1.5', // Adjust line height as needed
    textAlign: 'center',
  };

  return (
    <div className={`testimonial-body pt-5 pb-5  ${themeMode === 'dark' ? 'bg-slate-800' : 'bg-gray-200'} ${iconColor}`}>
      <ContentWrapper >
        <h2 className='text-center pb-5'>Testimo<u>nials</u></h2>

        <Carousel  autoplay autoplaySpeed={5000} dots={true} arrows={true} infinite={true}>
          <div className='text-lg'>
            <h3 style={contentStyle} className='text-black dark:text-white'>"Nikhil's enthusiasm and commitment to learning as an intermediate MERN stack developer have been commendable. Despite his intermediate level, he has shown a great attitude towards collaboration and a willingness to tackle new challenges. He's a valuable asset to any team."</h3>
            <p className='text-black dark:text-white text-center pb-8'> Nisha Singh - Business Development Manager</p>
          </div>
          <div className='text-lg'>
            <h3 style={contentStyle} className='text-black dark:text-white pb-3'>"Working with Nikhil, I found him to be a proactive and eager learner. As an intermediate MERN stack developer, he quickly grasped concepts and contributed effectively to our project. His positive attitude and adaptability make him a promising talent."</h3>
              <p className='text-black dark:text-white text-center pb-8'>  Akash Kumar Singh - Animator Freelancer</p>
          </div>
          <div className='text-lg'>
            <h3 style={contentStyle} className='text-black dark:text-white'>"Nikhil's internship showcased his dedication and proactive approach to learning. As an intermediate developer, he displayed a strong work ethic and a willingness to take on tasks. Nikhil's potential for growth in the field is evident, and I believe he will continue to excel."</h3>
            <p className='text-black dark:text-white text-center pb-8'> Roshan Kumar - Manager, Virtual Origin</p>
          </div>
        </Carousel>
      </ContentWrapper>
    </div>
  )
}

export default Testimonial