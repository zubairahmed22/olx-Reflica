import React from 'react'
import "./productcomp.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function ProductComp({url,price,discription}) {
    return (
        <div className="Product__body">
            <div className ="image__body">
            <div className="Featured">
            <button className="Featured__BTN">FEATURED</button>
            <img src={url} 
            alt="" className="product__img"/>
            <FavoriteBorderIcon className="Favorite"/>
            </div>
            </div>
            <div className="Product__price">
            <strong>Rs</strong>
            <strong>{price}</strong>
            <p> 
            {discription}
            </p>
            </div>
        </div>
    )
}

export default ProductComp
