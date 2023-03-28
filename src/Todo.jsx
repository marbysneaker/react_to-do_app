import React  from "react";
import {FaRegTrashAlt, FaUserEdit} from 'react-icons/fa'

const style = {
    li:`flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete:`flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex items-stretch w-2/3`,
    text:`ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center text-red-700`,
    button1: `cursor-pointer flex items-stretch text-sky-400`

}

const Todo = ({todo, toggleComplete, deleteTodo}) => {
    return (
       <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input onChange= {() => toggleComplete(todo)}type="checkbox" checked={todo.completed ? 'checked': ''} />
            <p onClick={()=> toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>

        </div>
       <button className={style.button1}>{<FaUserEdit/>}</button>
       <button className={style.button} onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>

       </li>
    )
}

export default Todo