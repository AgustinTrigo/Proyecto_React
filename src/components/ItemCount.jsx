import React, { useState } from "react";

const ItemCount = ({var1, var2}) =>{
    const [numero, btn] = useState(var2);

    return(
        <div>
            <div className="contador"> 
                <input type="button" value="-" onClick={()=>{if(numero > var2){btn(numero - 1)}}}/>
                <h4>{numero}</h4>
                <input type="button" value="+" onClick={()=>{if(numero < var1){btn(numero + 1)}}}/>
            </div>
        </div>
    )
}

export default ItemCount;