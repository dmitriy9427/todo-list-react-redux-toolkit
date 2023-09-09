import React, { useState } from "react";
import styles from "./todo-list.module.css";
import ListTask from "./components/ListTask/ListTask";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function handleAddTask() {
    setTodos([
      ...todos,
      {
        id: new Date().toLocaleString(),
        text: text,
        completed: false,
      },
    ]);
    setText("");
  }

  function handleRemoveTask(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className={styles.todo}>
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
        {todos.length > 0 &&
          todos.map((todo) => (
            <ListTask
              key={todo.id}
              {...todo}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
