import React from 'react'
import "./SecondFooter.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

function SecondFooter() {
    return (
        <div className="SecondFooter">
         
        <div className="PopularCat">
        <h4>
        POPULAR CATEGORIES
        </h4>
        <ul>
        <li>Cars</li>
         <li>Flats for rent</li>
         <li>Jobs</li>
         <li>Mobile Phones</li>
        </ul>
        </div>

        <div className="TRENDING__SEARCHES">
        <h4>
        TRENDING SEARCHES
        </h4>
        <ul>   
         <li>Bikes</li>
         <li>  Watches</li>
         <li>Books</li>
         <li>Dogs</li>
        </ul>
        </div>
            
        
        <div className="ABOUT__USS">
        <h4>
        ABOUT US
        </h4>
        <ul>   
         <li>About OLX Group</li>
         <li>  OLX Blog</li>
         <li>Contact Us</li>
         <li>OLX for Businesses</li>
        </ul>
        </div>
       

        <div className="OLX">
        <h4>
        OLX
        </h4>
        <ul>   
         <li>Help</li>
         <li> Sitemap</li>
         <li>Legal & Privacy information</li>
        </ul>
        </div>
        
        <div className="Fallow us">
        <h4>
        FOLLOW US
        </h4>
        <div className="socialicon">
        <InstagramIcon />
        <TwitterIcon/>
        <FacebookIcon/>
        <YouTubeIcon/>
        <div className="apple_box">
        <img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp" 
            alt="" className="appleicon1"
            />
            <img src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp" 
            alt="" className="androied1" 
            />
            </div>
        </div>
        </div>
        

        </div>
    )
}

export default SecondFooter
