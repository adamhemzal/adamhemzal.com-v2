import React, { useEffect, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HamburgerIcon } from "../icons/HamburgerIcon";

export default function Navigation() {
    const data = useStaticQuery(graphql`
        query NavigationQuery {
            allNavigationJson {
                nodes {
                    url
                    label
                }
            }
        }
    `);
    const [mobileNav, setMobileNav] = useState(false);
    const navLinks = data.allNavigationJson.nodes;

    /** 
     * Handling opening menu on mobile
    */
    function handleMenu() {
        setMobileNav(!mobileNav);
    }

    useEffect( () => {
        //console.log(mobileNav);
    }, [mobileNav])

    return (
        <nav className="nav-container" role="navigation">
            <h2 className="sr-only">Main Navigation</h2>
            
            <Link to="/" className="nav__title">Adam Hemzal</Link>

            {/* Mobile Menu */}
            <div className="nav__mobile-menu" role="button" tabIndex="0" onClick={handleMenu} onKeyPress={handleMenu}>
                <HamburgerIcon />
            </div>
            
            {/* Mobile Navigation */}
            <ul className={`${mobileNav ? 'flex' : 'hidden top'} nav__mobile`}>
                {navLinks.map( (menuLink)  => (
                    <li key={menuLink.label}>
                        <Link to={menuLink.url} className="nav__link" activeClassName="nav__link-active">{menuLink.label}</Link>
                    </li> 
                ))}
            </ul>
            
            {/* Desktop Navigation */}
            <ul className="nav__desktop">
                {navLinks.map( (menuLink)  => (
                    <li key={menuLink.label}>
                        <Link to={menuLink.url} className="nav__link" activeClassName="nav__link-active">{menuLink.label}</Link>
                    </li> 
                ))}
            </ul>

        </nav>
    );
}
