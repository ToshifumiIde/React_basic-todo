import React , {useState} from 'react'
import style from "./style.css";
import {InputTodo} from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

export const App = () => {
  const [ todoText , setTodoText ] = useState("");
  const [ incompleteTodos, setIncompleteTodos ] = useState([]);
  const [ completeTodos,setCompleteTodos ] = useState([]);

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

  const onClickBack = (index) =>{
    const newCompleteTodos = [...completeTodos];
    //現在の完了todosを新しい配列として用意する
    newCompleteTodos.splice(index , 1);
    //完了todosからindex番目の配列を第二引数分だけ削除する
    const newIncompleteTodos = [...incompleteTodos , completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onChangeTodoText = (event)=> {
    setTodoText(event.target.value)
  };

  return (
    <>
      <InputTodo 
        onClick={onClickAdd}
        onChange={onChangeTodoText}
        todoText={todoText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{color:"red",textAlign:"center",}}>登録できるTODOは5個までです。消化してください</p>
      )}
      <IncompleteTodos 
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        onClickBack={onClickBack}
        todos={completeTodos}
      />
    </>
  )
};