// import React from 'react'
// import {db} from "./Firebase"
// import { useDispatch}from "react-redux";
// import {useState,useEffect}from "react";
// import {setImage}from "./Featur/appSlice"


// function useImageCollection(collection) {
//   const [docs,setDocs]= useState([])
//   const dispatch = useDispatch();
//       useEffect(()=>{
//     // const unsub = db.collection(collection)
//     //  .onSnapshot((snap) =>{
  
     
//     //   setDocs(snap.docs.data())
     
//     const unsub = db.collection(collection)
//     .onSnapshot((snapshot) =>{
//       let documents = [];
//       snapshot.forEach(doc =>{
//         documents.push({...doc.data()})
//         dispatch(setImage({
//           title:doc.title,
//           price:doc.price,
//           discription:doc.discription
//       }))
     
//       })
//       setDocs(documents)
     
     
//     })
      
   
//      return () => unsub();
//   },[collection])
//  return{docs};
// }
// export default useImageCollection
