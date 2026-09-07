import {

    useEffect,

    useState

} from "react";

import {

    useParams

} from "react-router-dom";

import api
    from "../../utils/api";

import Loader
    from "../../components/Loader/Loader";

import {

    useCart

} from "../../hooks/useCart";

import styles
    from "./ProductDetail.module.css";


const ProductDetail = () => {


    const {

        id

    } = useParams();


    const [

        product,

        setProduct

    ] = useState(null);


    const [

        loading,

        setLoading

    ] = useState(true);


    const {

        addToCart

    } = useCart();


    useEffect(() => {


        const fetchProduct =
            async () => {

                try {

                    const response =
                        await api.get(
                            `/products/${id}`
                        );


                    setProduct(
                        response.data
                    );

                } catch (error) {

                    throw new Error(
                        "Failed to load product."
                    );

                } finally {

                    setLoading(false);

                }

            };


        fetchProduct();


    }, [id]);


    if (loading) {

        return <Loader />;

    }


    if (!product) {

        return null;

    }


    return (

        <div
            className={styles.container}
        >

            <img

                src={product.image}

                alt={product.title}

            />


            <div>

                <h1>
                    {product.title}
                </h1>


                <p
                    className={styles.price}
                >

                    ₹{product.price}

                </p>


                <p>

                    {product.description}

                </p>


                <button
                    onClick={() =>
                        addToCart(product)
                    }
                >

                    Add to Cart

                </button>

            </div>

        </div>

    );

};


export default ProductDetail;