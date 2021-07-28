import React, {useState} from 'react'


const Dropdown = (props) => {

    const [current, setCurrent] = useState(props.itemList[0]);
    const [open, setOpen] = useState(false);

    const drop = () => {
        setOpen(true);
    }
    const close = () => {
        setOpen(false);
    }
    const selected = (option) => {
        setCurrent(option);
        close();
    }

    const style = {
        display: 'block'
    }

    return (
        <div className="dropdown" onMouseLeave={close} data-aos="fade-left">
            <div className="current">{current}</div>
            <div className="items" style={open ? style : {}}>
                {props.itemList.map( item => (
                    <div className="item" onClick={() => selected(item)}>{item}</div>
                ))}
            </div>
            <div className="caret"></div>
            <div className="dropdown__trigger" onClick={drop}></div>
        </div>
    )
}

export default Dropdown