import {

    Link

} from "react-router-dom";

import styles from "./ProductCard.module.css";


const ProductCard = ({

    product,

    onAddToCart

}) => {


    return (

        <div
            className={styles.card}
        >

            <img

                src={product.image}

                alt={product.title}

                className={styles.image}

            />


            <h3
                className={styles.title}
            >

                {product.title}

            </h3>


            <p
                className={styles.price}
            >

                ₹{product.price}

            </p>


            <div
                className={styles.actions}
            >

                <Link
                    to={`/product/${product.id}`}
                >

                    View Details

                </Link>


                <button
                    onClick={() =>
                        onAddToCart(product)
                    }
                >

                    Add to Cart

                </button>

            </div>

        </div>

    );

};


export default ProductCard;