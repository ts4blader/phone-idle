import React, {useState} from 'react'


const contactIcons = [
    {alt: 'facebook', url: '../icons/facebook-logo.png'},
    {alt: 'twitter', url: '../icons/twitter.png'},
    {alt: 'gmail', url: '../icons/envelope.png'}
]

function Menu(){
   
    const [show, setShow] = useState(false);

    const closeMenu = () => {
        setShow(false);
    }
    const openMenu = () => {
        setShow(true);
    }


    return (
        <nav className="nav">
            <div className={show ? "side-menu show" : "side-menu"}>
                <div className="close-btn" onClick={closeMenu}>
                    <img src="../icons/add.png" alt="close" />
                </div>
                <ul className="menu">
                    <li><a href="#" className="active" onClick={closeMenu}>Home</a></li>
                    <li><a href="#product" onClick={closeMenu}>Product</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <ul className="contact">
                    {contactIcons.map(contact => (
                        <li>
                            <a href="#">
                                <img src={contact.url} alt={contact.alt} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="hamberger-btn" onClick={openMenu}>
                <img src="../icons/menu.png" alt="Menu" />
            </div>
        </nav>
    )
}

export default Menu
