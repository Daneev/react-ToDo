import React from 'react';
import './app-header.css';


export const AppHeader = ({titles, toDo, done}) => {
  return(
    <div className="d-flex justify-content-between">
      <h2> {titles} </h2>
      <h5 className="align-self-end text-muted"> {toDo} more to do, {done} done </h5>
    </div>
  )
};
