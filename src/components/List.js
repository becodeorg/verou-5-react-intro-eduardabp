import React from 'react';

const tasks = ['Groceries', 'Call my dad', 'Bake a cake'];

function ToDoList() {


    return (
        <div className="list">
            <h2>My TODO list:</h2>
            <ul>
                {tasks.map((task) => (
                <li>
                    <input type="checkbox"/> {task}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;