import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/layout/Navbar'
import Main from './components/main/Main'
import AboutMe from './AboutMe/AboutMe'

function App() {

  return (
    <section className='container'>
      <div className='navbar_principal'  id='navbar'>
        <Navbar/>
      </div>
      <div id='AboutMe'>
        <AboutMe/>
      </div>
      <div id='main'>
        <Main/>
      </div>
      <div id='redes'>
        <Footer/>
      </div>
    </section>
  )
}

export default App
