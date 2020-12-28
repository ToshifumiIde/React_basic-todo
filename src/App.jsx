import React from 'react'
import style from "./style.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p class="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>todo1</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>todo1</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p class="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>todo1</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
};