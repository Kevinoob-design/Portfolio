//jshint esversion:6

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

import Rellax from "rellax";
import AOS from 'aos';
import "aos/dist/aos.css"

import asyncComponent from './AsyncComponen';
import Nav from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/pages/NotFound";

// import Home from "./Components/pages/Home/Body";
// import Form from "./Components/pages/Form/Form";
// import ShowCase from "./Components/pages/Photography/ShowCase";

const Home = asyncComponent(() =>
    import('./Components/pages/Home/Body').then(module => module.default)
)

const Form = asyncComponent(() =>
    import('./Components/pages/Form/Form').then(module => module.default)
)

const ShowCase = asyncComponent(() =>
    import('./Components/pages/Photography/ShowCase').then(module => module.default)
)

const Projects = asyncComponent(() =>
    import('./Components/pages/Projects/Projects').then(module => module.default)
)

function App() {

    AOS.init();
    new Rellax('.rellax', {
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
    });

    return (
        <BrowserRouter>
            <div className="w-full text-white">
                <Nav />
                <ScrollMemory />
                <div className="min-h-screen">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Form" component={Form} />
                        <Route exact path="/Gallery" component={ShowCase} />
                        <Route exact path="/Projects" component={Projects} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <div className="bottomTheme">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;