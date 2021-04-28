import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                    <h3>Project manage footerball player by Reactjs</h3>
                    <p className="lead">with json</p>
                    <hr className="my-2" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Header;