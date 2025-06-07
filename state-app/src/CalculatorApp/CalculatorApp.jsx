import React from 'react'
// default export 1 file only, but we can give it a nickname
export default function CalculatorApp() {

    const addNumbers = (numberOne, numberTwo, numberThree) => {
        console.log(numberOne + numberTwo + numberThree);
    }

    // console 2- 2, then call it
    const subtractNumber = (numberOne, numberTwo, numberThree, numberFour) => {
        console.log(numberOne - numberTwo - numberThree - numberFour);

    }

    addNumbers(1, 2, 32, 90);
    subtractNumber(6, 12, 58);

    return (
        <div style={{ color: "red" }}>CalulatorApp</div >
    )
}



const multiplyArray = () => {
    //SCOPE: things can go in, they can't go out]
    const numbersArray = [12, 3, 8, 15, 9, 22, 15, 99
        // console.log(numbersArray[0] + numbersArray [4] * numbers)
    ]

    let addedArrayNumbers = 0;
    for (let index = 0; index < numbersArray.length; index++)
        const item = numbersArray[index]; // numbersArray [0], numbersArray
    //addedArrayNumbers = addedArrayNumbers + item;
    addedArrayNumbers += item;
}
console.log(addedArrayNumbers: numberFourconsole.log(addedArrayNumbers);)
}

const sayHello = (hi => {
    const names = ["Constance", "Martine", "Taylor"];
    // 1. for loop leave inside brackets empty;
    //2. console log the current item
    for (let index = 0; index < names.length; index++) {
        const item = names[index]; //gets current item index
    }
})

// crate a function called displayColors, no parameters
let colors = [;
const displayColors = ( => {
    for (let index = 0; index < index < colors.length; index++) {
        const item = color[index];
        console.log(item);
    }
}
console.log("---------------") // colors = [
colors.push("red"); // colors = ["red"]
colors.push("blue"); //colors = ["red, "blue]
colors.push("yellow"); //colors = ["red", "blue", "yellow"]
colors.pop(); // colors = ["red", "blue"]
console.log(colors);


const students = [{
    name: "Leo",
    grade: 77
}];

const addStudent = (nameVal, gradeVal) => {
    students.push({ name: NameVal, grade: gradeVal });

}
// pass the parameters; add a name and grade, do it twice
addStudent();
console.log(students);
{name: "Constance", grade: 98}
{name: "Martine", grade: 92}
{name: "Taylor", grade: 89}
name


displayColors();
//sayHello ("Hello");
//multiplyArray()
// divideNumbers(3,9); // divide 3)
//divideNumbers(3, 0); // can't use 0])

// addNumbers(12, 3, 8);
// addNumbers(22, 15, 99)
]




let colors = [];
const displayColors = () => {

}