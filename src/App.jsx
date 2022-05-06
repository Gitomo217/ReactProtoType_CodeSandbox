import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inputText, setInputText] = useState("");

  const [incompleteTodo, setIncompleteTodo] = useState(["あああ", "いいい"]);

  const [completeTodo, setcompleteTodo] = useState(["ううう"]);

  const onChangeTodoText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodo = [...incompleteTodo, inputText];
    setIncompleteTodo(newTodo);
    setInputText("");
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="入力エリア"
          value={inputText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="tytle">未完了のタスク</p>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="tytle">完了済タスク</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
