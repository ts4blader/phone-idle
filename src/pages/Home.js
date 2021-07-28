import React from 'react';
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import Services from "../components/Services";

const Home = () => {
    return (
        <div className="home" id="home">
            <Carousel />
            <Product />
            <Services />
        </div>
    )
}

export default Home