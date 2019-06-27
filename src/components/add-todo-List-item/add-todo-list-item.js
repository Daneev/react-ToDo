import React, {Component} from 'react';
import './add-todo-list-item.css'

export class AddToDoListItem extends Component {
  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItemList(this.state.label)
    this.setState({
      label: ''
    })

  }
  render() {
    return (
      <div className="add-panel">
         <form className = "list-group-item" onSubmit = {this.onSubmit}>
           <input  className ='todo-list-item todo-add'
                   onChange = {this.onLabelChange} type="text"
                   placeholder='add item'
                   value = {this.state.label}/>
           <button type="submit"
                         className="btn btn-outline-success btn-sm float-right">
                   <i className="fa fa-plus-square-o" />
           </button>
         </form>
      </div>
    );
  }
}