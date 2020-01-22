//jshint esversion:6

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

import AOS from 'aos';
import "aos/dist/aos.css"

import asyncComponent from './AsyncComponen';
import Nav from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/pages/NotFound";

const Home = asyncComponent(() =>
    import('./Components/pages/Home/Body').then(module => module.default))

const Form = asyncComponent(() =>
    import('./Components/pages/Form/Form').then(module => module.default))

const ShowCase = asyncComponent(() =>
    import('./Components/pages/Photography/ShowCase').then(module => module.default))

const Projects = asyncComponent(() =>
    import('./Components/pages/Projects/Projects').then(module => module.default))

function App() {

    AOS.init();

    return (
        <BrowserRouter>
            <div className="w-full text-white">
                <Nav />
                <ScrollMemory />
                <div className="min-h-screen text-xl leading-relaxed">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Form" component={Form} />
                        <Route exact path="/Gallery" component={ShowCase} />
                        <Route exact path="/Projects" component={Projects} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
                <div className="bottomTheme text-lg">
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;