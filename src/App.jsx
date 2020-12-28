import React , {useState} from 'react'
import style from "./style.css";

export const App = () => {
  const [ todoText , setTodoText ] = useState("");
  console.log(todoText);
  const [ incompleteTodos, setIncompleteTodos ] = useState(["todo1","todo2"]);
  const [ completeTodos,setCompleteTodos ] = useState(["完了したTODO"]);

  const onClickAdd = (event)=> {
    event.preventDefault();
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    //incompleteTodosに入力されている内容を分割代入で展開し、最後尾に新たに入力したtodoTextを追加し、新しい配列を作成する
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onChangeTodoText = (event)=> {
    setTodoText(event.target.value)
  }
  

  return (
    <>
      <div className="input-area">
        <input 
          type="text" 
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
          />
        <button 
          onClick={onClickAdd}
        >
          追加
        </button>
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