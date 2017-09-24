import React from 'react';
import { AppActionsComponent } from './components';

const faviconPath = './assets/img/logo.png';

export class NavbarComponent extends React.Component {
    render() {
        return (
            <nav className="navbar theme-vulcano">
                <ul>
                    <li>
                        <a href="zodiarkSite">
                            <img src={faviconPath} alt="logo"/>
                        </a>
                    </li>
                    <li>Zodiark</li>
                </ul>
                <AppActionsComponent />
            </nav>
        );
    }
}