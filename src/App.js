import './App.css';
import {useCallback, useState, useEffect} from "react";
import Loading from "./components/Loading";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState(null);

  useEffect(async() => {
  const todoData = await axios.get('https://jsonplaceholder.typicode.com/todos');
  console.log(todoData);
  setTodos(todoData.data);
  }, []);

  console.log('todos', todos)
  return (
    <>
      {/*{todos ? <div>todos</div> : <Loading />}*/}
      {todos? {todos.map((list) => <div key={list.id}>{list.title}</div>)} : <Loading />}
    </>
  );
}

export default App;
