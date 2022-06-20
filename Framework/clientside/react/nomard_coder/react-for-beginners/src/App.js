import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  };
  const onClick = (index) => {
    setTodos((currentArray) =>
      currentArray.filter((i, curIndex) => index !== curIndex)
    );
  };

  console.log(todos);
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          type={"text"}
          placeholder={"Please write your to do"}
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((i, index) => (
        <li key={index.toString()} id={index}>
          {i} <span onClick={() => onClick(index)}>X</span>
        </li>
      ))}
    </div>
  );
}

export default App;
