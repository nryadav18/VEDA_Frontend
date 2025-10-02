import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import './styles.scss';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuActive, setMenuActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };

    const handleDropdown = (index, hasSubmenu) => {
        setActiveIndex(index);
        if (!hasSubmenu) {
            setMenuActive(false);
        }
        else{
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    const handleSubmenuClick = () => {
        // console.log("hello" , menuActive);
        // setMenuActive(!menuActive);
        // console.log("hello" , menuActive);
        handleMenuActive();
    };

    return (
        <>
            <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
                <div className="container big">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__body">
                                <div className="header__logo">
                                    <Link to="/veda2024">
                                        <p>VEDA'2k24</p>
                                    </Link>
                                </div>

                                <div className="header__right">
                                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                        <ul id="menu-primary-menu" className="menu">
                                            {
                                                menus.map((data, idx) => (
                                                    <li key={idx}
                                                        onClick={() => handleDropdown(idx, data.namesub ? true : false)}
                                                        className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`}>
                                                        <Link to={data.links}>{data.name}</Link>
                                                        {
                                                            data.namesub &&
                                                            <ul className="sub-menu">
                                                                {
                                                                    data.namesub.map((submenu) => (
                                                                        <li key={submenu.id} className="menu-item" onClick={handleSubmenuClick}>
                                                                            <NavLink to={submenu.links}>{submenu.sub}</NavLink>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        }
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                                </div>

                                <div className="header__logo hi">
                                    <Link to="/veda2024">
                                        <p>VEDA'2k24</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="marginSpace"></div>
        </>
    );
};

export default Header;
