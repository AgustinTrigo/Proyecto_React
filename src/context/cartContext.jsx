import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) =>{
        if(isInCart(item.id)){
            //Guarda el elemento especifico (el que ya se encuentra en cart) en la variable producto
            let producto = cart.find(e => e.id === item.id);
            //Da la referencia a indexOf() del elemento para sumar la cantidad
            cart[cart.indexOf(producto)].cantidad += cantidad;
            //"actualiza" el estado.
            setCart([...cart]);
        }else{
            //guarda el producto en el estado.
            setCart([...cart, {...item, cantidad}]);
        }
    }

    const isInCart = (id) => {
        //Busca si el id que se le da por parametro se encuentra en el array, devuelve true o false.
        return cart.some(item => item.id === id);
    }

    const clear = () => {
        //Vacia el estado.
        setCart([]);
    }

    /*
    const cartTotal = () => {
        let total = 0;
        let cantidadTotal = cart.reduce((total, item) => total+=item.cantidad, 0);
        let precioTotal = cart.reduce((total, item) => total+=item.precio, 0);
        return total = cantidadTotal * precioTotal;
    }*/

    //Funcion para remover un item seleccionado, como prueba agregue el evento en el H4 con el nombre del producto en ItemDetail y funciona correctamente.
    const removeItem = (item) =>{
        let producto = cart.find(e => e.id === item.id);
        return console.log(cart.splice(cart.indexOf(producto), 1))
    }

    return(
        <CartContext.Provider value={{addToCart, isInCart, clear, removeItem, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;