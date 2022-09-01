import React, { useState } from "react";
import SliderA from "./SliderA";
import SliderB from "./SliderB";
import SliderC from "./SliderC";

function Header(){
	const [numer, setNumer] = useState(0);

	return<>
		<header>
			<div className="header__slider">
				{ numer === 0 && <SliderA />}
				{ numer === 1 && <SliderB />}
				{ numer === 2 && <SliderC />}
			</div>

			<div className="header__buttons">
				<button
					className={ numer === 0 ?
						"header__buttons--active" :
						"header__buttons--inactive"
					}
					onClick={() => setNumer(0)}
					>
				</button>
				<button
					className={ numer === 1 ?
						"header__buttons--active" :
						"header__buttons--inactive"
					}
					onClick={() => setNumer(1)}
					>
				</button>
				<button
					className={ numer === 2 ?
						"header__buttons--active" :
						"header__buttons--inactive"
					}
					onClick={() => setNumer(2)}
					>
				</button>
			</div>
		</header>
	</>;
}

export default Header;