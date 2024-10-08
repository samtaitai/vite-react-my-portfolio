import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Loader from './components/Loader'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Loader>
      <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
      </div>
    </Loader>
  )
}

export default App
