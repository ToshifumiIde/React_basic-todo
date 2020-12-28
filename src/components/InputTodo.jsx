import React from 'react'

export const InputTodo = ({onClick,onChange,todoText}) => {
  // const { onClick , onChange , todoText } = props;
  return (
    <>
      <div className="input-area">
        <input 
          type="text" 
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChange}
          />
        <button 
          onClick={onClick}
        >
          追加
        </button>
      </div>
    </>
  )
};