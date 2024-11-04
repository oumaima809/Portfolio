import React from 'react'
import NavBar from '../components/NavBar';
import Banner from '../components/Banner'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Competitions from '../components/Competitions'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


const HomePage = () => {
  return (
    <div>
        <div className="App">
          <NavBar/>
          <Banner/>
          <Skill/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default HomePage