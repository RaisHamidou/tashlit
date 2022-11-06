import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../styles/assets/img/logo/dzair.svg'
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBar from '../components/SearchBar'


const Header = () => {
    const [displayState, setDisplayState] = useState('');
    const [iconState, setIconState] = useState(true)
    /*  const iconDisplay = { display: iconState } */
    let display = { display: displayState }
    /* const hide = () => {
        setDisplayState('flex')
        setIconState(false)

    } */

    return (
        <div className="Header">
            <header>
                <div className="openMenu" onClick={() => {
                    setDisplayState('flex')
                    setIconState(false)
                }}>
                    {iconState ? <i><FaBars /> </i> : null}
                </div>
                <div className="closeMenu" onClick={() => {
                    setDisplayState('none')
                    setIconState(true)

                }}>
                    {iconState ? null : <i><FaTimes /></i>}

                </div>

                <div className="logo">
                    <Link href="/">
                        <Image src={logo} alt="logo" />
                    </Link>

                </div>

            </header>
            <div className="header-clone" />
            <div className="nav-menu" style={display} >
                <nav >
                    <div className="mainMenu"  >
                        <Link href='/' >Accueil</Link>
                        <Link href='/histoire' >Histoire</Link>
                        <Link href='/culture' >Culture</Link>
                        <Link href='/timeline' >Timeline</Link>
                        <Link href='/contact' >Contact</Link>
                        <Link href='/a-propos' >A propos</Link>
                    </div>
                    <SearchBar />
                </nav>
            </div>
        </div >
    );
}
export default Header;
