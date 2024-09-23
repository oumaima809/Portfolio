import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg'
import {HashLink} from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom"





function Banner (){
  return(
    <Router>

   
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi I'm Oumaima `}<sapn className='wrap'>Computer Science Engineering student</sapn></h1>
                  <p>
                  I am a third-year computer science student with a deep passion for technology and software engineering. Driven by curiosity and a desire to innovate, I actively explore areas like artificial intelligence, embedded systems, and software development. My goal is to harness my skills to create impactful technology that benefits humanity, striving to be a creator rather than a consumer of technology.


                  </p>
                  <HashLink to='#connect' style={{ textDecoration: 'none' }}>
                  <button >Let's connect <ArrowRightCircle size={25}/></button>

            </HashLink>
           
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img"></img>
                </Col>
            </Row>
        </Container>

    </section>
    </Router>
  )
}

export default Banner