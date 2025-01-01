import React from 'react';
import HelloWorld from './components/HelloWorld';
import SayNihao from './components/SayNihao';
import './App.css';
import SayKonnichiwa from './components/SayKonnichiwa';
import Container from './components/Container';
import Nav from './components/Nav';
import Todolist from './assets/Todolist/Todolist';

function App() {
  return (
    <>
      <SayNihao />
      <SayKonnichiwa />
      <Container text='Container'>
          <HelloWorld />
      </Container>
      <Container text={'Conditional'}>
        <Todolist />
      </Container>
    </>
    // <Nav />
  )
}

export default App;
