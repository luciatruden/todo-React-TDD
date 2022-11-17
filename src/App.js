import './App.css';
import TodoList from './components/TodoList';

function App() {

  const todos = ["make beds", "clean windows", "go shopping", "go to gym", "keep learning"]
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
