import React from 'react';

const faviconPath = '../../../assets/img/favicon.png';

export class NavbarComponent extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={faviconPath} alt="logo"/>
                        </a>
                    </li>
                    <li>Zodiark</li>
                    <li>Minimizar</li>
                    <li>Restaurar</li>
                    <li>Cerrar</li>
                </ul>
            </nav>
        );
    }
}