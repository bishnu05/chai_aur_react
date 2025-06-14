import "./App.css";
import AddTodo from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="bg-teal-900 text-white text-2xl p-3">Learn About redux ToolKit</h1>
      <div className="container mx-auto p-4">
        <div className="bg-gray-900 text-gray-100 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Todo List</h2>
          <AddTodo/>
          <Todos/>
          {/* AddTodo component will be placed here */}
          {/* Todos component will be placed here */}
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>Built with React and Redux Toolkit</p>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-8">
        <p>&copy; 2025 Bishnu Gorai</p>
      </footer>
    </>
  );
}

export default App;
