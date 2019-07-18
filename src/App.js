import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import Conditional from "./Conditional";

// import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super()
  this.state = {
    todos: todosData,
    isLoading: true, 
    unreadMessages: ["a","b"]
  }
  this.handleChange = this.handleChange.bind(this)
}

    
componentDidMount() {
  setTimeout(() => {
      this.setState({
          isLoading: false
      })
  }, 1500)
}

handleChange(id) {
  this.setState(prevState => {
    const updatedTodos = prevState.todos.map (todo =>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    return {
      todos: updatedTodos
    }
  })
}

  render() {
    const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}
    handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoItems}
        <div>
          {this.state.isLoading ?
          <h1>Loading...</h1> :
          <Conditional />}
        </div>
        <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>


      </div>
   
    );
  }
}

export default App;
