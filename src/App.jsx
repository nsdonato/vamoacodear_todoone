import { useState } from 'react';
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import './App.css'

function App() {
  const [tasks, setTask] = useState([]);

  const handleTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: +new Date(),
      value: e.target.task.value
    }

    setTask([...tasks, newTask]);
    e.target.task.value = '';
  }

  const handleDelete = (id) => {
    setTask((tasks) => tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <SearchForm search={handleTask} />
      <List tasks={tasks} deleteTask={handleDelete} />
    </div>
  )
}

export default App
