
import './App.css';
import TodoList from './Component/TodoList'
import TodoItem from './Component/TodoItem'
import TodoInput from './Component/TodoInput'


function App() {
  return (
    <div className="App">
      <TodoInput/>
      <TodoList/>
      <TodoItem/>
    </div>
  );
}

export default App;
