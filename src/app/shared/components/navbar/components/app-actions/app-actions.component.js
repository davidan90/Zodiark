import React from 'react';
import PropTypes from 'prop-types';

export class AppActionsComponent extends React.Component {
    render() {
        const {onClose, onMinimize, onMaximize} = this.props;

        return (
            <div className="app-actions">
                <div className="window-actions">
                    <div className="action close" onClick={ onClose }></div>
                    <div className="action minimize" onClick={ onMinimize }></div>
                    <div className="action maximize" onClick={ onMaximize }></div>
                </div>
            </div>
        );
    }
}

AppActionsComponent.PropTypes = {
    onClose: PropTypes.func.isRequired,
    onMinimize: PropTypes.func.isRequired,
    onMaximize: PropTypes.func.isRequired
}