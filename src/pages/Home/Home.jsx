import {

    useCallback,

    useEffect,

    useMemo,

    useState

} from "react";

import api from "../../utils/api";

import ProductCard
    from "../../components/ProductCard/ProductCard";

import Loader
    from "../../components/Loader/Loader";

import {

    useCart

} from "../../hooks/useCart";

import styles
    from "./Home.module.css";


const Home = () => {


    const [

        products,

        setProducts

    ] = useState([]);


    const [

        search,

        setSearch

    ] = useState("");


    const [

        loading,

        setLoading

    ] = useState(true);


    const [

        error,

        setError

    ] = useState("");


    const {

        addToCart

    } = useCart();


    useEffect(() => {


        const fetchProducts =
            async () => {

                try {

                    const response =
                        await api.get(
                            "/products"
                        );


                    setProducts(
                        response.data
                    );

                } catch (error) {

                    setError(
                        "Failed to load products."
                    );

                } finally {

                    setLoading(false);

                }

            };


        fetchProducts();


    }, []);


    const filteredProducts =
        useMemo(() => {

            return products.filter(
                (product) =>

                    product.title
                        .toLowerCase()
                        .includes(
                            search.toLowerCase()
                        )

            );

        }, [

            products,

            search

        ]);


    const handleAddToCart =
        useCallback(

            (product) => {

                addToCart(product);

            },

            [addToCart]

        );


    if (loading) {

        return <Loader />;

    }


    if (error) {

        return (

            <p>
                {error}
            </p>

        );

    }


    return (

        <div
            className={styles.container}
        >

            <h1>
                Explore Products
            </h1>


            <input

                className={styles.search}

                type="text"

                placeholder="Search products..."

                value={search}

                onChange={(event) =>
                    setSearch(
                        event.target.value
                    )
                }

            />


            <div
                className={styles.grid}
            >

                {filteredProducts.map(
                    (product) => (

                        <ProductCard

                            key={product.id}

                            product={product}

                            onAddToCart={
                                handleAddToCart
                            }

                        />

                    )
                )}

            </div>

        </div>

    );

};


export default Home;