import React from 'react';
import './style/GlobalStyle.css';
import './App.css';
import { Header } from './components/Header'
import { TodoInterface } from './components/TodoIntnterface'

function App() {
  return (
    <>
    
      <Header />

      <TodoInterface />
    </>
  );
}

export default App;
