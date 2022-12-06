/* eslint-disable */ 
import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
      const { completed, id, title } = props.todo
    return (
        <li className='item'>
          <input className='checkbox' type="checkbox" 
          checked={completed}
          onChange={() => props.handleChangeProps(id)}/> 
            <span style={completed ? completedStyle : null}>
      {props.todo.title}
    </span>
          <button onClick={() => props.deleteTodoProps(id)}>
  Delete
</button>

        </li>
      )
}

export default TodoItem;
