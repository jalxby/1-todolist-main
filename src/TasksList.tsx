import React, {FC} from 'react';
import {TaskType} from "./TodoList";

type TasksListType = {
    tasks: Array<TaskType>
}
const TasksList: FC<TasksListType> = (props) => {
    const taskItems: JSX.Element[] | JSX.Element = props.tasks.length
        ? props.tasks.map((task) => {
            return (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
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