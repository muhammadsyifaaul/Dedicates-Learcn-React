import React from 'react';
import HelloWorld from './components/HelloWorld';
import SayNihao from './components/SayNihao';
import './App.css';
import SayKonnichiwa from './components/SayKonnichiwa';
import Container from './components/Container';
import Nav from './components/Nav';
import Todolist from './assets/Todolist/Todolist';
import Table from './assets/Table/Table';
import AllertButton from './assets/Button/AllertButton';
import MyButton from './assets/Button/MyButton';


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
      <Container text={'Pure Component'}>
        <Table />
      </Container>
      <Container text={'Event '}>
        <AllertButton message='Event' />
      </Container>
      <Container>
        <MyButton onSmash={() => alert('Hello World dikirim secara props')} />
      </Container>
    </>
    // <Nav />
  )
}

export default App;
