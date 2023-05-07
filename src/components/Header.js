//componente Header che conterrà la barra di navigazione e il logo del sito.
//Questo componente sarà visibile su tutte le pagine.
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/" exact>
                    Logo
                </NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/listings">Listings</NavLink>
            </nav>
        </header>
    );
};

export default Header;
