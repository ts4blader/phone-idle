import React, {useState} from 'react'
import Slide from '../components/Slide'
import Indicator from '../components/Indicator'
import { phones } from '../data/PhoneData'


const Carousel = () => { 
    
    const [current, setCurrent] = useState(1);

    
    const style = {
        width : phones.length * 100 + 'vw',
        right : (current - 1) * 100 + 'vw'
    }


    return ( 
        <section className="carousel">
            <div className="gray-overlay"></div>
            <div className="slides" style={style}>
                {phones.map( slide => 
                    <Slide slideContent={slide} current={current} />
                )}
            </div>
            <Indicator current={current} setCurrent={setCurrent}/>  
        </section>
        );
}
 
export default Carousel;