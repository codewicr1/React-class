import React from 'react'

export default function InfoComponent(props) {
    return (
        <div>
            {/* import and use; InfoComponent*/}
            <h4>{props.name} favorite food is {props.favFood}</h4>
            <p>I am a minister and I like to play MonopolyGo</p>
        </div>
    )
}
