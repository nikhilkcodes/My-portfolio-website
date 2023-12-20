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
			<ContentWrapper>
				<div className="skill-body">

					<div className="container">
					<h1 className="heading-above text-white text-start">Skills & Tools</h1>
					<p className="text-white text-start">If you know what you are looking for</p>
						<div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 portfolio-images">
							{/* Icons */}
							<div className="col">
								<div>
									<a className="icon-body" href="https://developer.mozilla.org/en-US/docs/Web/javascript">
										<IoLogoJavascript />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
										<FaHtml5 />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://developer.mozilla.org/en-US/docs/Web/CSS">
										<FaCss3Alt />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://getbootstrap.com/docs/4.1/getting-started/introduction/">
										<FaBootstrap />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://react.dev/">
										<FaReact />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://redux.js.org/">
										<SiRedux />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://expressjs.com/">
										<FaNode />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://git-scm.com/">
										<SiPostman />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://www.postgresql.org/docs/">
										<BiLogoPostgresql />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://www.mongodb.com/">
										<BiLogoMongodb />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://git-scm.com/">
										<FaGitAlt />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://docs.github.com/en">
										<FaGithub />
									</a>
								</div>
							</div>
							<div className="col">
								<div>
									<a className="icon-body" href="https://git-scm.com/">
										<FaLinux />
									</a>
								</div>
							</div>
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
