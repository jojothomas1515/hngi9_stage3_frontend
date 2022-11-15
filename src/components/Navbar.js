import React, {useRef, useState} from "react";
import "../styles/components/Navbar.css"
import {Logosvg} from "./logosvg";

import {Link} from "react-router-dom";
import WalletModal from "./WalletModal";

export const Navbar = () => {
    const navRef = useRef()
    const [modal, setModal] = useState(false)

    const closeMenu = (e) => {
        navRef.current.checked = false
    }

    return (<>
        <header className="navbar">
            <Link to={"/"}>
                <Logosvg height={36.6} width={233} className={"Logo"}/>
            </Link>
            <div className={"navi"}>
                <label htmlFor={"navMenu"}>
                    <svg viewBox="0 0 100 80" width="30px" height="30">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                </label>
                <input type={"checkbox"} id={"navMenu"} style={{display: "none"}} ref={navRef}/>
                <nav>
                    <Link to={"/"} className="links" onClick={closeMenu}>Home</Link>
                    <Link className="links" onClick={closeMenu} to={"./places"}>Place to stay</Link>
                    <a href="#" className="links" onClick={closeMenu}>NFTs</a>
                    <a href="#" className="links" onClick={closeMenu}>Community</a>
                    <a href="#" className="wallet wallet2" onClick={() => {
                        closeMenu()
                        setModal(true)
                    }}>Connect Wallet</a>
                </nav>

            </div>

            <a href="#" className="wallet wallet1" onClick={() => {
                setModal(true)
            }}>Connect Wallet</a>
        </header>

        {modal ? <WalletModal setModal={setModal}/> : null}
    </>);
}