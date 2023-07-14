import React from 'react';

export const TodoItem = (props,todo) => { 
 
  return (
    <div >
      <h4>{props.todo.title}</h4>
      <p>{props.todo.dis}</p> 
      <button className="btn-btn delet" onClick={()=>{props.onDelete(todo)}}>Delete</button>
    </div>
  );
};



