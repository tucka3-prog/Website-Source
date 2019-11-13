import React, { Component, useEffect, useState, View, ScrollView } from 'react';
import './App.css';
import TodoApp from "./components/todo/TodoApp";
import "./bootstrap.css";



class App extends Component {
  render() {
    return (
      <div>
        <TodoApp/>
      </div>

    );
  }
}



export default App;
