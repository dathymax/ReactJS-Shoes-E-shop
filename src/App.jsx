import { Route, Routes } from "react-router-dom"
import RootLayout from "./layouts"
import HomePage from "./pages/home"

function App() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
