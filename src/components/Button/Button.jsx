import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Button = ({onClick, value}) => {
	const [buttonClass, setButton] = useState('btn btn-outline-dark');
	return (
		<button onClick={onClick} type="button" className={buttonClass} >{value} <MdOutlineArrowOutward /></button>
	)
}

export default Button;
