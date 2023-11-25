import { Link } from "react-router-dom";
import logo from '../assets/Testy food logo.jpeg'

const NavBar = () => {

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link>All Food Items</Link></li>
        <li><Link>Blog</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 mb-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {/* For small devices */}

                        {navItems}

                    </ul>
                </div>
                <Link to='/'>
                    <img className="w-32" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {/* For big devices */}

                    {navItems}

                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn">Button</button>
            </div>
        </div>
    );
};

export default NavBar;