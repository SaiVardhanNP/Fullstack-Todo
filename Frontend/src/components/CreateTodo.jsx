import React, { useState } from 'react'

const  CreateTodo = () => {
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  
  return (
    <div >
        <div>
      <input style={{padding:10,margin:10}} onChange={(e)=>{setTitle(e.target.value)}}  placeholder='Enter title' type="text" />
      </div>
      <div>
      <input style={{padding:10,margin:10}} onChange={(e)=>{setDescription(e.target.value)}}  placeholder='Enter description' type="text" />
      </div>
      <div onClick={
        function(){
        fetch("http://localhost:3000/todo",
          {
          method:"POST",

          body:JSON.stringify({
            title:title,
            description:description

          }),
          headers:{
            "content-type":"application/json"
          }
        }
      )
      .then(async(res)=>{
        const json=res.json()
        alert("todo added!")
      })
      }
     } style={ {position:'relative',textAlign:'center',left:35,width:80,borderRadius:15,padding:5,margin:10,cursor:'pointer',backgroundColor:'red'}}>Add Todo</div>
    </div>
    )
  
}

export default CreateTodo;


