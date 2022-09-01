import React from "react";
import "../styles/sliderA.css";

function SliderA(){
	return(
		<>
			<div className="header__sideText">
				<span className="header__sideText--textTittle">With our advanced financial technologies</span>
				<span className="header__sideText--text">your brokerage business will be up and running within the shortest time the industry have to offer.</span>
				
				<button className="flexCenter">Learn more</button>
			</div>

			<div className="header__sideGraph flexCenter">
				<div className="group--path"></div>
				<div className="groupOne--calendar1 groupSet"></div>
				<div className="groupOne--calendar2 groupSet"></div>

				<div className="groupOne--person1 groupSet"></div>
				<div className="groupOne--person2 groupSet"></div>
				<div className="groupOne--person3 groupSet"></div>

				<div className="groupOne--like groupSet"></div>

				<div className="groupOne--coin1 groupSet"></div>
				<div className="groupOne--coin2 groupSet"></div>
				<div className="groupOne--coin3 groupSet"></div>
				<div className="groupOne--coin4 groupSet"></div>
				<div className="groupOne--coin5 groupSet"></div>
				<div className="groupOne--coin6 groupSet"></div>
			</div>
		</>
	);
}

export default SliderA;