import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts"
import HomeRouters from "./routers/home"
import ProductRouters from "./routers/product"
import CartRouters from "./routers/cart"
import CheckoutRouters from "./routers/checkout"

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/*" element={<HomeRouters />} />
                <Route path="/products/*" element={<ProductRouters />} />
                <Route path="/cart/*" element={<CartRouters />} />
                <Route path="/checkout/*" element={<CheckoutRouters />} />
            </Route>
        </Routes>
    )
}

export default App
