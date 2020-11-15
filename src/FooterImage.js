import React from 'react'
import "./footerImage.css";

function FooterImage() {
    return (
        <div className="FooterImage">
        <div className="mobileImage">
        <img src="https://statics.olx.com.pk/external/base/img/phone-app.webp"
         alt="" className="olxImage"/>
         <div className="text">
         <h1>TRY THE OLX APP</h1>
         <h3>Buy, sell and find just about anything using <br/>the app on your mobile.</h3>
         </div>
        </div>
        
            <div className="getApp">
            <div className="line"></div>
            <h3 className="geth3">GET YOUR APP TODAY</h3>
            <div className="Appicon">
            <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" 
            alt="" className="appleicon"
            />

            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" 
            alt="" className="androied"
            />
            </div>
            
            </div>
        </div>
    )
}

export default FooterImage
