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
            cart[cart.indexOf(producto)].subtotal += cantidad * item.precio;
            //"actualiza" el estado.
            setCart([...cart]);
        }else{
            //guarda el producto en el estado.
            setCart([...cart, {...item, cantidad, subtotal: (item.precio * cantidad)}]);
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

    
    const sumarTotal = () =>{
        const copia = [...cart];
        let total = 0;
        copia.forEach((producto) =>{
            total += producto.subtotal;
        })
        return total;
    }
    
    
    const cantidadTotal = () => {
        const copia = [...cart];
        let qty = 0;
        copia.forEach((producto) =>{
            qty = qty + producto.cantidad;
        })
        return qty;
    }

    const removeItem = (item) =>{
        const productosFiltrados = cart.filter(e => e.id !== item.id);
        return setCart(productosFiltrados);
    }

    return(
        <CartContext.Provider value={{addToCart, isInCart, clear, removeItem, cart, cantidadTotal, sumarTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;