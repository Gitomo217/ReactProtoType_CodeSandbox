import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inputText, setInputText] = useState("");

  const [incompleteTodo, setIncompleteTodo] = useState([]);

  const [completeTodo, setcompleteTodo] = useState([]);

  const onChangeTodoText = (event) => setInputText(event.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodo = [...incompleteTodo, inputText];
    setIncompleteTodo(newTodo);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const targetTodo = [...incompleteTodo];
    targetTodo.splice(index, 1);
    setIncompleteTodo(targetTodo);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodo = [...incompleteTodo];
    newIncompleteTodo.splice(index, 1);
    const newCompleteTodo = [...completeTodo, incompleteTodo[index]];
    setcompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  };

  const onClickBack = (index) => {
    const newCompleteTodo = [...completeTodo];
    newCompleteTodo.splice(index, 1);
    const newIncompleteTodo = [...incompleteTodo, completeTodo[index]];
    setcompleteTodo(newCompleteTodo);
    setIncompleteTodo(newIncompleteTodo);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="入力エリア"
          value={inputText}
          onChange={onChangeTodoText}
          disabled={incompleteTodo.length >= 5}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {incompleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>
          タスクを５つ以上追加することはできません。
        </p>
      )}
      <div className="incomplete-area">
        <p className="tytle">未完了のタスク</p>
        <ul>
          {incompleteTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="tytle">完了済タスク</p>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
