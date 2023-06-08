import React, { Component } from 'react';
import AdminNav from '../AdminNav';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <AdminNav/>
                    <footer className="footer">
                    <span className="text-muted">© 2023 Apna Indian pizza India. All rights reserved. License Number: 10017011004220</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;