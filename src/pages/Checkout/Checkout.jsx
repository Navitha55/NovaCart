import {

    useEffect,

    useReducer,

    useRef,

    useState

} from "react";

import {

    useCart

} from "../../hooks/useCart";

import styles
    from "./Checkout.module.css";


const initialState = {

    name: "",

    address: "",

    city: "",

    payment: ""

};


const formReducer =
    (state, action) => {


        switch (
        action.type
        ) {


            case "UPDATE_FIELD":

                return {

                    ...state,

                    [action.field]:
                        action.value

                };


            case "RESET":

                return initialState;


            default:

                return state;

        }

    };


const Checkout = () => {


    const [

        form,

        dispatch

    ] = useReducer(

        formReducer,

        initialState

    );


    const [

        success,

        setSuccess

    ] = useState(false);


    const nameRef =
        useRef(null);


    const {

        totalPrice,

        clearCart

    } = useCart();


    useEffect(() => {

        nameRef.current?.focus();

    }, []);


    const handleChange =
        (event) => {


            dispatch({

                type:
                    "UPDATE_FIELD",

                field:
                    event.target.name,

                value:
                    event.target.value

            });

        };


    const handleSubmit =
        (event) => {

            event.preventDefault();


            console.log({

                order: form,

                totalPrice

            });


            clearCart();


            dispatch({
                type: "RESET"
            });


            setSuccess(true);

        };


    if (success) {

        return (

            <div
                className={styles.success}
            >

                <h1>
                    Order Placed Successfully!
                </h1>

            </div>

        );

    }


    return (

        <div
            className={styles.container}
        >

            <h1>
                Checkout
            </h1>


            <h2>

                Total:
                ₹{
                    totalPrice.toFixed(2)
                }

            </h2>


            <form
                onSubmit={handleSubmit}
            >

                <input

                    ref={nameRef}

                    name="name"

                    placeholder="Full Name"

                    value={form.name}

                    onChange={handleChange}

                />


                <input

                    name="address"

                    placeholder="Address"

                    value={form.address}

                    onChange={handleChange}

                />


                <input

                    name="city"

                    placeholder="City"

                    value={form.city}

                    onChange={handleChange}

                />


                <select

                    name="payment"

                    value={form.payment}

                    onChange={handleChange}

                >

                    <option value="">

                        Select Payment

                    </option>

                    <option>

                        Cash on Delivery

                    </option>

                    <option>

                        Card

                    </option>

                </select>


                <button>

                    Place Order

                </button>

            </form>

        </div>

    );

};


export default Checkout;
