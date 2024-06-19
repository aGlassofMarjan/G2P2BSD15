import { createBrowserRouter} from "react-router-dom"
import LandingPage from "../views/LandingPage"
import BaseLayout from "../views/BaseLayout"
import LoginPage from "../views/LoginPage"
import MainPage from "../views/MainPage"
import RegisterPage from "../views/RegisterPage"

const url = 'http://localhost:5001'

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage url={url}></LoginPage>
    },
    {
        path: '/register',
        element: <RegisterPage url={url}></RegisterPage>
    },
    {
        element: <BaseLayout/>,
        children: [
            {
                path: "/home",
                element: <LandingPage url={url}></LandingPage>
            },
            {
                path: "/meet",
                element: <MainPage url={url}></MainPage>
            },
        ]
    }
])

export default router