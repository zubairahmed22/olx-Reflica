import React from 'react'
import "./add.css"
import{Link} from "react-router-dom"

import { useHistory } from 'react-router-dom';
import LastFooter from"./LastFooter";
import ProgressBar from "./ProgressBar"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {useState,useEffect} from "react";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import {db} from "./Firebase"
import  {storage } from "./Firebase"
import useImageCollection from './useImageCollection';
import useStorage from "./useStorage"
import {useImage} from "./Featur/appSlice"
import {selectUser} from "./Featur/userSlice"
import { AccordionActions } from '@material-ui/core';
import { app } from 'firebase';
import{useSelector}from "react-redux"
import {setImage}from ".//Featur/appSlice"

import { useDispatch}from "react-redux";
function AddSell() {
   
    const [title,setTitle] = useState("")
    const [disription, setDiscri] = useState('')
    const [price,setPrice] = useState(0)
    const [image, setImage] = useState(null)
    const [error, setError] = useState(null)
    const [url,setUrl] = useState(null)
    const [progress, setProgress] =useState(0);
    const dispatch = useDispatch()
   
    // const imageSelector =  useSelector(useImage );
    
   console.log( "=>>>>>>>>>>>>>>>>>>>" ,progress)
    const history = useHistory();

   
 
  

     
    
    const fileUplaod = (e) =>{
        
        setImage (e.target.files[0]);
        
        
    }   

   

    const submitFormData = (e) =>{
      
      e.preventDefault();
      
      const storageRef = storage.ref(image.name)
      const dbRef =db.collection('images')
      storageRef.put(image).on('state_changed',(snap) =>{
          // let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
          // setProgress(percentage);
          console.log(image)
      }, (err) =>{
          setError(err)
      }, async () =>{
        const url = await storageRef.getDownloadURL();
         
        dbRef.add({
            title:title,
            disription:disription,
            price: price,
            url:url
            
           
            
    
        }).then((result)=>{
            history.push('/');
        })
        .catch((error) =>{
            alert(error.message)
        })
        setUrl(url)      
      })
      
   
    
        
    }
 
  


        
    return (
        <form onSubmit={submitFormData}>
        <div className="addHeader">
        <div className="HederTop">
        <Link to="/"><ArrowBackIcon className="BackArrow"/></Link>
        <img src="https://www.romaniajournal.ro/wp-content/uploads/2020/04/OLX_Rebranding.png"
         alt="" className="add_logo"/>
        </div>
       
         <div className="postAdd">
         <h2>POST YOUR AD</h2>
         </div>
         <div className="SelectedCategory">
         <div className="heading">
         <h3>SELECTED CATEGORY</h3>
         </div>
       

         <div className="details">
         <h3>INCLUDE SOME DETAILS</h3>
         <h4>Condition*</h4>
         <button>New</button>
         <button className="used">Used</button>
          <div className="InputFild">
          <label>Ad title*</label>
       
          <input value={title} onChange={(e) =>setTitle(e.target.value)}type="text" className="Add_title" required minlength="5"/>

          <label>Description*</label>
          <textarea  value={disription} onChange={(e) =>setDiscri(e.target.value)}type="text" maxlength="100" className="discription"/>
          </div>
         </div>
          <div className="set_price">
          <h3>SET A PRICE</h3>
          <p>Price*</p>
          <input value={price} onChange={(e)=>setPrice(e.target.value)}type="number" className="Price_input" placeholder="Rs |" required/>
          </div>
          <div className="PhotoGellery">
          <h3>UPLOAD UP TO 12 PHOTOS</h3>
          
          <div className="Progress_bar" style={{width: progress 
            + '%'}}>
            
             
            </div>
          
           <div className="upload_photo">
         
           <div className="Main_body_box">
           <div className="imgeBoxUP">
          
           <AddAPhotoOutlinedIcon className="AddImge"/> 
           <input  filename={image} onChange={fileUplaod }
           type="file" id="img" name="img" accept="image/*,image/png, image/jpeg, image/JFIF" className="addPhoto"/>
           </div>
           </div>
           
           </div>
           </div>
           <button  type="submit">Submit</button>
         </div>
         <div className="LastFooter">
         <LastFooter/>
         </div>
        
         </div>
         </form>
    )
}

export default AddSell
