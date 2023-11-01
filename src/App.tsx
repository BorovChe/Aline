import { Routes, Route } from "react-router-dom";
import Layout from "pages/Layout/Layout";
import Home from "pages/Home/Home";
import Favorites from "pages/Favorites/Favorites";
import Profile from "pages/Profile/Profile";
import Cart from "pages/Cart/Cart";


const App = () => {
  return (
    <div>
         <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="cart" element={<Cart />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;