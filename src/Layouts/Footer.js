import React, { Component } from 'react'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer__container container">
                    <div className="row footer__bottom pt-4">
                        <div className="footer__left d-flex col-md-7 col-xl-6">
                            <a>
                                <img src="/img/CybersoftLogo.png" alt="logoFooter" />
                            </a>
                            <span className="ml-4 text-license">Bản quyền © 2019 Cybersoft.</span>
                        </div>
                        <div className="footer__right col-md-5 col-xl-6">
                            
                        </div>
                    </div>
            </footer>

        )
    }
}

export default (FooterComponent);
