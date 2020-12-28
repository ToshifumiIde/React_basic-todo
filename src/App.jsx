import React , {useState} from 'react'
import style from "./style.css";

export const App = () => {

  const [incompleteTodos, setIncompleteTodos] = useState(["todo1","todo2"]);
  const [completeTodos,setCompleteTodos] = useState(["完了したTODO"]);

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map(todo =>{
            return(
          <div 
            key={todo}
            className="list-row"
          >
            <li>
              {todo}
            </li>
            <button>完了</button>
            <button>削除</button>
          </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo)=>{
            return(
          <div 
            key={todo}
            className="list-row"
          >
            <li>{todo}</li>
            <button>戻す</button>
          </div>

            )
          })}
  
        </ul>
      </div>
    </>
  )
};