import React, {useState} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#2F80ED] `
}

function App() {

  const [todos, setTodos] = useState(['Learn REact', 'Grind Leetcode'])
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" placeholder="Add Todo" />
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo,index)=> (
            <Todo key={index} todo={todo}/>
          
          ))}
          

        </ul>
      </div>

      
    </div>
  );
}

export default App;
