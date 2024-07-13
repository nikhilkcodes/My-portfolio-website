import React from "react";
import './style.css';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import useTheme from "../../Context/Theme";
import GraphemeSplitter from 'grapheme-splitter';
import { TypeAnimation } from "react-type-animation";
import { LuMailPlus } from "react-icons/lu";

const Intro = () => {
  const { themeMode } = useTheme();
  const splitter = new GraphemeSplitter();

  const openGmailMessage = () => {
    const recipientEmail = 'nikhilsingh.cc@gmail.com';  // Replace with the recipient's email address
      const subject = 'Regarding Work';
      const customMessage = 'Hello, I would like to discuss a matter with you.';
  
      const mailtoURL = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(customMessage)}`;
  
      window.location.href = mailtoURL;
    }
  
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
          <button onClick={openGmailMessage} className="flex items-center space-x-2 rounded-md border-2 border-black bg-transparent text-black dark:text-white dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-4 py-2 transition-colors duration-300">
            <span>Connect</span>
            <LuMailPlus />
          </button>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Intro;
