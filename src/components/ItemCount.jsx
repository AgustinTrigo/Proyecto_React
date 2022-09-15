import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({var1, var2, funcion, var4}) =>{
    const [count, setCount] = useState(var2);
    
    return(
        <div>
            <div className="contador"> 
                <input type="button" value="-" onClick={()=>{if(count > var2){setCount(count - 1)}}}/>
                <h4>{count}</h4>
                <input type="button" value="+" onClick={()=>{if(count < var1){setCount(count + 1)}}}/>
            </div>
            <Link to="/cart"><input className="card__btn" type="button" value="add to cart" onClick={()=> funcion(count, var4)}/></Link>
        </div>
    )
}

export default ItemCount;