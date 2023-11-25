import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import NavBar from "../pages/NavBar";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar />
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;