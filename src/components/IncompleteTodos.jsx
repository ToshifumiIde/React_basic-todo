import React from 'react'

export const IncompleteTodos = (props) => {
  const {onClickComplete , onClickDelete ,todos} = props;

  const incompleteArea = {
    backgroundColor: "#11439d",
  width: "400px",
  minHeight: "200px",
  margin: "8px auto",
  padding: "8px",
  borderRadius: "8px",
  color:"white",
  }
  const title = {
  fontSize:" 20px",
  textAlign:" center",
  padding:" 0",
  margin:" 0",
  color:" #ccc",
  }

  return (
    <>
            <div style={incompleteArea}>
        <p style={title}>未完了のTODO</p>
        <ul>
          {todos.map((todo , index) =>{
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

    </>
  )
};