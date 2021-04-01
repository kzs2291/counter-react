//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";

// set interval to update counter
let counter = 0;

setInterval(() => {
	const numSix = Math.floor(counter / 100000) % 10;
	const numFive = Math.floor(counter / 10000) % 10;
	const numFour = Math.floor(counter / 1000) % 10;
	const numThree = Math.floor(counter / 100) % 10;
	const numTwo = Math.floor(counter / 10) % 10;
	const numOne = Math.floor(counter / 1) % 10;

	// increase counter
	counter++;

	//render your react application
	ReactDOM.render(
		<Counter
			boxOne={numOne}
			boxTwo={numTwo}
			boxThree={numThree}
			boxFour={numFour}
			boxFive={numFive}
			boxSix={numSix}
		/>,
		document.querySelector("#app")
	);
}, 1000);
