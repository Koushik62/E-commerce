import React from "react";
import './DescriptionBox.css'
const DescriptionBox =() =>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
             <div className="description-nav-box">Description</div>
             <div className="description-nav-box fade">Reviews(122)</div>
            </div>
            <div className="decriptionbox-description">
                <p>An e-commerce website is an online selling platform that facilitates
                    buying or selling of services or products over the international servers 
                    as a virtual marketplace where busisnesses and individuals showcase their 
                    products and intereact with customers and conduct transactions without need for 
                    a physical presence. E-commerce websites have gained immense populaity due to their convinient accesibility
                    and global reach they offer </p>
                <p>E-commerce Website typically display the products or services along with the detailed descriptions,images,prics,and any avaliable variations(e.g. sizes,colors). Each product usually has 
                its own dedicated page with relavent information</p>
            </div>
        </div>
    )
}

export default DescriptionBox