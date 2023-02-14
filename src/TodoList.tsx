import React, {ChangeEvent, FC, useState,KeyboardEvent} from "react";
import TasksList from "./TasksList";
import {FilterValueType} from "./App";

//что будем типизировать:
// 1.все переменные которые создаем
// 2.параметры функции
// 3.значение возвращаемое функцией


// CRUD
//R-read, sort, search
//

export type ToDoListPropsType = {
    title: string
    tasks: Array<TaskType> // or TaskType[]

    changeFilterValue: (filter: FilterValueType) => void
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

//function TodoList(props: ToDoListPropsType){
const TodoList: FC<ToDoListPropsType> = (props) => {
//const TodoList = (props: ToDoListPropsType) => {
//     const addTaskInput: RefObject<HTMLInputElement> = useRef(null)
//     const addTaskHandler = () => {
//         if (addTaskInput.current) {
//             addTaskInput.current && props.addTask(addTaskInput.current.value)
//             addTaskInput.current.value = ""
//         }
//     }

    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        }
        setTitle("")
    }

    const [title, setTitle] = useState<string>("")
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDownEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()

    const onClickHandlerFilterAll = () => props.changeFilterValue("all")
    const onClickHandlerFilterActive = () => props.changeFilterValue("active")
    const onClickHandlerFilterCompleted = () => props.changeFilterValue("completed")

    return (
        <div className={"toDoList"}>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownEnterHandler}/>

                <button disabled={title.trim().length === 0} onClick={addTaskHandler}>+</button>
                {title.length > 15 && <div style={{color: "hotpink"}}>Task title is too long</div>}
            </div>
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
            <div>
                <button onClick={onClickHandlerFilterAll}>All</button>
                <button onClick={onClickHandlerFilterActive}>Active</button>
                <button onClick={onClickHandlerFilterCompleted}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList