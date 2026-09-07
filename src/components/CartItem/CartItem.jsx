import styles
    from "./CartItem.module.css";


const CartItem = ({

    item,

    onIncrease,

    onDecrease,

    onRemove

}) => {


    return (

        <div
            className={styles.item}
        >

            <img

                src={item.image}

                alt={item.title}

            />


            <div
                className={styles.info}
            >

                <h3>
                    {item.title}
                </h3>


                <p>
                    ₹{item.price}
                </p>

            </div>


            <div
                className={styles.controls}
            >

                <button
                    onClick={() =>
                        onDecrease(item.id)
                    }
                >

                    −

                </button>


                <span>
                    {item.quantity}
                </span>


                <button
                    onClick={() =>
                        onIncrease(item.id)
                    }
                >

                    +

                </button>

            </div>


            <p>

                ₹{
                    (
                        item.price *
                        item.quantity
                    ).toFixed(2)
                }

            </p>


            <button
                className={styles.remove}
                onClick={() =>
                    onRemove(item.id)
                }
            >

                Remove

            </button>

        </div>

    );

};


export default CartItem;