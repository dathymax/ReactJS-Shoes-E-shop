import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts"
import HomePage from "./pages/home"
import HomeRouters from "./routers/home"

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/*" element={<HomeRouters />} />
            </Route>
        </Routes>
    )
}

export default App
