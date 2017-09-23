import React from 'react';

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
                {/*Replace with app-actions component*/}
                <div className="app-actions">
                    <div className="window-actions">
                        <div className="action close"></div>
                        <div className="action minimize"></div>
                        <div className="action maximize"></div>
                    </div>
                </div>
                {/*Replace with app-actions component*/}
            </nav>
        );
    }
}