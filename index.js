import React from 'react'
import ReactDOM from 'react-dom'
// import { useState } from 'react';
// import App from "./react"
import Quest from "./reactquizapp/reactquestion"
const ele = document.getElementById("root");

// function f(){
//   return(
//   <div>
//   <App incrementby={[1,5]}/>
//   <App incrementby={[10,17]}/>
//   <App incrementby={[7,11]} />
//   {/* <App/> */}
  
//   </div>
//   )
// }
// ReactDOM.render(f(),ele);
function func() {
  return (
    <div>
      <Quest questnum={1} />
      {/* <div>ha</div> */}
      {/* <Quest questnum={2}/>
      <Quest questnum={3} />
      <Quest questnum={4} /> */}
      

    </div>
  )
}
ReactDOM.render(func(), ele);

 