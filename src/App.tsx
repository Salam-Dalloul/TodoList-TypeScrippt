import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import { TaskInterfaces } from './Interfaces'
import TodoTask from "./Components/TodoTask";
const App: FC = () => {
    const [task, setTask] = useState<string>('')
    const [deadLine, setDeadLine] = useState<number>(0)
    const [toDos, setToDos] = useState<TaskInterfaces[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'task') {
            setTask(event.target.value)
        } else {
            setDeadLine(Number(event.target.value))
        }
    }

    const addTask = (): void => {
        const newTask: TaskInterfaces = {
            name: task,
            deadline: deadLine
        }
        setToDos([...toDos, newTask])
        setTask('')
        setDeadLine(0)
    }

    const completeTask = (taskName: string): void => {
        setToDos(toDos.filter(task => task.name !== taskName))
    }
    return (
      <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input
                type="text"
                placeholder="Task..."
                name="task"
                value={task}
                onChange={handleChange}
            />
            <input
                type="number"
                placeholder="Deadline (in Days)..."
                name="deadline"
                value={deadLine}
                onChange={handleChange}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todoList">
            {
                toDos.map((todo: TaskInterfaces, key: number) => <TodoTask completeTask={completeTask} todo={todo} key={key} />)
            }
        </div>
      </div>
  );
}

export default App;
