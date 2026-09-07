import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import { useAuth } from "./hooks/useAuth";

const ProductDetail = lazy(() => import("./pages/ProductDetail/ProductDetail"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};


function App() {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={
                        <ErrorBoundary>
                            <ProductDetail />
                        </ErrorBoundary>
                    } />
                    <Route path="/checkout" element={
                        <ProtectedRoute>
                            <ErrorBoundary>
                                <Checkout />
                            </ErrorBoundary>
                        </ProtectedRoute>
                    } />
                </Routes>
            </Suspense>
        </>
    );
}


export default App;