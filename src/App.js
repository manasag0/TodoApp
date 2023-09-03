import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
// import Button from '@mui/material/Button';

function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput]= useState('');
  // console.log("",input)

  const addTodo = (event)=>{
    setTodos([...todos,input]);
    event.preventDefault(); // will stop the refreshing
    setInput(''); //clear upthe input after clicking add todo button
  }
  return (
    <div className="App">
    <h1>hello world</h1>
    <from>
    <input value={input} onChange={event=>setInput(event.target.value)}/>
    <button onClick={addTodo}>Add Todo</button>
    {/* <Button variant="contained">Contained</Button> */}
    </from>
    <ul>
      {todos.map(todo=>(
        <Todo text = {todo}/>
      ))}
    </ul>
    </div>
  );
}

export default App;
