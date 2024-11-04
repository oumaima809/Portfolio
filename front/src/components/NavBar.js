import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/Oumaima.png';
import navIcon1 from '../assets/img/linkedin.png';
import navIcon2 from '../assets/img/github.png';
import navIcon3 from '../assets/img/nav-icon2.svg';
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom"




function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{

        const onScroll =()=>{
            if(window.scrollY>50) {
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll)

    },[])


  return (
    
      <Navbar expand="lg" className={scrolled? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home" className="navbar-logo">
            <img src={logo} alt="Logo" style={{width:'8rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className='navbar-toggler-icon'></span>
         </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link' : 'navbar-link'} onClick={()=>setActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"className={activeLink==='skills'? 'active navbar-link' : 'navbar-link'} onClick={()=>setActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects'? 'active navbar-link' : 'navbar-link'} onClick={()=>setActiveLink('projects')}>Projects</Nav.Link>

          </Nav>
          <span className='navbar-text'>
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/oumaima-guesmi-9a04611b6/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/oumaima809"><img src={navIcon2} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100088887193073&locale=fr_FR"><img src={navIcon3} alt="" /></a>
              </div>
            <HashLink to='#connect'>
             <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button>

            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

export default NavBar;