import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {  
  let myStyle={ 
    minHeight:"70vh" 
  //   margin: " 40px auto"
  }
  return (
    <div className="Container my-3"> 
      <h3 className="text-center my-3" style={myStyle}>Todo list here</h3> 
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        ))
      }
    </div>
  );
};





