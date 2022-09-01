import React from "react";
import "../styles/sliderB.css";

function SliderB(){
	return(
		<>
			<div className="header__sideText">
				<span className="header__sideText--textTittle">Looking to open a brokerage?</span>
				<span className="header__sideText--text">Get your business plan ready with our experts.</span>
				
				<button className="flexCenter">Learn more</button>
			</div>

			<div className="header__sideGraph flexCenter">
				<div className="group--path"></div>
				<div className="groupTwo--book1 groupSet"></div>
				<div className="groupTwo--book2 groupSet"></div>

				<div className="groupTwo--folder1 groupSet"></div>
				<div className="groupTwo--folder2 groupSet"></div>
				<div className="groupTwo--folder3 groupSet"></div>

				<div className="groupTwo--pen groupSet"></div>
				<div className="groupTwo--person groupSet"></div>
				<div className="groupTwo--rule groupSet"></div>

				<div className="groupTwo--statits1 groupSet"></div>
				<div className="groupTwo--statits2 groupSet"></div>
				<div className="groupTwo--statits3 groupSet"></div>
				<div className="groupTwo--statits4 groupSet"></div>
				<div className="groupTwo--statits5 groupSet"></div>
			</div>
		</>
	);
}

export default SliderB;