import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">Voz de la elección al gobierno escolar</h5>
                <nav className="as">
                    <a className="p-2 text-dark" href="nose.js">Propuestas</a>
                    <a className="p-2 text-dark" href="#">Quiénes somos</a>
                    <a className="p-2 text-dark" href="#">aja</a>
                    <a className="p-2 text-dark" href="#">Pricing</a>
                </nav>
                <a className="btn btn-outline-primary" href="#">Sign up</a>
            </div>
        )
    }
}
export default Header;