import React from 'react'
import  "./uploadPic.css";
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import {useState}from"react"
function UploadPic(image) {
    const [image, setImage] = useState([null])
    const fileUplaod = (e) =>{
        setImage(URL.createObjectURL(e.target.files[0]))
        
    } 
    console.log("check>>>>",image)
    return (
        <div className="Main_body_box">
        <div className="imgeBoxUP">
        <AddAPhotoOutlinedIcon className="AddImge"/>
        <input  value={image} onChange={fileUplaod }
        type="file" id="img" name="img" accept="image/*" className="addPhoto"/>
        </div>
        </div>
    )
}

export default UploadPic
