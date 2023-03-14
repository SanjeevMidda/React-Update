import React, {useState} from "react";

export default function Input(){

    let numbers = 0;

    function changeText(e){
        numbers = e.target.value;

        console.log(numbers);

        setOriginalNumber(numbers);

    }

    const [originalNumber, setOriginalNumber] = useState(numbers);

    return(
        <div>
            <input type= "text" placeholder="enter text" onChange={changeText}></input>
            <h1>{originalNumber}</h1>
        </div>
        
    )
}