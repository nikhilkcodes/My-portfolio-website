import React from 'react'

const Education = () => {
	return (
		<div className="accordion" id="accordionPanelsStayOpenExample">
		<div className="accordion-item">
		  <h3 className="accordion-header">
			<button
			  className="accordion-button collapsed"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#panelsStayOpen-collapseOne"
			  aria-expanded="false"
			  aria-controls="panelsStayOpen-collapseOne"
			>
			  Bachelor's In Computer Application
			  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span className="badge rounded-pill text-bg-success">Completed</span>
			</button>
		  </h3>
		  <div
			id="panelsStayOpen-collapseOne"
			className="accordion-collapse collapse"
		  >
			<div className="accordion-body">
			  <p>
				I earned my BCA degree from IMS Noida, affiliated with Chaudhary
				Charan Singh University (CCSU), renowned for its technical
				education excellence. Over three years, I acquired diverse
				knowledge and practical skills in programming, software
				development, database management, and information technology. I
				completed my degree in August 2023.
			  </p>
			</div>
		  </div>
		</div>
		<div className="accordion-item">
		  <h5 className="accordion-header">
			<button
			  className="accordion-button collapsed"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#panelsStayOpen-collapseTwo"
			  aria-expanded="false"
			  aria-controls="panelsStayOpen-collapseTwo"
			>
			All India Senior School Certificate Examination
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span className="badge rounded-pill text-bg-success">Completed</span>
			</button>
		  </h5>
		  <div
			id="panelsStayOpen-collapseTwo"
			className="accordion-collapse collapse"
		  >
			<div className="accordion-body">
			  <p>
				I completed my 12th-grade education in Commerce with Mathematics
				at Government Boys Senior Secondary School, New Kondli, under the
				Central Board of Secondary Education (CBSE) in 2019.
			  </p>
			</div>
		  </div>
		</div>
		<div className="accordion-item">
		  <h5 className="accordion-header">
			<button
			  className="accordion-button collapsed"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#panelsStayOpen-collapseThree"
			  aria-expanded="false"
			  aria-controls="panelsStayOpen-collapseThree"
			>
			  All India Secondary School Examination
			  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<span className="badge rounded-pill text-bg-success">Completed</span>
			</button>
		  </h5>
		  <div
			id="panelsStayOpen-collapseThree"
			className="accordion-collapse collapse"
		  >
			<div className="accordion-body">
			  <p>
				I completed my 10th-grade education at Government Boys Secondary
				School, Mayur Vihar Phase 3, affiliated with the Central Board of
				Secondary Education (CBSE), in 2017.
			  </p>
			</div>
		  </div>
		</div>
	  </div>

	)
}

export default Education
