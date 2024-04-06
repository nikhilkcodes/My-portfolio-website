import React, {useState} from "react";
import './style.css'
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoMongodb,BiLogoPostgresql } from "react-icons/bi";
import { SiRedux,SiPostman } from "react-icons/si";
import { FaHtml5,FaCss3Alt,FaBootstrap,FaReact,FaNode,FaGithub,FaGitAlt, FaLinux  } from "react-icons/fa";



const Skill = () => {


	return (
		<div className="skill-color">
					<h1 className="heading-above text-black text-center" data-aos="fade-left">Skills & <u>Tools</u></h1>
					<p className="text-black text-center" data-aos="fade-left">If you know what you are looking for</p>
			<ContentWrapper>
				<div className="skill-body d-flex justify-content-center">
					<div className="logos">
								<div className="logos-slide">
								<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
										<RiJavascriptFill className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
										<FaHtml5  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
										<FaCss3Alt  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
										<FaBootstrap  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://react.dev/">
										<FaReact  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://redux.js.org/">
										<SiRedux  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://expressjs.com/">
										<FaNode  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<SiPostman  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://www.postgresql.org/docs/">
										<BiLogoPostgresql  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://www.mongodb.com/">
										<BiLogoMongodb  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaGitAlt  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://docs.github.com/en">
										<FaGithub  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaLinux  className="dark-icon" />
									</a>
								</div>

								<div className="logos-slide">
								<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
										<RiJavascriptFill  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
										<FaHtml5  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
										<FaCss3Alt  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
										<FaBootstrap  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://react.dev/">
										<FaReact  className="dark-icon"/>
									</a>
									<a className="icon-body p-3" href="https://redux.js.org/">
										<SiRedux  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://expressjs.com/">
										<FaNode  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<SiPostman  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://www.postgresql.org/docs/">
										<BiLogoPostgresql  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://www.mongodb.com/">
										<BiLogoMongodb  className="dark-icon" />

									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaGitAlt  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://docs.github.com/en">
										<FaGithub  className="dark-icon" />
									</a>
									<a className="icon-body p-3" href="https://www.kernel.org/doc/html/latest/">
										<FaLinux  className="dark-icon" />
									</a>
								</div>
							</div>
				</div>


			</ContentWrapper>

		</div>
	);
}

export default Skill;
