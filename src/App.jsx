
import { HomePgae } from "./pages/HomePgae";
import Sidebar from "./components/Sidebar";
import Header from "./components/sections/Header";
import {
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/sections/Footer";
import { useLocation} from "react-router-dom"
import PostInstagram from "./components/sections/PostInstagram";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ui/ScrollToTop";
import Blog from "./pages/Blog";
import Request from "./pages/Request";
import Storage from "./pages/Storage";
import SinglePost from "./pages/SinglePost"
import './App.css';
import { useContext } from "react";
import { ThemeContext } from "./context";
import NotFoundPage from "./pages/NotFoundPage";
function App() {
  const location =useLocation()
  const locationPathName=location.pathname
  const theme=useContext(ThemeContext)
  const darkeMode=theme.state.darkMode
  return (
    <div className={darkeMode ?  "darkMode" : "lightMode" }> 
    <ScrollToTop />
    <Header />
    <Sidebar isHomePage={locationPathName==="/achibest-express/" ? true : false} />
      <Routes>
        <Route exact path="/achibest-express/" element={<HomePgae/>} />
        <Route  path="/achibest-express/about" element={<About/>} />
        <Route  path="/achibest-express/products" element={<Products/>} />
        <Route  path="/achibest-express/contact" element={<Contact/>} />
        <Route  path="/achibest-express/blog" element={<Blog/>} />
        <Route  path="/achibest-express/posts/:postname" element={<SinglePost/>} />
        <Route  path="/achibest-express/request" element={<Request/>} />
        <Route  path="/achibest-express/storage" element={<Storage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <PostInstagram/>
      <Footer/>
    </div>
  );
}

export default App;
