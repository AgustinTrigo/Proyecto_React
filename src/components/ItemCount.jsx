import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, valorInicial, addCart}) =>{
    const [count, setCount] = useState(valorInicial);
    const [added, setAdded] = useState(false);
    
    return(
        <div>
            <div className="contador"> 
                <input type="button" value="-" onClick={()=>{if(count > valorInicial){setCount(count - 1)}}}/>
                <h4>{count}</h4>
                <input type="button" value="+" onClick={()=>{if(count < stock){setCount(count + 1)}}}/>
            </div>
            {!added ? 
            <input className="card__btn" type="button" value="add to cart" onClick={()=> {addCart(count); setAdded(true)}}/> 
            : 
            <Link to="/cart"><input className="card__btn added" type="button" value="ir al carrito"/></Link>
            }
            {!added ? "" : <Link to="/"><h6>seguir comprando</h6></Link>}
        </div>
    )
}

export default ItemCount;