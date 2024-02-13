import { Outlet } from "react-router-dom";
import Header from "modules/Header/Header";
import Footer from "components/Footer/Footer";
const Layout = () => {
    return ( <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div> );
}

export default Layout;