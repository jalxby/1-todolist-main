import React, {FC} from 'react';
import {TaskType} from "./TodoList";

type TasksListType = {
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
}
const TasksList: FC<TasksListType> = (props) => {
    const taskItems: JSX.Element[] | JSX.Element = props.tasks.length
        ? props.tasks.map((task) => {
            const removeTask = () => props.removeTask(task.id)
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={removeTask}>x</button>
                </li>
            )
        })
        : <span>Your task is empty</span>
    return (
        <ul>
            {taskItems}
        </ul>
    );
};

export default TasksList;