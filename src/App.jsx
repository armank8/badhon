import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import TopBar from "./pages/Shared/TopBar";

function App() {
  return <div>
    <TopBar></TopBar>
    <Navbar></Navbar>
    <Home></Home>
  </div>;
}

export default App;
