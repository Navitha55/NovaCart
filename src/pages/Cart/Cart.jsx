import {

    Link

} from "react-router-dom";

import CartItem
    from "../../components/CartItem/CartItem";

import {

    useCart

} from "../../hooks/useCart";

import styles
    from "./Cart.module.css";


const Cart = () => {


    const {

        items,

        totalPrice,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart

    } = useCart();


    if (
        items.length === 0
    ) {

        return (

            <div
                className={styles.empty}
            >

                <h2>
                    Your cart is empty
                </h2>


                <Link to="/">
                    Continue Shopping
                </Link>

            </div>

        );

    }


    return (

        <div
            className={styles.container}
        >

            <h1>
                Shopping Cart
            </h1>


            {items.map(
                (item) => (

                    <CartItem

                        key={item.id}

                        item={item}

                        onIncrease={
                            increaseQuantity
                        }

                        onDecrease={
                            decreaseQuantity
                        }

                        onRemove={
                            removeFromCart
                        }

                    />

                )
            )}


            <div
                className={styles.summary}
            >

                <h2>

                    Total:
                    ₹{
                        totalPrice.toFixed(2)
                    }

                </h2>


                <div
                    className={styles.actions}
                >

                    <button
                        onClick={clearCart}
                    >

                        Clear Cart

                    </button>


                    <Link
                        to="/checkout"
                    >

                        Checkout

                    </Link>

                </div>

            </div>

        </div>

    );

};


export default Cart;