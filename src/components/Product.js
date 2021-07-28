import React, {useState} from 'react'
import Card from './Card'
import {laptops} from '../data/LaptopData'
import {phones} from '../data/PhoneData'

const smartphoneData = phones
const laptopData = laptops

const Product = () => {


    return (
        <section id="product" className="product">
            <h2 className="title" data-aos="fade-up">
                Our Product
            </h2>
            <div className="card-panel">
                <h3 className="device smartphone" data-aos="fade-down">Smartphone</h3>
                <div className="card-grp" data-aos="zoom-out">
                    {smartphoneData.map( product =>
                            <Card product={product}/>
                        )}
                </div>
            </div>
            <div className="card-panel">
            <h3 className="device laptop" data-aos="fade-down">Laptop</h3>
                <div className="card-grp" data-aos="zoom-out">
                        {laptopData.map( product =>
                                <Card product={product}/>
                            )}
                    </div>
            </div>
        </section>
    )
}


export default Product
