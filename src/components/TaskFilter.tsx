import React from 'react';
import { FilterType } from '../types/Task';
import './TaskFilter.css';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    completed: number;
    incomplete: number;
  };
}

const TaskFilter: React.FC<TaskFilterProps> = ({ currentFilter, onFilterChange, taskCounts }) => {
  return (
    <div className="task-filter">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All ({taskCounts.all})
        </button>
        <button
          className={`filter-btn ${currentFilter === 'incomplete' ? 'active' : ''}`}
          onClick={() => onFilterChange('incomplete')}
        >
          Incomplete ({taskCounts.incomplete})
        </button>
        <button
          className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed ({taskCounts.completed})
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;
