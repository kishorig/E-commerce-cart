import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    const { addItem } = useCart();
    return(
        <div className="col-lg-4 mx-0 mb-4 text-center">
            <div class="card overflow-hidden">
                <img class="card-img-top img-fluid" src={props.img} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <h4 class="card-text">${props.price}</h4>
                    <button class="btn-success prod button" 
                    onClick={() =>addItem(props.item)}>Add To Cart</button>
                </div>
                </div>
        </div>
    );
};

export default Itemcard;