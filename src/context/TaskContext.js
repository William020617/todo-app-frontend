import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Learning React', completed: false },
    { id: 2, name: 'Complete Assignment', completed: false },
  ]);

  const toggleTask = id => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
