import React from "react";

function Nav(){
	return(<>
		<nav>
			<div className="nav__content flexCenter">
				<div className="logo"></div>
			</div>
			<div className="nav__content--link">
				<div className="nav__nav flexCenter">
					<a href="/" className="nav__link">Contact us</a>
					<a href="/" className="nav__link">About us</a>
					<a href="/" className="nav__link">Packages</a>
					<a href="/" className="nav__link">Products</a>
					<a href="/" className="nav__link">Book a demo</a>
				</div>
			</div>
		</nav>
	</>);
}

export default Nav;