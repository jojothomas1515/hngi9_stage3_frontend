import React, {useRef} from "react";
import "../styles/components/Navbar.css"
import {Logosvg} from "./logosvg";

export const Navbar = () => {
    const navRef = useRef()

    const closeMenu = (e) => {
        navRef.current.checked = false
    }

    return (<header className="navbar">
        <Logosvg height={36.6} width={233} className={"Logo"}/>
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
                <a href="#" className="links" onClick={closeMenu}>Home</a>
                <a href="#" className="links" onClick={closeMenu}>Place to stay</a>
                <a href="#" className="links" onClick={closeMenu}>NFTs</a>
                <a href="#" className="links" onClick={closeMenu}>Community</a>
                <a href="#" className="wallet wallet2" onClick={closeMenu}>Connect Wallet</a>
            </nav>

        </div>

        <a href="#" className="wallet wallet1">Connect Wallet</a>
    </header>);
}