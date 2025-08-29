import React, { useState } from 'react';
import './TaskForm.css';

interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), description.trim());
      setTitle('');
      setDescription('');
      setIsExpanded(false);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsExpanded(false);
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-header">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to be done?"
            className="task-title-input"
            onFocus={() => setIsExpanded(true)}
          />
          <button
            type="submit"
            disabled={!title.trim()}
            className="btn btn-add"
          >
            Add Task
          </button>
        </div>
        
        {isExpanded && (
          <div className="form-details">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description (optional)"
              className="task-description-input"
              rows={3}
            />
            <div className="form-actions">
              <button type="submit" disabled={!title.trim()} className="btn btn-save">
                Save Task
              </button>
              <button type="button" onClick={handleCancel} className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskForm;
