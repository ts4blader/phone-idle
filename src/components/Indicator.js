import React from 'react'
import { phones } from '../data/PhoneData'


const Indicator = (props) => {

    const next = () => {
        props.setCurrent( prev => {
            if(prev === phones.length)
                return 1;
            return prev + 1;
        });
    }
    const prev = () => {
        props.setCurrent( prev => {
            if(prev === 1)
                return phones.length;
            return prev - 1;
        });
    }

    return (
        <div className="indicator">
            <div className="controller">
                <img src="./icons/next.png" alt=">" className="next" onClick={next}/>
                <img src="./icons/prev.png" alt="<" className="prev" onClick={prev}/>
            </div>
            <div className="dot-grp">
                {phones.map(phone =>
                    <div className={props.current === phone.id ? 'dot active' : 'dot'} onClick={() => props.setCurrent(phone.id)}></div>
                )}
            </div>
        </div>
    )
}


export default Indicator