import React, {useState} from 'react'

var key = 0;

const ColorMap = (props) => {

    const [currentColor, setCurrentColor] = useState(props.colors[0]);

    const initColor = (color) => {
        return color === currentColor ? `color__item active ${color}` 
              : `color__item ${color}`;
    }


    return (
        <div className="color-map" data-aos="fade-right">
            {props.colors.map((color) => (
              <div key={++key} className={initColor(color)} onClick={() => setCurrentColor(color)}></div>
            ))}
          </div>
    )
}

export default ColorMap