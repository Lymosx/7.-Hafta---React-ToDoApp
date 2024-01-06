// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const completeTask = (index) => {
    const completedTask = tasks[index];
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, completedTask]);
  };

  const removeTask = (index, fromCompleted = false) => {
    const updatedTasks = fromCompleted ? [...completedTasks] : [...tasks];
    updatedTasks.splice(index, 1);
    fromCompleted ? setCompletedTasks(updatedTasks) : setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="App">
        <div>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Yeni görev ekle..."
          />
          <button onClick={addTask}>Ekle</button>
        </div>
        <div>
          <h2>Aktif Görevler</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => completeTask(index)}>Tamamlandı</button>
                <button onClick={() => removeTask(index)}>Sil</button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Tamamlanan Görevler</h2>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => removeTask(index, true)}>Sil</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
