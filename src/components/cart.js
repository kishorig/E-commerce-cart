import { useCart } from "react-use-cart";

const Cartlist = (props) =>{
    const { 
        isEmpty,
        totalNewItems,
        oldItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();
     if(isEmpty) 
        return <h2 className="text-center">Your Cart is empty</h2> 

    return(
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h4>Cart ({totalNewItems}) Total Items:({totalItems})</h4>
                    <table>
                        {props.map((item, index)=>{
                            <tr key={index}>
                                <td>
                                    <img src={item.img}/>
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Cartlist;