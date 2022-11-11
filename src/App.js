import React from 'react';
import './App.css';
import { useCallback, useState, useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then(res => setTodos(res.data));
	}, []);

	console.log('todos', todos);

	return <>{todos ? <TodoList todos={todos} /> : <Loading />}</>;
}

export default App;
