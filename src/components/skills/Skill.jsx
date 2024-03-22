import React from "react";
import './style.css'
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoMongodb,BiLogoPostgresql } from "react-icons/bi";
import { SiRedux,SiPostman } from "react-icons/si";
import { FaHtml5,FaCss3Alt,FaBootstrap,FaReact,FaNode,FaGithub,FaGitAlt, FaLinux  } from "react-icons/fa";
import resume from '../../components/resume/Nikhil-Singh-2001-Resume.pdf'


const Skill = () => {
	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = resume;
		link.download = 'Nikhil-Singh-2001-Resume.pdf';
		link.click();
	};

	return (
		<div className="skill-color">
					<h1 className="heading-above text-black text-center">Skills & Tools</h1>
					<p className="text-black text-center">If you know what you are looking for</p>
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
				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className="justify-content-center btn btn-outline-dark btn-lg"
						onClick={handleDownload}
					>
						{/*default color white not changing in dark*/}
						Download CV <FontAwesomeIcon icon={faDownload} />
					</button>
				</div>
			</ContentWrapper>

		</div>
	);
}

export default Skill;
