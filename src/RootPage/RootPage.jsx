import { Helmet } from "react-helmet"
import { Outlet } from "react-router-dom"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"

const RootPage = () => {
    return (
        <div className="font-inter">
            <Helmet><title>RESIDENTIAL REAL ESTATE</title></Helmet>

            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default RootPage