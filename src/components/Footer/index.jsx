import { PureComponent } from 'react';

import logo from '../../assets/logoBlanc.svg';

export default class Footer extends PureComponent {
    render() {
        //Return le code html pour le footer
        return (
            <footer>
                <img src={logo} alt="Logo Kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}