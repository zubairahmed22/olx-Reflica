// import {useState,useEffect}from "react";
// import  {storage,db } from "./Firebase"
// import { useDispatch}from "react-redux";
// import {setImage}from ".//Featur/appSlice"
// const useStorage = (image) =>{
//     const [progress, setProgress] =useState(0);
//     const [error,setError] = useState(null);
//    const [url, setUrl] = useState(null);
//     const dispatch = useDispatch();


    
   
    // useEffect(() =>{
      
      
    //   // const storageRef = storage.ref(image.name)
    //   // // const dbRef = db.collection('images');

    //   // // storageRef.put(image).on('state_changed',(snap) =>{
    //   // //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
    //   // //     setProgress(percentage);
    //   // // }, (err) =>{
    //   // //     setError(err)
    //   // // }, async () =>{
    //   // //   const url = await storageRef.getDownloadURL();
    //   // //   // dbRef.add({url,});
    //   // //   setUrl(url)
        
           
    
  
        
        
    //   })
     

    // },[image])
  
   
   
//     return{progress,url,error}
// }

// export default useStorage;