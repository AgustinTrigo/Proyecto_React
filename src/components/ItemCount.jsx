import React, { useState } from "react";

const ItemCount = ({var1, var2}) =>{
    const [count, setCount] = useState(var2);

    return(
        <div>
            <div className="contador"> 
                <input type="button" value="-" onClick={()=>{if(count > var2){setCount(count - 1)}}}/>
                <h4>{count}</h4>
                <input type="button" value="+" onClick={()=>{if(count < var1){setCount(count + 1)}}}/>
            </div>
        </div>
    )
}

export default ItemCount;