import { Container, Row, Col } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import leftarrow from '../assets/img/arrow1.svg'
import rightarrow from '../assets/img/arrow2.svg'
import colorsharp from '../assets/img/color-sharp.png'

function Skill(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className="skill" id="skills">
            <Container >
             <Row >
                <Col>
                <div className="skill-bx">
                    <h2>Skills</h2>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={meter1} alt='image'></img>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={meter2} alt='image'></img>
                            <h5>Embedded Systems</h5>
                        </div>
                        <div className="item">
                            <img src={meter3} alt='image'></img>
                            <h5>Problem Solving</h5>
                        </div>
                       
                        
                    </Carousel>

                </div>
                
                
                </Col>
            </Row>
            
        </Container>
        <img src={colorsharp} className="background-image-left"></img>
   

        </section>
         )
}
export default Skill