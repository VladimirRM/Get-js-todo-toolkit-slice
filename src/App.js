import { useSelector } from "react-redux";
import "./App.css";
import Form from "./componets/Form";
import TodoItem from "./componets/TodoItem";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="App">
      <Form />
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
