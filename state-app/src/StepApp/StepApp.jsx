import React from 'react'
import CircleComponent from "./CircleComponent"
import {useState} from "react"
//default means its the main/only export
export default function App() {
    //const[] = useState(1); state is a special var that can update
    // let step =1;
    const [step,setStep] = useState(1);

    // this is just javascript
    const prevHandler = () => {
        // setStep 1
        // setStep(1);
        // minus 1
        console.log(step)
        setStep(step - 1);
    }
    //create nextHandler and alert next
    // connect it to Next button
    const nextHandler = () =>{
        //setStep();
        if (step < 3)
        setStep(step + 1);
    }
        alert ("previous");
    
    return (
        <div>
            {/* Close */}
            <p>X</p>


            {/* Circle Component */}
<CircleComponent
step={1}/>
<CircleComponent
step={2}/>
<CircleComponent
step={3}/>

           
        </div>

    )
}