import HelloWorld from './components/HelloWorld'
import SayNihao from './components/SayNihao'
import './App.css'
import SayKonnichiwa from './components/SayKonnichiwa'
import Container from './components/Container'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <SayNihao />
      <SayKonnichiwa />
      <Container>
          <HelloWorld />
      </Container>
    </>
    // <Nav />
  )
}

export default App
