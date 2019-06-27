import React, {Component} from 'react';
import { ToDoList } from '../todo-list/to-do-list';
import { SearchPanel } from '../search-panel/search-panel';
import { AppHeader } from '../app-header/app-header';
import { ItemStatusFilter } from '../status-filter-panel/status-filter-panel';
import { AddToDoListItem } from '../add-todo-List-item/add-todo-list-item';

import './app.css';

export class App extends Component {

  maxId = 100;

  createItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx]
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
  }

  state = {
    todoData: [
      this.createItem('Drink my coffee!'),
      this.createItem('Learning React prog'),
      this.createItem('Lanch to five o clock')
    ],
    title: 'My ToDo List!',
    textSearch: '',
    filterToDo: 'all'
  };

  deleteItem = (id) => {
    this.setState (({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)
      console.log(`Deleted:`, idx)

      return{
        todoData: todoData.filter((_, i) => i !== idx)
      }
    })
  }
  addItem = (text) => {
    const newItem = this.createItem(text)
    console.log('addItem')
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      };
    })

  }
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')}
    })
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')}
    })
  }
  textSearch = (items, text) => {
    console.log(text)
    if (text.length === 0) return items
    //search text in state
    return items.filter(item => item.label.toLowerCase().includes(text.toLowerCase()))
  }
  filterItems = (items, filter) => {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  }
  textSearchFilter = (textSearch) => {
      this.setState({textSearch})
  }
  activeBtn = (filterToDo) => {
      this.setState({filterToDo})
  }

  render (){
    const {title, todoData, textSearch, filterToDo} = this.state;
    const visibleItems = this.filterItems(this.textSearch(todoData, textSearch), filterToDo)
    const doneCount = todoData.filter((el) => el.done).length
    const todoCount = todoData.length - doneCount
    return (
    <div className='todo-app'>
      <AppHeader titles={title} toDo={todoCount} done={doneCount} />
        <div className='top-panel t-flex'>
          <SearchPanel textSearch = {this.textSearchFilter}/>
          <ItemStatusFilter filter={filterToDo} active={this.activeBtn}/>
        </div>
      <AddToDoListItem addItemList = {this.addItem} />
      <ToDoList
        todos={visibleItems}
        onDeleted={this.deleteItem}
        onImportant = {this.onToggleImportant}
        onDone = {this.onToggleDone}/>
    </div>)
  };
};
