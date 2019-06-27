import React from 'react';
import './to-do-list-item.css';
import CustomComponentOn from '../FormDesign/CustomComponent';


export const ToDoListItem = (props) => {

    const {label, done, important, onDeleted, onImportant, onDone} = props;
    const triggerImportant = important ? 'bt' : 'bf';
    const triggerDone = done ? 'onDone' : 'offDone';
    return (
      <div className="todo-list-item row">
        <div onClick = { onDone }>
            < CustomComponentOn dones={triggerDone} status={triggerImportant} mytodo={label} / >
        </div>
          <button onClick = { onImportant } type="button"
                  className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-exclamation" />
          </button>

          <button onClick = { onDeleted } type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
          </button>
      </div>
    );

}
