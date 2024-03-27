import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { ToastContainer } from "react-toastify";



const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Header></Header>
            </div>
               

                <div className="min-h-[calc(100vh-68px)]">
                <Outlet></Outlet>
                <ToastContainer />
                
            </div>

            
            
        </div>
    );
};

export default MainLayout;