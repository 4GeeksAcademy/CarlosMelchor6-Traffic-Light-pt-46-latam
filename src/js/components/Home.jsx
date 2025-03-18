import React from "react";
import { useState } from "react";
//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<React.Fragment>
			<div className="container">
				<div className="trafficLight">
					<div
						onClick={() => setColor( color === "red" ? "" : "red" )}
						className={`red light  ${(color === "red") ? "selected" : ""}`}
					></div>

					<div
						onClick={() => setColor( color === "yellow" ? "" : "yellow" )}
						className={`yellow light ${(color === "yellow") ? "selected" : ""}`}
					></div>

					<div
						onClick={() => setColor( color === "green" ? "" : "green" )}
						className={`green light ${(color === "green") ? "selected" : ""}`}
					></div>
				</div>
			</div>
		</React.Fragment >
	);
};
export default Home;