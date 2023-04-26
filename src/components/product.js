import React from "react";
import productItems from "./productItem";
import Itemcard from "./itemcard";
import data from "./productItem";
import { Container } from "react-bootstrap";

const Productlist = () =>{

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.productData.map((item, index)=>{
                    return(
                        <Itemcard 
                        img={item.imgUrl} 
                        title={item.pname} 
                        price={item.price} 
                        item={item} 
                        key={index}
                        />                
                    )
                })}
                
            </div>
       </section>
    );

    
}

export default Productlist;