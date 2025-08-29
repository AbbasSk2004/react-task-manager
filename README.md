# 📋 Task Tracker

A modern, responsive Task Tracker application built with React and TypeScript. This application allows users to efficiently manage their tasks with a clean, user-friendly interface.

## ✨ Features

- **Task Management**: Create, edit, and delete tasks
- **Task Completion**: Mark tasks as completed with visual feedback
- **Task Filtering**: Filter tasks by All, Completed, or Incomplete status
- **Persistent Storage**: Tasks are automatically saved to localStorage
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations
- **TypeScript**: Full type safety and better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `build` folder.

## 🛠️ Technology Stack

- **React 18**: Modern React with functional components and hooks
- **TypeScript**: Type-safe JavaScript development
- **CSS3**: Modern styling with flexbox, grid, and animations
- **localStorage**: Client-side data persistence
- **React Hooks**: useState, useEffect, useMemo for state management

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── TaskForm.tsx    # Task creation form
│   ├── TaskList.tsx    # Task list display
│   ├── TaskItem.tsx    # Individual task item
│   ├── TaskFilter.tsx  # Task filtering controls
│   └── *.css          # Component-specific styles
├── hooks/              # Custom React hooks
│   └── useLocalStorage.ts
├── types/              # TypeScript type definitions
│   └── Task.ts
├── App.tsx             # Main application component
├── App.css             # Main application styles
├── index.tsx           # Application entry point
└── package.json        # Project dependencies and scripts
```

## 🎯 Key Features Explained

### Task Management
- **Add Tasks**: Click on the input field and start typing. The form expands to include an optional description field.
- **Edit Tasks**: Click the edit button (✏️) on any task to modify its title and description.
- **Delete Tasks**: Click the delete button (🗑️) to remove a task permanently.
- **Complete Tasks**: Check the checkbox to mark a task as completed.

### Task Filtering
- **All**: Shows all tasks regardless of completion status
- **Incomplete**: Shows only tasks that haven't been completed
- **Completed**: Shows only completed tasks
- Each filter button displays the count of tasks in that category

### Data Persistence
- All tasks are automatically saved to the browser's localStorage
- Data persists between browser sessions
- No server required - everything runs locally

### Responsive Design
- **Desktop**: Full-featured interface with side-by-side layouts
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Stacked layout with touch-friendly buttons

## 🎨 Design Features

- **Modern Gradient Background**: Beautiful purple gradient theme
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Card-based Layout**: Clean, organized task presentation
- **Visual Feedback**: Clear indication of task completion status
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🔧 Customization

The application is built with modular components and can be easily customized:

- **Colors**: Modify the CSS variables in the component stylesheets
- **Layout**: Adjust the container widths and spacing
- **Animations**: Customize transition durations and effects
- **Functionality**: Extend with additional features like due dates, categories, or priority levels

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and TypeScript
- Styled with modern CSS3 features
- Icons provided by emoji characters for simplicity
- Inspired by modern task management applications

---

**Happy Task Managing! 🎉**
