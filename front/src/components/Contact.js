import {Container, Row, Col} from "react-bootstrap"
import { useState } from "react";
import contactImg from '../assets/img/contact-img.svg'
function Contact(){
    const formInitialDetails = {
        firstName : '',
        lastName : '',
        email : '',
        phone : '',
        message :''

    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (key,value)=>{
        setFormDetails({
            ...formDetails,
            [key]: value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("https://portfolio-backend-dodh.onrender.com/contact",{
            method : "POST",
            headers : {"Content-Type":"application/json;charset=utf-8"},
            body : JSON.stringify(formDetails)

        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if(result.code == 200){
            setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
          



    }

    
   return(
    <section className="contact" id="connect">
        <Container >
            <Row className="align-itms-center">
                <Col md={6}>
                 <img src={contactImg} alt="conatct us"></img>
                </Col>
                <Col md={6}> 
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}> 
                        <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="Email" value={formDetails.email} placeholder="Email address" onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col  className="px-1">
                                <textarea placeholder="Message" value={formDetails.message} onChange={(e)=>onFormUpdate('message',e.target.value)}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message && 
                                <Col sm={12}>
                                  <p className={status.success=== true? "danger":"success"  }>{status.message}</p>
                                </Col>
                            }
                            
                        </Row>
                       



                        
                        
                    </form>
                </Col>
               
            </Row>
        </Container>

    </section>
   )
}
export default Contact;
