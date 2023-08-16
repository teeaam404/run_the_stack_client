import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='relative h-[100vh] w-[100%]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
            <Footer></Footer>
            
        </div>
    );
};

export default Main;