import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-[1180px] mx-auto">
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;