import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListTask from "./components/ListTask/ListTask";
import { addTodo } from "./redux/TodoSlice";

import styles from "./todo-list.module.css";

function App() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.arr);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(addTodo(text));
    setText("");
  }

  return (
    <div className={styles.todo}>
      <h1 style={{ marginBottom: "20px" }}>Todo List</h1>
      <div className={styles.inputfield}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Введите название задачи"
        />
        <button
          onClick={() => handleAddTask()}
          className={styles.add}
          type="button"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <ListTask key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
