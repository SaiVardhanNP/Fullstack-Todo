import CreateTodo from "./components/CreateTodo"
import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {

  const [todos,setTodos]=useState([]);
  useEffect(() => {
  fetch("http://localhost:3000/todos")
  .then(async function(response){
    const data= await response.json();
    setTodos(data);
  })
},[])  // <-- misplaced parentheses


  return(
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      
      <CreateTodo/>
      
      <Todo todos={todos}/>
      
    </div>
  )
}

export default App
