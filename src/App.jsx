import { BrowserRouter } from "react-router-dom"
import Login from "./pages/user/Login"
import AppRoutes from "./routes/AppRoutes"

export default function App () {
    return(
        <BrowserRouter >
            <AppRoutes/>
        </BrowserRouter>
    )
}