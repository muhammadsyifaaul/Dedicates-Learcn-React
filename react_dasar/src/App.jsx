import HelloWorld from './components/HelloWorld'
import SayNihao from './components/SayNihao'
import './App.css'
import SayKonnichiwa from './components/SayKonnichiwa'
import Container from './components/Container'

function App() {
  return (
    <>
      <SayNihao />
      <SayKonnichiwa />
      <Container>
          <HelloWorld />
      </Container>
    </>
  )
}

export default App
