import React from 'react'

export const IncompleteTodos = (props) => {

  console.log(props);
  const {onClickComplete , onClickDelete ,todos} = props;

  return (
    <>
            <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
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