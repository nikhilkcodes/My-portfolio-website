import React from "react";
import './style.css';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiRedux, SiPostman } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode, FaGithub, FaGitAlt, FaLinux } from "react-icons/fa";
import useTheme from "../../Context/Theme";

const Skill = () => {
    const { themeMode } = useTheme();

    const iconColor = themeMode === 'dark' ? 'text-white' : 'text-black';

    return (
        <div className={`skill-container ${themeMode === 'dark' ? 'bg-slate-800' : 'bg-gray-200'} ${iconColor}`}>
            <h1 className="heading-above text-center" data-aos="fade-left">Skills & <u>Tools</u></h1>
            <p className="text-center" data-aos="fade-left">If you know what you are looking for</p>
            <ContentWrapper>
                <div className="skill-body flex justify-center">
                    <div className="logos">
                        <div className="logos-slide">
                            {/* Repeat icons for infinite scrolling */}
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                                <RiJavascriptFill className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                                <FaHtml5 className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                <FaCss3Alt className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
                                <FaBootstrap className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://react.dev/">
                                <FaReact className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://redux.js.org/">
                                <SiRedux className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://expressjs.com/">
                                <FaNode className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://git-scm.com/">
                                <SiPostman className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.postgresql.org/docs/">
                                <BiLogoPostgresql className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.mongodb.com/">
                                <BiLogoMongodb className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://git-scm.com/">
                                <FaGitAlt className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://docs.github.com/en">
                                <FaGithub className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.kernel.org/doc/html/latest/">
                                <FaLinux className={iconColor} />
                            </a>
                            <div className="icon-body">
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
                                <RiJavascriptFill className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                                <FaHtml5 className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                                <FaCss3Alt className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
                                <FaBootstrap className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://react.dev/">
                                <FaReact className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://redux.js.org/">
                                <SiRedux className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://expressjs.com/">
                                <FaNode className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://git-scm.com/">
                                <SiPostman className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.postgresql.org/docs/">
                                <BiLogoPostgresql className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.mongodb.com/">
                                <BiLogoMongodb className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://git-scm.com/">
                                <FaGitAlt className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://docs.github.com/en">
                                <FaGithub className={iconColor} />
                            </a>
                            <a className="icon-body p-3" href="https://www.kernel.org/doc/html/latest/">
                                <FaLinux className={iconColor} />
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
}

export default Skill;
