import React from "react";
import './style.css';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import useTheme from "../../Context/Theme";
import GraphemeSplitter from 'grapheme-splitter';
import { TypeAnimation } from "react-type-animation";
import { LuMailPlus } from "react-icons/lu";
import emailjs from 'emailjs-com';

const Intro = () => {
  const { themeMode } = useTheme();
  const splitter = new GraphemeSplitter();

  const sendEmail = () => {
    emailjs.send( import.meta.env.VITE_EMAIL_SERVICE_ID , import.meta.env.VITE_EMAIL_TEMP_ID, {
      to_name: 'Nikhil Singh',
      from_name: 'Your Name',
      message: 'I hope this message finds you well. I am reaching out to connect regarding potential job or freelance opportunities.',
      reply_to: 'nikhilsingh.cc@gmail.com'
    }, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    .then((result) => {
      alert('Email sent successfully');
    }, (error) => {
      alert('Error sending email: ' + error.text);
    });
  };

  return (
    <div className={`pt-3 pb-4 ${themeMode === 'dark' ? 'bg-slate-700 text-white' : 'bg-white text-black'}`}>
      <ContentWrapper>
        <div className="text-3xl pt-4">
          <h1 className="text-center">
            <TypeAnimation
              splitter={(str) => splitter.splitGraphemes(str)}
              sequence={[
                'Hello World!',
                2000,
                'नमस्ते दुनिया',
                2000,
                '你好，世界',
                2000,
                'Привет, мир',
                2000,
                'こんにちは、世界',
                2000,
                'שלום עולם',
                2000,
                'مرحبا بالعالم',
                2000
              ]}
              repeat={Infinity}
            />
          </h1>
          <p className="font-medium text-xl text-center pt-3 text-black dark:text-white">I'm Nikhil Singh, a Developer from Noida, India</p>
          <p className="font-medium text-base text-center pt-4 text-black dark:text-white">Experienced MERN stack developer passionate about crafting dynamic web solutions.
          Open to job and freelance opportunities to collaborate and innovate.</p>
        </div>
        <div className="flex justify-center pt-4">
          <button onClick={sendEmail} className="flex items-center space-x-2 rounded-md border-2 border-black bg-transparent text-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 transition-colors duration-300">
            <span>Connect</span>
            <LuMailPlus />
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Intro;
