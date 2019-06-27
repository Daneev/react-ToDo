import React from 'react';
import { ToDoListItem } from '../todo-list-item/to-do-list-item';
import './to-do-list.css';

export const ToDoList = (props) => {
  const {onDeleted, onImportant, onDone} = props
  const elements = props.todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      < li key={id} className="list-group-item">
        <ToDoListItem
          {...itemProps}
          onDeleted = {()=>onDeleted(id)}
          onImportant = {()=>onImportant(id)}
          onDone = {()=>onDone(id)}
          />
      </li >
    );
  });

  return <ul className="list-group todo-list"> {elements} </ul>;
};

