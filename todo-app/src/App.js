import { useState } from 'react';
import './App.css';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: true },
    { id: 3, text: 'Practice JavaScript', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTaskInput('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    if (window.confirm('Delete this task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="App">
      <header>
        <h1>My To-Do List</h1>
      </header>

      <main className="todo-container">
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="Enter a new task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>

        <div className="filters">
          {['All', 'Active', 'Completed'].map((f) => (
            <button
              key={f}
              className={filter === f ? 'active' : ''}
              onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        {filteredTasks.length === 0 ? (
          <p className="empty">No tasks yet! Add one above.</p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task) => (
              <li key={task.id} className={task.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <span>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}

        <div className="stats">
          <p>Total: {total}</p>
          <p>Completed: {completed}</p>
          <p>Remaining: {remaining}</p>
        </div>

        <button className="clear" onClick={clearCompleted}>
          Clear Completed
        </button>
      </main>
    </div>
  );
}

export default App;

