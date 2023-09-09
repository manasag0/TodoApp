import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './Todo';
// import Button from '@mui/material/Button';
import db from './firebase';
function App() {

  const [todos,setTodos] = useState([]);
  const [input,setInput]= useState('');
  // console.log("",input)

  //when the app loads we need to listen to the database and fetech new todos as they get added removed

  useEffect(()=>{
    //fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=> doc.data().todo))
    })
  },[])


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
