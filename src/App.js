import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
class App extends Component {
    render() {
      return (< div className="App" >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2 > Proyecto TODO </h2>   
          </div> 
          <div >
              <TodoForm />
              <TodoList />
              <Footer />
              </div>

            
        </div>
        );
    }
}
export default App;