import React, { useState } from 'react';
import { Task } from '../types/Task';
import './TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string, description: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);

  const handleEdit = () => {
    if (editTitle.trim()) {
      onEdit(task.id, editTitle.trim(), editDescription.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description);
    setIsEditing(false);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <div className="task-edit-form">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Task title"
            className="edit-title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Task description"
            className="edit-description"
          />
          <div className="edit-actions">
            <button onClick={handleEdit} className="btn btn-save">
              Save
            </button>
            <button onClick={handleCancel} className="btn btn-cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="task-checkbox"
          />
          <h3 className="task-title">{task.title}</h3>
          <div className="task-actions">
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-edit"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="btn btn-delete"
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        <div className="task-meta">
          <span className="task-date">
            Created: {formatDate(task.createdAt)}
          </span>
          {task.updatedAt !== task.createdAt && (
            <span className="task-date">
              Updated: {formatDate(task.updatedAt)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
