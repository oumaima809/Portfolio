import React from 'react';
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from './Modal'
import Badge from 'react-bootstrap/Badge'; // Import Bootstrap badge component




function Cards({cardInfo , onReturnValue}) {
   

    const sendDataToParent = () => {
        console.log("sent");
        onReturnValue([true,cardInfo]); // Call the parent callback with data
      };
    const handleModal= ()=>{
      if(cardInfo.description){
        sendDataToParent();
      }
    }
   return(
        
        

<Card  className="hover-card" style={{ height: '50rem', background: '#1E1E1E', color: '#FFFFFF' ,cursor:'pointer'}} onClick={()=>handleModal()}>
  <Card.Img variant="top" src={cardInfo.img} style={{ height: '16rem' }} />
  <Card.Body>
    <Card.Title style={{color:'#FFF', fontWeight:'900'}}>{cardInfo.title}</Card.Title>
    
    <Card.Text style={{ height: '60%' }}>
      {cardInfo.text}
    </Card.Text>
    
    {/* Technologies section */}
    <div style={{ marginBottom: '20px' ,height:"10%"}}>
        {
            cardInfo.tech.map(item =>(
                <Badge style={{   background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#FFF', marginRight: '8px',marginBottom:'8px', fontSize: '14px' }}>{item}</Badge>

            ))
        }
      
      {/* Add more technologies as needed */}
    </div>
    <span  className="custom-button">
    {cardInfo.github &&
            <button onClick={sendDataToParent}>
               Read More
            </button>}
            
            
        
        
        
        {cardInfo.github && <button 
        
        >
        <a 
            href={cardInfo.github}
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: 'white', textDecoration: 'none' }}
        >
            <span>
                View on Github
            </span>
        
        </a>
        </button>}
    </span>
    
  </Card.Body>

</Card>
    
    )
}
export default Cards;