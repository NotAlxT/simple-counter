import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useEffect, useState } from "react";

//create your first component

const Home = (props) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	console.log("I am in render/ re-render")
	
	useEffect (() =>{
		console.log("I am in use effect when seconds change")
	},[seconds])
	useEffect (() =>{
		console.log("I am in use effect when minutes change")
	},[minutes])
	useEffect (() =>{
		console.log("I am in use effect called only once")
	},[])
	return (
		<div onClick={ () => {
			console.log("I am in on click")
			setSeconds(seconds+1)
			setMinutes(minutes+1)
		} }>
			
			{seconds} sec {minutes} min

		</div>
	)
	
};

export default Home;

