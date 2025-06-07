import React from 'react';
import Box from './Box'
export default function App() {
    const name = "Constance";
    const favFood = "Cheesecake";
    const x = 1;
    const y = 2;
    const colors = ["red", "yellow", "blue"]


    return (
        <div>
            {/* {} is JS mode */}
            <p>{x * y + 10 / 3}</p>
            <p>x +y+10</p>
            <h4>name favorite food is favFood</h4>
            <Box
                color="blue"
            />
            <Box
                color="green"
            />
            <Box
                color="red"
            />
        </div>


    )
}


