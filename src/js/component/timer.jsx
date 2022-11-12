import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { useEffect, useState } from "react";

let seconds=0
let minutes=0
let hours=0
const Timer = () =>{
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);
setInterval(() =>{
    console.log(seconds);
    seconds = seconds+1;
    if (seconds==60){
        minutes+=1
        seconds=0
    }
    if(minutes==60){
        hours+=1
        minutes=0
    }
	return(
		<div className="Timer">
			{props.hours} {props.minutes} {props.seconds}
		</div>
	)
})
}

export default Timer