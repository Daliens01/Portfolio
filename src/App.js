import React, { useState } from 'react';
import './App.css'; // Importa un archivo CSS si lo necesitas
import { Routes, Route, BrowserRouter as MainRouter } from 'react-router-dom';

import {Home} from "./Routes/Home.jsx"
import Nav from './Routes/Nav.jsx';
import AboutMe from './Routes/AboutMe.jsx';
import NotFound from "./Routes/NotFound.jsx"
import Projects from './Routes/projects.jsx';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <MainRouter>
            <Nav/>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                    <Route path='/about' element={<AboutMe/>}/>
                     <Route path='/projects' element={<Projects/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </MainRouter>
        </>
    );
}

export default App;