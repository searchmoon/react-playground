import "./App.css";
import { useCallback, useState, useEffect } from "react";
import Loading from "./components/Loading";
import axios from "axios";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);

  console.log("todos", todos);
  return (
    <>
      {/*{todos ? <div>todos</div> : <Loading />}*/}
      {/* {todos? {todos.map((list) => <div key={list.id}>{list.title}</div>)} : <Loading />} */}
      {todos ? <TodoList todos={todos} /> : <Loading />}
    </>
  );
}

export default App;
