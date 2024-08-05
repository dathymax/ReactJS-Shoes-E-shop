import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts"
import HomeRouters from "./routers/home"
import ProductRouters from "./routers/product"

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/*" element={<HomeRouters />} />
                <Route path="/products/*" element={<ProductRouters />} />
            </Route>
        </Routes>
    )
}

export default App
