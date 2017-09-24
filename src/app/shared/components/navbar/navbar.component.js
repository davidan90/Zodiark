import React from 'react';
import { AppActionsComponent } from './components';

const logoPath = './assets/img/logo.png';

export class NavbarComponent extends React.Component {

    handleClose() {
        /* Handle Close action */
        console.log('handleClose');
    }
    handleMinimize() {
        /* Handle Minimize action */
        console.log('handleMinimize');
    }
    handleMaximize() {
        /* Handle Maximize action */
        console.log('handleMaximize');
    }

    render() {
        return (
            <nav className="navbar theme-vulcano">
                <ul>
                    <li>
                        <a href="zodiarkSite">
                            <img src={logoPath} alt="logo" />
                        </a>
                    </li>
                    <li>Zodiark</li>
                </ul>
                <AppActionsComponent
                    onClose={this.handleClose}
                    onMinimize={this.handleMinimize}
                    onMaximize={this.handleMaximize} />
            </nav>
        );
    }
}