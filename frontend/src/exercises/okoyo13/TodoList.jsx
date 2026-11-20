
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (!inputValue.trim()) return;

    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <label htmlFor="todo-input">Add a new task</label>

     <label htmlFor="todo-input">Add a task:</label>
<input
  id="todo-input"
  type="text"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && addTodo()}
/>

      <button type="button" onClick={addTodo}>
        Add
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              type="button"
              onClick={() => toggleTodo(todo.id)}
              aria-label={`${todo.completed ? "Mark incomplete" : "Mark complete"}: ${todo.text}`}
            >
              {todo.completed ? "Undo" : "Complete"}
            </button>

            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
