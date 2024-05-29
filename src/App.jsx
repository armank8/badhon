import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import BottomBar from "./pages/Shared/BottomBar";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import TopBar from "./pages/Shared/TopBar";
import SingleBlog from "./pages/Shared/SingleBlog";


function App() {
  
  return (
    <div >
      <TopBar></TopBar>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:name" element={<SingleBlog></SingleBlog>}></Route>
      </Routes>

      <Footer></Footer>
      <BottomBar></BottomBar>
    </div>
  );
}

export default App;
