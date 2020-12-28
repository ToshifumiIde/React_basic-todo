import React from 'react'

export const InputTodo = ({onClick,onChange,todoText ,disabled}) => {

  const inputArea ={
    backgroundColor:"#059bcc",
  width:" 400px",
  margin:" 8px auto",
  padding:" 8px",
  borderRadius:" 8px",
  };

  return (
    <>
      <div style={inputArea}>
        <input 
          disabled={disabled}
          type="text" 
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
          />
        <button 
          disabled={disabled}
          onClick={onClick}
        >
          追加
        </button>
      </div>
    </>
  )
};