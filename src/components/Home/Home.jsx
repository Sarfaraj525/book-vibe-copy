import React from 'react';
import Hero from '../Hero';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div>
            <div className=' items-center justify-center min-h-[calc(100vh-68px)'>
            <Hero></Hero>
        </div>
            <Books></Books>
        </div>
    );
};

export default Home;