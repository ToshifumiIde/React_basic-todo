import React , {useState} from 'react'
import style from "./style.css";

export const App = () => {
  const [ todoText , setTodoText ] = useState("");
  const [ incompleteTodos, setIncompleteTodos ] = useState(["todo1","todo2"]);
  const [ completeTodos,setCompleteTodos ] = useState(["完了したTODO"]);

  const onClickAdd = (event)=> {
    event.preventDefault();
    if(todoText === "") return;
    const newTodos = [...incompleteTodos,todoText];
    //incompleteTodosに入力されている内容を分割代入で展開し、最後尾に新たに入力したtodoTextを追加し、新しい配列を作成する
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete =(index)=>{
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);//配列のindex番目から、1つ値を削除する
    setIncompleteTodos(newTodos);//useStateの更新で新しい配列を格納する
  };
  const onClickComplete = (index)=> {
    const newIncompleteTodos = [...incompleteTodos];
    //現在の未完了todoの配列を展開して格納
    newIncompleteTodos.splice(index, 1);
    //未完了のtodoのうち、index番目から1つspliceする
    setIncompleteTodos(newIncompleteTodos);
    //未完了todosにはsplice後のtodosを再配列
    const newCompleteTodos = [...completeTodos , incompleteTodos[index]];
    //完了todosには、既存の完了todosを展開して格納し、最後尾にindex番目の未完了todoを追加する
    setCompleteTodos(newCompleteTodos);
    //set関数にnewCompleteTodosの配列を格納する
  }

  const onChangeTodoText = (event)=> {
    setTodoText(event.target.value)
  };

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
          {incompleteTodos.map((todo , index) =>{
            //map関数の第一引数に値、第二引数にindexが格納される
            return(
          <div 
            key={todo}
            className="list-row"
          >
            <li>
              {todo}
            </li>
            <button onClick={()=> {
              onClickComplete(index)
            }}>完了</button>
            <button onClick={()=> {
              onClickDelete(index)
              }}>削除</button>
          </div>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo , index)=>{
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