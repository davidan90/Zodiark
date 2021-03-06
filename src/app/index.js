import React from 'react';
import ReactDOM from 'react-dom';
import { NavbarComponent } from './shared';

import './main.scss';

const app = (
    <div id="zodiark">
        <NavbarComponent />
    </div>
);

ReactDOM.render(app, document.getElementById('app-root'));