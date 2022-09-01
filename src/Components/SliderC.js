import React from "react";
import "../styles/sliderC.css";

function SliderC(){
	return(
		<>
			<div className="header__sideText">
				<span className="header__sideText--textTittle">Are you established company?</span>
				<span className="header__sideText--text">Time to make changes and get better technological solution and pricing!</span>
				
				<button className="flexCenter">Learn more</button>
			</div>

			<div className="header__sideGraph flexCenter">
				<div className="group--path"></div>
				
				<div className="groupThree--micro1 groupSet"></div>
				<div className="groupThree--micro2 groupSet"></div>
				<div className="groupThree--micro3 groupSet"></div>

				<div className="groupThree--bitcoin groupSet"></div>
				<div className="groupThree--laptop groupSet"></div>
				<div className="groupThree--lock groupSet"></div>
				<div className="groupThree--microPhone groupSet"></div>
				<div className="groupThree--phone groupSet"></div>

				<div className="groupThree--tableBitcoin groupSet"></div>
				<div className="groupThree--tableLaptop groupSet"></div>
				<div className="groupThree--tableLock groupSet"></div>
				<div className="groupThree--tablePhone groupSet"></div>
			</div>
		</>
	);
}

export default SliderC;