// @ts-ignore
import React, {FC} from 'react';
import {TaskInterfaces} from "../Interfaces";

interface Props {
    todo: TaskInterfaces;
    completeTask(taskName: string): void;
}
const TodoTask = ({todo, completeTask}: Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{todo.name}</span>
                <span>{todo.deadline}</span>
            </div>
            <button onClick={() => completeTask(todo.name)}>
                X
            </button>
        </div>
    );
}

export default TodoTask;
