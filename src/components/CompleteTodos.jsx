import React from 'react'

export const CompleteTodos = ({onClickBack, todos}) => {

  const completeArea = {
  backgroundColor:"#06267c",
  borderRadius:"8px",
  margin:"8px auto",
  width:"400px",
  minHeight:"200px",
  padding:"8px",
  color:"white",
  };
  const title = {
  fontSize:" 20px",
  textAlign:" center",
  padding:" 0",
  margin:" 0",
  color:" #ccc",
  }
  //オブジェクトとしてスタイルを記述

  return (
    <>
      <div 
      style={completeArea}
      >
        <p style={title}>完了したTODO</p>
        <ul>
          {todos.map((todo , index)=> {
            return(
          <div 
            key={todo}
            className="list-row"
          >
            <li>{todo}</li>
            <button onClick={()=>{
              onClickBack(index)
            }}>戻す</button>
          </div>

            )
          })}
  
        </ul>
      </div>
    </>
  )
};