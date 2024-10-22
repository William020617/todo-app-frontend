import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {task.name}
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
