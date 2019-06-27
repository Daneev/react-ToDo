import React, {Component}  from 'react';
import './status-filter-panel.css';

export class ItemStatusFilter extends Component {
  
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]

  render() {
    const {filter, active} = this.props;
    const buttons = this.buttons.map(({name, label}) => {
    const isActive = name === filter;
    const classBtn = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
      <button type="button"
              className={`btn ${classBtn}`}
              key={name}
              onClick = {() => active(name)}>
            {label}</button>
      )
    })
    return(
      <div className="status-filter btn-group">
        {buttons}
      </div>
    );
  };
}

