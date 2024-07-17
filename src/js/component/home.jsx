import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {
	return (
		<div className="text-center row bg-dark text-white py-5 fw-bold fs-1 gap-5 px-5">
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary"><i class="fa-regular fa-clock"></i></div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary">{Math.floor(counter/100000)%10}</div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary">{Math.floor(counter/10000)%10}</div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary">{Math.floor(counter/1000)%10}</div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary">{Math.floor(counter/100)%10}</div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary">{Math.floor(counter/10)%10}</div>
			<div className = "col bg-lighter py-5 px-0 rounded border border-secondary ">{Math.floor(counter/1)%10}</div>
		</div>
	);
};

export default Home;
