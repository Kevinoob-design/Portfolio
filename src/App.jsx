//jshint esversion:6

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Components/Navigation/Navigation";

import Home from "./Components/pages/Home/Body";
import Form from "./Components/pages/Form/Form";

import Footer from "./Components/Footer/Footer";

import Modal from 'react-modal';

function App(){

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            "background-color": 'rgba(0, 0, 0, 0.75)',
            overflow: 'hidden'
        }
    };

    Modal.setAppElement("#root");

    const [modalIsOpen, setModalOpen] = useState(false);

    function toggleModal() {
        setModalOpen(!modalIsOpen);
    }

    return (
    <BrowserRouter>
        <div className="w-full h-screen md:px-10 text-white">
            <Nav />
            <Route exact path="/" component={Home} />
            <Route path="/Form" component={Form} />
            <Footer />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Example Modal">
                
                <Form/>
            </Modal>
        </div>
    </BrowserRouter>);
}
export default App;