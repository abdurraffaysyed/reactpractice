import React from "react"
import ReactDOM from "react-dom"

import Quest from "./reactquestion"



const ele = document.getElementById("root");

function func(){
    return (
    <div>
        <Quest questnum={1}/>
               

    </div>
    )
}
ReactDOM.render(func(),ele);
