import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";
import Footer from "../Pages/Footer";

const Root = () => {
    return (
        <div>
             <Nav></Nav>
            <Outlet></Outlet>
            <div className="mt-24">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;