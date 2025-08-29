import { Task } from '../types/Task';

export const getDemoTasks = (): Task[] => {
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000);
  const threeHoursAgo = new Date(now.getTime() - 3 * 60 * 60 * 1000);

  return [
    {
      id: 'demo-1',
      title: 'Complete React Task Tracker',
      description: 'Build a comprehensive task management application using React and TypeScript with all the required features.',
      completed: true,
      createdAt: threeHoursAgo,
      updatedAt: oneHourAgo,
    },
    {
      id: 'demo-2',
      title: 'Add responsive design',
      description: 'Ensure the application works well on mobile, tablet, and desktop devices with proper styling.',
      completed: true,
      createdAt: twoHoursAgo,
      updatedAt: oneHourAgo,
    },
    {
      id: 'demo-3',
      title: 'Implement localStorage persistence',
      description: 'Add functionality to save tasks to browser localStorage so they persist between sessions.',
      completed: false,
      createdAt: oneHourAgo,
      updatedAt: oneHourAgo,
    },
    {
      id: 'demo-4',
      title: 'Write comprehensive README',
      description: 'Create detailed documentation explaining the app features, setup instructions, and usage guidelines.',
      completed: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'demo-5',
      title: 'Test all functionality',
      description: 'Verify that all features work correctly: adding, editing, deleting, completing, and filtering tasks.',
      completed: false,
      createdAt: now,
      updatedAt: now,
    },
  ];
};
