import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="入力エリア" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="tytle">未完了のタスク</p>
        <ul>
          <div className="list-row">
            <li>タスク１</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>タスク２</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="tytle">完了済タスク</p>
        <ul>
          <div className="list-row">
            <li>タスク２</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
