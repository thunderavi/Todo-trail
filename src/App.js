
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';
import { Button } from './components/Button';
import './style.css'

function App() {
  return (
    <div className='todocontainer'>
      <Header></Header>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <TodoItem></TodoItem>
      <Button></Button>
    </div>
  );
}

export default App;
