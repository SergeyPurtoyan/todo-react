import {useState} from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () =>{

  const [todos,setTodos] = useState([
    {id:1, title: '. . . . . . . . . . . . . ', done:false},
   
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
       title: text, 
       done: false
      };

      setTodos([newTodo, ...todos]);
      
    }


  const deleteTodo = (id) =>{
      const newTodos = todos.filter(el => el.id !== id);
      setTodos(newTodos);
    }

  const doneTodo = (id) => {
      const newTodos = todos.map(el=>{
        if(el.id === id) el.done = !el.done;
        return el;
      });
      setTodos(newTodos);
    }
  

  return(
    <div className="App">
      <AddTodo addTodo={addTodo}/>
      <TodoList todos = {todos}  deleteTodo={deleteTodo} doneTodo={doneTodo}/>
    </div>
  )
}

export default App;