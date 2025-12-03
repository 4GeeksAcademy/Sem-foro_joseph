import React from "react";
import { use } from "react";
import { useState } from "react"; 

const TrafficLight = () => {
		const [color, setColor] = useState("red");
		const changeColor = () =>{
			if (color ==="red"){
				setColor("green");
			} else if (color ==="green") {
				setColor("yellow");
			} else{
				setColor("red")
			}
		};

	return( 
	    <div className="d-flex flex-column align-items-center mt-4">
			<div  style=
			    {{ 
				  width: "12px", 
				  height: "70px", 
				  background:"black" 						
				}}> 
			</div>
			<div style=
				{{ 
					width: "90px", 
					height: "250px", 
					background:"black", 
					borderRadius:"20px", 
					padding:"15px", 
					display:"flex", 
					flexDirection: "column", 
					justifyContent:"space-between", 
					alignItems:"center"
				}}>
				<div onClick={ () => setColor("red") }  style=
				{{ 
					width: "60px",   
					height: "60px", 
					borderRadius:"50%", 
					background: color === "red" ? "red" : "#4a0000", cursor:"pointer", boxShadow: color === "red" ? "0 0 25px 10px red" : "none"  
				}}>
                </div>
				<div onClick={ () => setColor("yellow") }  style=
				{{ 
					width: "60px", 
					height: "60px", 
					borderRadius:"50%", 
					background: color === "yellow" ? "yellow" : "#7a4a00", cursor:"pointer", boxShadow: color === "yellow" ? "0 0 25px 10px yellow" : "none"  
				}}>
                </div>
				<div onClick={ () => setColor("green") }  style=
				{{ 
					width: "60px", 
					height: "60px", 
					borderRadius:"50%", 
					background: color === "green" ? "green" : "#1f5d1f", cursor:"pointer", 
					boxShadow: color === "green" ? "0 0 25px 10px green" : "none"  
				}} 
				></div>
			</div>
			<button 
				onClick={changeColor}
				className="btn btn-dark mt-3">Cambia el Color
			</button>
		</div>
    );
};

export default TrafficLight;