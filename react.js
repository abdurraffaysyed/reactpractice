import React, { useImperativeHandle } from 'react'
import ReactDOM from 'react-dom'
import {useState} from 'react'


// const ele = document.getElementById("root");
// const ht=React.createElement("button",null,React.createElement("button",null,"lol"));
const [counter,setcounter]=useState(0);
function handleclick(){
	setcounter(counter + 1);
}

function App(){
	<div>
<button onClick={handleclick()}>+1</button>
<div>{counter}</div>
	</div>
}

// const but = (
	
// 	<select>
// 		<option>click on the button</option>
// 		<button>hahahaha</button>
	
// 	</select>
	

// 	)

export default App();
// ReactDOM.render(but,ele);
// ReactDOM.render(ht, ele);