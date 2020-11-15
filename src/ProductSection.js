import React from 'react'
import "./productSection.css"
import { useDispatch}from "react-redux";
import ProductComp from "./ProductComp"
import {useSelector}from"react-redux"
import {useState,useEffect} from "react";
import {db } from "./Firebase"
import {setImage}from ".//Featur/appSlice"
import {useImage}from"./Featur/appSlice"






function ProductSection() {
    const imageSelector = useSelector(useImage);
    const dispatch = useDispatch();
    const [product, setProduct] = useState([])
    const [sendImage, setsendImage] = useState([])
  

    console.log(product)




    useEffect(() =>{
        
     
db.collection("products").onSnapshot(snapshot =>(
            setProduct(snapshot.docs.map(doc => doc.data()))
               
            
               
                
            ))
            
           
            
                
           
    },[]);
 
 
  
     

    return (
        <div className ="product__Section">
        
        {product.map(({title,disription,price,url} ) =>(
     
            <ProductComp
            title={title}
            discription={disription}
            price={price}
            image={url}
           />
        ) )}

        

       
            
         
        

        </div>
        
    )
}

export default ProductSection
