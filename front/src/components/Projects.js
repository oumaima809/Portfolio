import {Container, Row, Col} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pcdImg from '../assets/img/pcd.png';
import hikeImg from '../assets/img/HikeProj.jpg' ;
import bakeryImg from '../assets/img/bakeryWorld.jpeg';
import cmdImg from '../assets/img/cmd.png';
import oracleApex from '../assets/img/Oracle_apex.png';
import congestion from '../assets/img/congestion.jpg';
import react from '../assets/img/reactlogo.png';
import node from '../assets/img/node.png';
import express from '../assets/img/express.png';
import postgres from '../assets/img/postgresql.png';
import demopcd from '../assets/vid/demopcd.mp4'
import Cards from './Cards';
import Modal from './Modal';
import { Circle } from 'react-bootstrap-icons';
import { useState } from "react";

function Projects(){
   
    const myProjects = [
        {
            img:pcdImg,
            title:"Digital platform for pathology labs",
            text:"A platform for laboratories to digitize, archive, and efficiently manage microscopic slides using specialized scanners, enhancing data storage and access.",
            tech : ["react", "Node.js","Express.js","Postgres"],
            tech_logo : [react,node,express,postgres],
            demo : demopcd,
            github :"https://github.com/oumaima809/PCD/tree/main"
        },
        {
            img:hikeImg,
            title:"HikeApp",
            text:"This project is a website that connects hikers with available trails and allows organizers to showcase their upcoming hikes, facilitating a community of outdoor enthusiasts.",
            tech : ["HTML", "CSS","Javascript","Node.js", "Express.js", "Sqlite"],
            tech_logo : [react,node,express,postgres],
            demo :"",
            github :"https://github.com/oumaima809/HikeApp/tree/master"

        },
        {
            img:bakeryImg,
            title:"Bakery World",
            text:"Bakery World is an e-commerce platform that allows users to explore a variety of baked goods, view detailed product information, add items to their cart, and complete secure checkout.",
            tech : ["HTML", "CSS","Javascript","Php","Mysql"],
            tech_logo : [react,node,express,postgres],
            demo:"",
            github: "https://github.com/oumaima809/Bakery-World/tree/master"

        },
        {
            img:cmdImg,
            title:"Travel Manager",
            text:"This CMD application is designed for travel managers to add and manage various trip details, while also allowing customers to search for specific trips.",
            tech : ["C"],
            tech_logo : [react,node,express,postgres],
            demo:"",
            github:"https://github.com/oumaima809/travel-manager-ensi----E"

        }, {
            img:oracleApex,
            title:"Emergency",
            text:"This emergency module, integrated within a healthcare information system, streamlines and automates the entire emergency response process, from the initial call to the final treatment.",
            tech : ["OracleApex", "PL/SQL"],
            tech_logo : [react,node,express,postgres],
            demo:"",
            github:""

        },
        {
            img: oracleApex,
            title: "Naxxum Equipment Management",
            text : "This app streamlines equipment requests, maintenance, and allocation for Naxxum employees, automating the entire process.",
            tech : ["OracleApex", "PL/SQL"],
            tech_logo : [react,node,express,postgres],
            demo:"",
            github:""
        },
        {
            img: congestion,
            title: "Congestion Prediction Notebook",
            text : "I created a notebook for developing an intelligent congestion prediction tool by analyzing traffic data and training models like Regression, Decision Trees, and RNNs.",
            tech : ["Python","Numpy","Pandas","Seaborn","Tensorflow","Sklearn","Machine Learning"],
            tech_logo : [react,node,express,postgres],
            demo:"",
            github:"https://github.com/oumaima809/Traffic-Congestion-Prediction/blob/main/Traffic%20Prediction.ipynb"
        }
    ]
const [first, setFirst] = useState(false);
const [second, setSecond] = useState(true);
const [third, setThird] = useState(true);
const [modal, setModal] = useState(false);
const [projectInfo,setProjectInfo] = useState(myProjects[0]);

const openModal = (data) =>{
  console.log(data);
    setModal(data[0])
    setProjectInfo(data[1])
}

const UpdateIcon = (icon) => {
    console.log(icon); // Check if this is being logged
    if (icon === "first") {
        setFirst(false);
        setSecond(true)
        setThird(true);
    }
    if (icon === "second") {
        setFirst((prev) => true);
        setSecond((prev) => false)
        setThird((prev) => true);
    }
    if (icon === "third") {
        setFirst((prev) => true);
        setSecond((prev) => true)
        setThird((prev) => false);
    }
};


   return (
    <section className="project" id="projects">
         <Container>
            <Row>
                <h2>Projects</h2>
                
                
            </Row>
            
            <Row className="justify-content-center align-items-center circle">
    <Col xs="auto" className="icon" onClick={() => UpdateIcon("first")}>
       {first ? <Circle className="mx-1" size={40} />: <Circle style={{ fill: '#AA367C' }} className="mx-1" size={40}  />  } 
    </Col>
    <Col xs="auto" className="icon" onClick={() => UpdateIcon("second")}>
        {second ? <Circle className="mx-1" size={40} /> : <Circle style={{ fill: '#AA367C' }} className="mx-1" size={40}  />}
    </Col>
    <Col xs="auto" className="icon" onClick={() => UpdateIcon("third")}>
        {third ? <Circle className="mx-1" size={40} /> : <Circle style={{ fill: '#AA367C' }} className="mx-1" size={40}  />}
    </Col>
</Row>

<br></br>

           <Row>
           {myProjects.map((cardInfo, index) => {
    if (!first && index < 3) {
      return (
        <Col sm={4} key={index}>
          <Cards cardInfo={cardInfo} onReturnValue={openModal} />
        </Col>
      );
    }
    if (!second && index >= 3 && index<6) {
      return (
        <Col sm={4} key={index}>
          <Cards cardInfo={cardInfo} />
        </Col>
      );
    }
    if (!third && index >= 6) {
        return (
          <Col sm={4} key={index}>
            <Cards cardInfo={cardInfo} />
          </Col>
        );
      }
    return null; // Return null if neither condition matches
})}

           </Row>
         </Container>
        
         {modal &&<Modal close={openModal} projectInfo={projectInfo}/>}

    </section>
   )
}

export default Projects;