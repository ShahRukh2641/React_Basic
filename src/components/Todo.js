import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItems from './TodoItems';

class Todo extends Component {
  render() {
    return this.props.todos.map((todo)=>(
        <TodoItems  key={todo.id} todos={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>      
    ));
  }
}


Todo.proptype ={
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}


export default Todo;
