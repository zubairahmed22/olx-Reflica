import React from 'react'
import Iamge from "./Iamge";
import "./categerylist.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {Link}from "react-router-dom"

function AllCatagery() {
    return (
        <div className ="ALLCATEG">
        <div className="All">
        <h5>ALL CATEGORIES </h5>
        <KeyboardArrowDownIcon  className="CatArrow"/>
        
        </div>
           <ul className="list">
           <li>
         
           Mobile Phone
         
           </li>
           <li>
           Cars
           </li>
          
           <li>
           Motorcycles
           </li>
           <li>
           Houses
           </li>
           <li>
           TV - Video - Audio
           </li>
           <li>
           Tablets
           </li>
           <li>  
           Land & Plots
           </li>
         
           </ul> 
           <Iamge/>
        </div>
        
    )
}

export default AllCatagery
