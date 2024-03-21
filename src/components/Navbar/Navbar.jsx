import React from "react";
import './style.css'
import ContentWrapper from "../contentWrapper/ContentWrapper";
import {Link} from 'react-router-dom';
function Navbar() {
	return (
		<div className="Nav-color">
		<ContentWrapper>
			<nav className="navbar navbar-expand-lg bg-transparent">
				<div className="container-fluid">
					<div className="d-flex justify-content-start">
						<a className="navbar-brand text-black" href="#">

						</a>
					</div>
					<button
						className="navbar-toggler bg-black"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item mx-2">
							<Link to="/" className="custom-link">
								<div className="nav-link active text-black" aria-current="page">
									<p className="routes">
									   Home
									</p>
								</div>
							</Link>
							</li>
							<li className="nav-item mx-2">
							<Link to="/about" className="custom-link">
								<a className="nav-link text-black">
									<p className="routes">
								About
									</p>
								</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
							<Link to="/projects" className="custom-link">
								<a className="nav-link text-black">
									<p className="routes">
								Projects
									</p>
								</a>
								</Link>
							</li>
							<li className="nav-item mx-2">
							<Link to="/contact" className="custom-link" >
								<a className="nav-link text-black">
									<p className="routes">
									Contact
									</p>
								</a>
								</Link>
							</li>
						</ul>

					</div>
				</div>
			</nav>
		</ContentWrapper>
		</div>

	)
}

export default Navbar;
