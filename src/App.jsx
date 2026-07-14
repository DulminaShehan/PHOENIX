import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Timeline from './components/Timeline'
import Highlights from './components/Highlights'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Highlights />
        <Register />
      </main>
      <Footer />
    </>
  )
}

export default App
