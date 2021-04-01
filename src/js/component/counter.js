import React from "react";
import PropTypes from "prop-types";

// Secounds Counter Component

export const Counter = props => {
	// define couter styles
	const timerBox = {
		background: "#070707"
	};
	const timerElements = {
		background: "#161616",
		fontSize: "50px",
		color: "#FFFFFF"
	};

	// return seconds to counter elements
	return (
		<div className="container mt-2">
			<div className="row h-100" style={timerBox}>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					<i className="text-center far fa-clock"></i>
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxSix}
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxFive}
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxFour}
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxThree}
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxTwo}
				</div>
				<div
					className="col m-2 rounded text-center"
					style={timerElements}>
					{props.boxOne}
				</div>
			</div>
		</div>
	);
};

Counter.propTypes = {
	boxOne: PropTypes.number,
	boxTwo: PropTypes.number,
	boxThree: PropTypes.number,
	boxFour: PropTypes.number,
	boxFive: PropTypes.number,
	boxSix: PropTypes.number
};
