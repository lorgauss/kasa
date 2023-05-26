import { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logoCouleur.svg';

export default class Header extends PureComponent {
    render() {
        //Return le code html pour le header avec des NavLink pour naviguer à travers les pages de l'app
        return (
            <nav className="navHeader">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={logo} alt="Logo Kasa" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/a_propos">
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}