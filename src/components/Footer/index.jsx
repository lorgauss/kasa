import { PureComponent } from 'react';

import logo from '../../assets/logoBlanc.svg';
import '../../styles/style.css';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <img src={logo} alt="Logo Kasa" />
                <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>
        );
    }
}