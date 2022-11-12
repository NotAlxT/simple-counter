//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Timer from "./component/timer.jsx";

//import your own components
import Home from "./component/home.jsx";

//render your react application



ReactDOM.render(
    <div>
        <Home />
        <Timer hours={hours} minutes={minutes} seconds={seconds} />
    </div>, 
document.getElementById('app'));

/*let seconds=0
let minutes=0
let hours=0
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
    */