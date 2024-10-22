import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const HomePage = () => {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>To-do List</h1>
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default HomePage;
