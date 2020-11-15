import React from 'react'
import "./freshRecomnditon.css";
import {useState,useEffect} from "react"
import ProductComp from "./ProductComp"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useImageCollection from './useImageCollection';
import useStorage from './useStorage';
import {useImage} from "./Featur/appSlice"
import{useSelector}from "react-redux"
import { db } from './Firebase';




function FreshRecom() {
const [product,setProduct] = useState([])
console.log(product)
useEffect(()=>{
    db.collection('images').onSnapshot(snap=>(
        setProduct(snap.docs.map(doc => doc.data()))
    ))
      
    

    
    

},[])

    return (
        <div className="FreshRecom">
         <div className="h1Recom">
         <h3>Fresh recommendations</h3>
         </div>
         <div className="ProductRecom">

           {product.map((doc )=>(
            <div className="Product__body">
            <div className ="image__body">
            <div className="Featured">
            <button className="Featured__BTN">FEATURED</button>
            <img src={doc.url}
            alt="" className="product__img"/>
            <FavoriteBorderIcon className="Favorite"/>
            </div>
            </div>
            <div className="Product__price">
            <strong>Rs</strong>
            <strong>{new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(doc.price)}</strong>
            <p> 
            {doc.disription}
            </p>
            </div>
         
            
        </div>
            
         
           
        
        ))}

         </div>
         
            
        </div>
    )
}

export default FreshRecom
