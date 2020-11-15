import React from 'react'
import "./header.css";
import {useEffect,useState}from "react"
import Modal from "./Model"
import {useSelector,useDispatch} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core'
import {selectUser } from "./Featur/userSlice"
import {auth,provider }from "./Firebase";
import {login,logOut}from "./Featur/userSlice";

function Header() {
    const [modal,setModal] = useState(false)
    const signIn =() =>{
          
   
        
        auth.signInWithPopup(provider)
        .catch((error) =>alert(error.message

        ));
    }
   
    const dispatch = useDispatch() 
    const user =  useSelector(selectUser); 
    
    console.log(user)
    
   useEffect(() =>{
       auth.onAuthStateChanged((authUser)=>{
      
           if(authUser){

            dispatch(
                login({
               uid: authUser.uid,
               photo: authUser.photoURL,
               email: authUser.email,
               displayName: authUser.displayName,
           })
          
           );
         console.log(user)
           }else{
            dispatch(logOut())
           }
       });
   },[dispatch]);
    
   

    return (
        <div className="Header__body">
      
            
        <div className="Logo__body">
      
            <Link to="/">
            <img src="https://www.romaniajournal.ro/wp-content/uploads/2020/04/OLX_Rebranding.png"
            className="logo" alt=""  />
            </Link>
            <input type="text" className="searchInput"/>
            <SearchIcon className ="SearchIcone"/>
            <KeyboardArrowDownIcon className="Keyboard__icon"/>
            
            
            </div>

            <div className="second__input">
            <input type="text" className="Second__searchInput"
             placeholder="Find Cars Mobile Phones and more "/>
            <SearchIcon className ="Second__SearchIcone"/>
            </div>
           
           
          
            

                
            <div className = "account__info">
          
            {user ?(  
                <>   
         <ChatBubbleIcon  className ="ChatBpx"/>
           <NotificationsNoneIcon className ="Notifaction"/>
           <div className="box">
           <Avatar onClick={() =>(auth.signOut())} src={user.photo} className="Profile_pic" />
        <KeyboardArrowDownIcon 
        className="Keyboard__iconUser"/>
     
           </div>
          
           </> 
           ): (
            <>
            
            <Link className="Link_color"><h4 onClick={signIn}>Login</h4></Link>
            
            </>
           )} 
           <Link to="/AddSell"
            className="Link_color">
            <img src="/iamge/sellButton.png" className="olx_button"/>
            </Link>  
            
           
          
         
            </div>
         
            
        </div>
    
    )
}


export default Header
