import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts"
import HomeRouters from "./routers/home"
import SearchRouters from "./routers/search"
import ProductRouters from "./routers/product"

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/*" element={<HomeRouters />} />
                <Route path="/search/*" element={<SearchRouters />} />
                <Route path="/products/*" element={<ProductRouters />} />
            </Route>
        </Routes>
    )
}

export default App
