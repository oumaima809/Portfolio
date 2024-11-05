import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import demo from '../assets/vid/demopcd.mp4';
import pcdImg from '../assets/img/pcd.png';
import react from '../assets/img/reactlogo.png';
import node from '../assets/img/node.png';
import express from '../assets/img/express.png';
import postgres from '../assets/img/postgresql.png';
import hikeImg from '../assets/img/HikeProj.jpg' ;
import bakeryImg from '../assets/img/bakeryWorld.jpeg';
import cmdImg from '../assets/img/cmd.png';
import oracleApex from '../assets/img/Oracle_apex.png';
import congestion from '../assets/img/congestion.jpg'

const Modal = ({close,projectInfo}) => {
   const closeModal =()=>{
       close(false)
   }
   console.log(projectInfo)
   return (
       
           <div className="modal-customized">
               <div className="modal-content-customized">
                   <div className="modal-header-customized">
                       <h5 className="modal-title-customized">{projectInfo.title}</h5>
                       <button className="modal-close-button-customized" onClick={()=>closeModal()}  >&times;</button>
                   </div>
                   <div className="modal-body-customized">
                       <p>
                           {projectInfo.text}
                       </p>
                       <video width="600" height="300" controls autoPlay muted loop poster={projectInfo.img}>
                           <source src={projectInfo.demo} type="video/mp4" />
                           Your browser does not support the video tag.
                       </video>
                   </div>
                   <div className="modal-footer-customized">
                       <div className='techno'>
                         {projectInfo.tech_logo.map((item,index)=>{
                          return(<img src={item} alt="logo" key={index} />)
                         })}
                           
                           
                       </div>
                       <button className="modal-button" onClick={()=>closeModal()} >Close</button>
                   </div>
               </div>
           </div>
       
   );
};

export default Modal;
