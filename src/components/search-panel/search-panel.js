import React from 'react';
import './search-panel.css';

export const SearchPanel = (props) => {
  const onChange = (text) => {
    props.textSearch(text)
  }
  return (<input onChange = {(e) => onChange(e.target.value)} className='list-group-item todo-search'  type="text" placeholder='search'/>);
};
