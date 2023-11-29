import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import NavBar from "../pages/NavBar";
// import Banner from "../Home/Banner";
// import Foods from "../Home/Foods";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar />
                {/* <Banner /> */}
                <Outlet />
                {/* <Foods /> */}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Main;