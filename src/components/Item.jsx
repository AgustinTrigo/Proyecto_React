import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, nombre, precio, img}) => {
    return (
        <div className="card">
            <div className="card__img">
            <Link to={"/producto/" + id}><img src={img} alt={nombre}/></Link>
            </div>
            <div className="card__text">
                <h4>{nombre}</h4>
                <h4>precio: $ {precio}</h4>
            </div>
            <div>
                <Link to={"/producto/" + id}><input type="button" value="ver detalle" className="card__btn"/></Link>
            </div>
        </div>
    )
}

export default Item;