import { useDispatch, useSelector } from "react-redux";

import {

    addToCart,

    increaseQuantity,

    decreaseQuantity,

    removeFromCart,

    clearCart

} from "../redux/cartSlice";


export const useCart = () => {

    const dispatch = useDispatch();

    const items = useSelector(
        (state) => state.cart.items
    );


    const totalItems = items.reduce(

        (total, item) =>
            total + item.quantity,

        0

    );


    const totalPrice = items.reduce(

        (total, item) =>
            total + item.price * item.quantity,

        0

    );


    return {

        items,

        totalItems,

        totalPrice,


        addToCart: (product) =>
            dispatch(addToCart(product)),


        increaseQuantity: (id) =>
            dispatch(increaseQuantity(id)),


        decreaseQuantity: (id) =>
            dispatch(decreaseQuantity(id)),


        removeFromCart: (id) =>
            dispatch(removeFromCart(id)),


        clearCart: () =>
            dispatch(clearCart())

    };

};