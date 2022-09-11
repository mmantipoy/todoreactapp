import React, { useState } from 'react';
import './style/GlobalStyle.css';
import './App.css';
import { Header } from './components/Header'
import { TodoInterface } from './components/TodoIntnterface'
import { Footer } from './components/Footer';
import { InfoInterface } from './components/InfoInterface';




interface AppProps{

  onInfo: () => void
}

function App() {

  const [info, setInfo] = useState<boolean>(false)

  return (
    <>
    
      <Header onClick={setInfo}/>
      {info === true && <InfoInterface onClick={setInfo}/>}
      <TodoInterface />

      <Footer />
    </>
  );
}

export default App;
