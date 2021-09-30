import React,{useState} from "react"
import './styling.css'
// import {useState} from "react"
var answer={
1:'Javascript',
2:'Cascading Style Sheet',
3:'1994',
4:'Hyper Text Markup Language'
}


function Quest(props){
const [number,setnumber]=useState(props.questnum);
// document.write(number);
// const [radiovalue,setradiovalue]=useState(0);
// const [sco,setsco]=useState(0)
    return (
        <div id={'d1'}>
            <div id={'d2'}>{Q(number)}</div>
            {/* {number==2 && handleclick} */}
            {/* <button onClick={handleclick}>Reset</button> */}
            {/* <div>{handleclick(number)}</div> */}
            {number==5 && <button id={'b1'}>Reload</button>}
            {number<5 && <button onClick={hc}> Submit</button>}
            
            {/* <div style={{color:'blue'}}>{number}</div> */}

        </div>
    )
    function handleclick(n) {
        // check(number);
        //  document.write(n);
        if (n == 2) {
            var a = document.getElementsByName('q2');
            // var a5 = document.getElementById('q2ii');
            // var a6 = document.getElementById('q2iii');
            // var a7 = document.getElementById('q2iiii');

            //   document.write(a.length);
            // console.log(a);
            // for (var i = 0; i < a.length; i++) {
                // document.getElementById("radioButtonID").checked = false;
        //    document.write(a.checked);
            // document.write(a5);
            // document.write(a6);
            // document.write(a7);
            
            // document.write(a.checked);
            // console.log(a.values);
            // // document.write(a.checked)    
            a.forEach(a => a.checked = false);
            // a5.checked = false;
            // a6.checked = false;
            // a7.checked = false;
                // a[i].checked = false;
                
            // }
            return;
        }
        else if (n == 1) {
            var b = document.getElementsByName('q1');
            // document.write(b.length);
            return;
        }
        else if (n == 3) {
            var a1 = document.getElementsByName('q3');
            //    document.write(a1.length);
            for (var i1 = 0; i1 < a1.length; i1++) {
                a1[i1].checked = false;
            }
            return;
        }
        else if (n == 4) {
            var a2 = document.getElementsByName('q4');
            //  document.write(a.length);
            for (var i2 = 0; i2 < a2.length; i2++) {
                a2[i2].checked = false;
            }
            return;
        }



    }


    function hc(){
    // document.write(number);
     setnumber(number+1 );
    // document.write('hahaha');
}
function check(num){
    if(num==1){
        

    }

}
function Q(num){
    if(num == 1){
        return(
            <div>
                <p>
                    Which language runs in web browser?
                </p>
                <input type="radio" name="q1"  /> 
                Java
                <br/>
                <input type="radio" name="q1" /> C
                <br />
                <input type="radio" name="q1" /> Python
                <br />
                <input type="radio" name="q1" /> Javascript
                

            </div>
        )
    }
    else if (num == 2) {
        return (
            <div >
                {/* <div>hhhaha</div> */}
                <p>
                    What does CSS stands for?
                </p>
                <input type="radio" name="q2"  />
                Cascading Style Sheet
                <br />
                <input type="radio" name="q2" /> Central Style Sheet
                <br />
                <input type="radio" name="q2" /> Cascading Simple Sheet
                <br />
                <input type="radio" name="q2" /> Cars SUVs Sailboats
                {/* <button onClick={handleclick}>Reset</button> */}
                <div>{handleclick(2)}</div>

            </div>
        )
    }
    else if (num == 3) {
        return (
            <div>
                <p>
                    In which year was <b>Javascript</b> Launched
                </p>
                <input type="radio" name="q3" />
                1996
                <br />
                <input type="radio" name="q3" /> 1995
                <br />
                <input type="radio" name="q3" /> 1994
                <br />
                <input type="radio" name="q3" /> None of the above
                {/* <div>{handleclick(3)}</div> */}

            </div>
        )
    }
    else if (num == 4) {
        return (
            <div>
                <p>
                    What does <b>HTML</b> stands for?
                </p>
                <input type="radio" name="q4" />
                Hyper Text Markup Language
                <br />
                <input type="radio" name="q4" /> Hyper Text Markdown Language
                <br />
                <input type="radio" name="q4" /> Hyperloop Machine Language
                <br />
                <input type="radio" name="q4" /> Hellicopter Terminals Motorboats Lamborginis
                {/* <div>{handleclick(4)}</div> */}

            </div>
        )
    }
   
}
    

}
export default Quest;