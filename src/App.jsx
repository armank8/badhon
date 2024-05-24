import "./App.css";
import Home from "./pages/Home/Home";
import BottomBar from "./pages/Shared/BottomBar";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import TopBar from "./pages/Shared/TopBar";

function App() {
  return <div>
    <TopBar></TopBar>
    <Navbar></Navbar>
    <Home></Home>
    <Footer></Footer>
    <BottomBar></BottomBar>
  </div>;
}

export default App;
