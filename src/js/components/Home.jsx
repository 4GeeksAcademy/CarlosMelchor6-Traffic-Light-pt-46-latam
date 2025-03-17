import React from "react";
import { useState } from "react";
//create your first component
const Home = () => {
	const [color, setcolor] = useState("");

	return (
		<React.Fragment>
			<div className="container">
				<div className="semaforo">
					<div
						onClick={() => setcolor( color === "red" ? "" : "red" )}
						className={`red light  ${(color === "red") ? "selected" : ""}`}
					></div>

					<div
						onClick={() => setcolor( color === "yellow" ? "" : "yellow" )}
						className={`yellow light ${(color === "yellow") ? "selected" : ""}`}
					></div>

					<div
						onClick={() => setcolor( color === "green" ? "" : "green" )}
						className={`green light ${(color === "green") ? "selected" : ""}`}
					></div>
				</div>
			</div>
		</React.Fragment >
	);
};
export default Home;