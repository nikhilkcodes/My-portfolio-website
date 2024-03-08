import React from "react";
import './style.css'
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { IoLogoJavascript } from "react-icons/io5";
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
							<h1 className="heading-above text-white text-center">Skills & Tools</h1>
					<p className="text-white text-center">If you know what you are looking for</p>
			<ContentWrapper>
				<div className="skill-body d-flex justify-content-center">
					<div className="logos">
								<div className="logos-slide">
								<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
										<IoLogoJavascript />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
										<FaHtml5 />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
										<FaCss3Alt />
									</a>
									<a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
										<FaBootstrap />
									</a>
									<a className="icon-body p-3" href="https://react.dev/">
										<FaReact />
									</a>
									<a className="icon-body p-3" href="https://redux.js.org/">
										<SiRedux />
									</a>
									<a className="icon-body p-3" href="https://expressjs.com/">
										<FaNode />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<SiPostman />
									</a>
									<a className="icon-body p-3" href="https://www.postgresql.org/docs/">
										<BiLogoPostgresql />
									</a>
									<a className="icon-body p-3" href="https://www.mongodb.com/">
										<BiLogoMongodb />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaGitAlt />
									</a>
									<a className="icon-body p-3" href="https://docs.github.com/en">
										<FaGithub />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaLinux />
									</a>
								</div>

								<div className="logos-slide">
								<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
										<IoLogoJavascript />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
										<FaHtml5 />
									</a>
									<a className="icon-body p-3" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
										<FaCss3Alt />
									</a>
									<a className="icon-body p-3" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
										<FaBootstrap />
									</a>
									<a className="icon-body p-3" href="https://react.dev/">
										<FaReact />
									</a>
									<a className="icon-body p-3" href="https://redux.js.org/">
										<SiRedux />
									</a>
									<a className="icon-body p-3" href="https://expressjs.com/">
										<FaNode />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<SiPostman />
									</a>
									<a className="icon-body p-3" href="https://www.postgresql.org/docs/">
										<BiLogoPostgresql />
									</a>
									<a className="icon-body p-3" href="https://www.mongodb.com/">
										<BiLogoMongodb />

									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaGitAlt />
									</a>
									<a className="icon-body p-3" href="https://docs.github.com/en">
										<FaGithub />
									</a>
									<a className="icon-body p-3" href="https://git-scm.com/">
										<FaLinux />
									</a>
								</div>
							</div>
				</div>
				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className="justify-content-center btn btn-outline-light btn-lg"
						onClick={handleDownload}
					>
						Download Resume <FontAwesomeIcon icon={faDownload} />
					</button>
				</div>
			</ContentWrapper>

		</div>
	);
}

export default Skill;
