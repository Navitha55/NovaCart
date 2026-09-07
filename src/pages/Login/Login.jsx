import {

    useEffect,

    useRef,

    useState

} from "react";

import {

    useNavigate

} from "react-router-dom";

import {

    useAuth

} from "../../hooks/useAuth";

import styles
    from "./Login.module.css";


const Login = () => {


    const [

        email,

        setEmail

    ] = useState("");


    const emailRef =
        useRef(null);


    const {

        login

    } = useAuth();


    const navigate =
        useNavigate();


    useEffect(() => {

        emailRef.current?.focus();

    }, []);


    const handleSubmit =
        (event) => {

            event.preventDefault();


            if (!email.trim()) {

                return;

            }


            login(email);


            navigate("/checkout");

        };


    return (

        <div
            className={styles.container}
        >

            <form
                onSubmit={handleSubmit}
            >

                <h1>
                    Login
                </h1>


                <input

                    ref={emailRef}

                    type="email"

                    placeholder="Enter email"

                    value={email}

                    onChange={(event) =>
                        setEmail(
                            event.target.value
                        )
                    }

                />


                <button>

                    Login

                </button>

            </form>

        </div>

    );

};


export default Login;