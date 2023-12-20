import React, { useState, useEffect } from "react";
import './style.css';
import ContentWrapper from './../contentWrapper/ContentWrapper';
import { useForm, ValidationError } from '@formspree/react';
import { MdAttachEmail } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
const Contact = () => {
	const [redirect, handleRedirect] = useState({
		succeeded: false,
	});
	const [state, handleSubmit] = useForm("xrgnzlbe");

	useEffect(() => {
		if(state.succeeded) {
			setTimeout(() => {
				window.location.reload();
			}, 5000)
		}
	}, [state.succeeded])

	return (
		<div className="contact-body">
			<ContentWrapper>
				<div className="container text-start">
					<h1 className="text-white text-start pb-3">Any Question? Feel Free to Contact</h1>
					<div className="row align-items-start">
						<div className="col">
							<div className="card bg-black" style={{ width: '18rem' }}>
								<div className="card-body">
									<p className="card-text text-white">
										I would be happy to answer any questions you may have about job, freelancing, or product development
									</p>
									<a href="mailto:nikhilsingh.cc@gmail.com" className="card-link text-white">
										<p><MdAttachEmail /> nikhilsingh.cc@gmail.com</p>
									</a>
								</div>
							</div>
						</div>
						<div className="col">
							<form onSubmit={handleSubmit} className="row g-3">
								<div className="col-md-6">
									<label className="form-label text-white">Name</label>
									<input type="text" name="name" className="form-control bg-transparent text-white" />
								</div>
								<div className="col-md-6">
									<label className="form-label text-white">Email</label>
									<input type="email" name="_replyto" className="form-control bg-transparent text-white" />
									<ValidationError prefix="Email" field="email" errors={state.errors} />
								</div>
								<div className="col-12">
									<label className="form-label text-white">Phone</label>
									<input type="text" name="phone" className="form-control bg-transparent text-white" />
								</div>
								<div className="col-12">
									<label className="form-label text-white">Subject</label>
									<input type="text" name="subject" className="form-control bg-transparent text-white" />
								</div>
								<div className="mb-3">
									<label className="form-label text-white">Your Message</label>
									<textarea name="message" className="form-control bg-transparent text-white" rows="3"></textarea>
								</div>
								<div className="col-12">
									<button type="submit" className="btn btn-outline-light">
										Submit <CiLocationArrow1 />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
};

export default Contact;
