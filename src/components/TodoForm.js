import React, { Component } from 'react';

class TodoForm extends Component {
  render (){
    return (
    <div>
      <form onSubmit={this.props.handleSubmit()}>
        <input type = "text" ref = "node" placeholder = "agregar tareas"/>
        <button > Add </button> 
      </form> 
    </div>)
  }
}
  
export default TodoForm