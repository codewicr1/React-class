import { useState } from "react";
//const App = ()=>{}
//const App = function (){}
export default function TodoApp() {
    // state are variables that update UI
    // left side name, right side changes; set

    // const text ='';    
    const [text, setText] = useState("");
    //const task = [].const [] = useState();
    const [task, setTask] = useState([]);
    const changeHandler = (event) => {
        const input = event.target.value;
        setText(input);
    }
    const addTaskHandler = () => {
        //"!" means not
        if (text !== "") {
            const newItem = {
                id: Math.random(),// 0 - .999999999999999999999999
                text: text,
                createdAt: Date.now()//April 21, 2025
            };
            const newTask = [newItem, ...task];
            setTask(newTask);
            // reset the text
            setText("");
        }
    }

    const deleteHandler = (id) => {
        // filter out
        // const updatedTasks = task.filter((e) => e.text !== t);
        //loop through array and create a new array []
        const updatedTasks = task.filter((e) => {
            return e.id !== id
        });
        setTask(updatedTasks);
    }
    const handleCheckBox = (id) => {
        // const newState =task.map ()
        //const newState = task.mpa(obj =>)
        const newState = task.map(obj =>
            obj.id === id ? {
                ...obj, complete: !obj.
                    complete
            } : obj
        );

        setTask(newState);
    }

    const numOfItems = task.length;
    // task.filter().length
    const numOfCompleted = task.filter(t => t.complete).length

    return (
        <div>
            {/* add To-Do list on top 
            add Add Task button below */}
            <h3>ToDoApp</h3>
            {numOfItems == 0 ? null : <p>you have {numOfItems} items</p>}
{numOfItems == 0 ? null :<p>{numOfCompleted} task completed</p>}

            <div>
                <input
                    value={text}
                    //onChangeCapture{( => {})}
                    onChange={changeHandler}
                />
                <button onClick={addTaskHandler}>Add Task</button>
            </div>
            <textmap>addTaskHandler</textmap>


            < ul >
                {/* RENDER {display on UI} LIST */}
                {task.map(
                    (object) => <TaskItem
                        key={object.id}
                        object={object}
                        handleCheckBox={handleCheckBox}
                        deleteHandler={deleteHandler}
                        />)          
                    
                }

            </ul >
        </div >)
}

function TaskItem(props) {
    return (
        <div key={props.object.id}>
            <input
                type="checkbox"
                checked={props.object.complete}
                onChange={
                    () => props.handleCheckBox(props.object.id)
                }
            // change this to arrow function and passs id
            />
            <li
                style={{
                    textDecoration: props.object.complete ? "line-through" : null,
                }}
            >{props.object.text}</li>

            <button onClick={

                () => props.deleteHandler(props.object.id)
            }>delete</button>
        </div>   
    )}
