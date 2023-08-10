import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='relative h-[100vh] w-[100%]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='absolute md:bottom-0 border-3 w-[100%] border-red-500 border ' >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;