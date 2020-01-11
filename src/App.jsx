//jshint esversion:6

import React from "react";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App(){

    return (
    <div className="w-full h-screen md:px-10 text-white">
        <Header />
        <Body />
        <Footer />
    </div>);
}
export default App;