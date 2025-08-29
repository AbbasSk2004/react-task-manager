import React, { useState, useMemo } from 'react';
import { Task, FilterType } from './types/Task';
import { useLocalStorage } from './hooks/useLocalStorage';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getDemoTasks } from './utils/demoData';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', getDemoTasks());
  const [filter, setFilter] = useState<FilterType>('all');

  // Generate unique ID for new tasks
  const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Add new task
  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed, updatedAt: new Date() }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit task
  const editTask = (id: string, title: string, description: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title, description, updatedAt: new Date() }
          : task
      )
    );
  };

  // Filter tasks based on current filter
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'incomplete':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Calculate task counts
  const taskCounts = useMemo(() => ({
    all: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    incomplete: tasks.filter((task) => !task.completed).length,
  }), [tasks]);

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📋 Task Tracker</h1>
          <p>Organize your tasks efficiently</p>
        </header>

        <main className="app-main">
          <TaskForm onAddTask={addTask} />
          
          {tasks.length > 0 && (
            <TaskFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              taskCounts={taskCounts}
            />
          )}

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        </main>

        <footer className="app-footer">
          <p>Built with React & TypeScript</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
