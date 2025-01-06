import Container from "./assets/components/Container/Container"
import Hero from "./assets/components/Hero/Hero"
import ListAnimes from "./assets/components/ListAnime/ListAnimes"
import Nav from "./assets/components/Nav/Nav"


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <Container>
        <ListAnimes />
      </Container>
    </>
  )
}

export default App
