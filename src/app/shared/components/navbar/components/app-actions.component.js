import React from 'react';


export class AppActionsComponent extends React.Component {
    render() {
        return (
            <div className="app-actions">
                <div className="window-actions">
                    <div className="action close"></div>
                    <div className="action minimize"></div>
                    <div className="action maximize"></div>
                </div>
            </div>
        );
    }
}
