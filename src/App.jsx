
import "./App.css";
import Footer from "./Component/Footer";
import Nav from "./Component/Nav";

import { Outlet } from "react-router";





function App() {


  

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
