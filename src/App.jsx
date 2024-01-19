import { useState } from "react";

function InputForm({ onAdd }) {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleClickAdd() {
    onAdd(input);
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

function TodoList({ todos, onCheck }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onCheck(todo.id)}
            />

            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const [todos, setTodos] = useState([]);

  function handleAdd(text) {
    const newTodo = {
      id: Math.random(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  }

  function handleCheck(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const itemLeft = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h1>Todo App</h1>

      <InputForm onAdd={handleAdd} />

      <TodoList todos={todos} onCheck={handleCheck} />

      <p>
        <small>{itemLeft.length} items left</small>
      </p>
    </div>
  );
}
