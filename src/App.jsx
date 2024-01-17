import { useState } from "react";

function InputForm() {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleClickAdd() {
    window.alert("clicked!");
  }

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} />

      <button type="button" onClick={handleClickAdd}>
        Add
      </button>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />

            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const todos = [
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
    { id: 3, text: "Todo 3", completed: false },
    { id: 4, text: "Todo 4", completed: false },
  ];

  function handleClickFilterAll() {
    alert("filter all clicked");
  }

  function handleClickFilterActive() {
    alert("filter active clicked");
  }

  function handleClickFilterCompleted() {
    alert("filter completed clicked");
  }

  return (
    <div>
      <h1>Todo App</h1>

      <InputForm />

      <TodoList todos={todos} />

      <p>
        <small>0 items left</small>
      </p>

      <div>
        <button onClick={handleClickFilterAll}>All</button>
        <button onClick={handleClickFilterActive}>Active</button>
        <button onClick={handleClickFilterCompleted}>Completed</button>
      </div>
    </div>
  );
}
