import React, {FC} from "react";
import TasksList from "./TasksList";

//что будем типизировать:
// 1.все переменные которые создаем
// 2.параметры функции
// 3.значение возвращаемое функцией

export type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType> // or TaskType[]
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

//function TodoList(props: ToDoListPropsType){
const TodoList: FC<ToDoListPropsType> = (props): JSX.Element => {
//const TodoList = (props: ToDoListPropsType) => {


    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList tasks={props.tasks}/>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList