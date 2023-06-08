import React, { Component } from 'react';
import AdminNav from '../AdminNav';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <AdminNav/>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a className="navbar-brand">PIZZA ORDERING SYSTEM</a></div>
                    </nav>
            </div>
        );
    }
}

export default HeaderComponent;