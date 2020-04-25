import React from 'react';
import SVG from 'react-inlinesvg';
import Monkeee from './monkeee.svg';

const HomePage = () => {
    return (
        <div className="container">
            <div className="logo-box">
                <SVG src={Monkeee} />
                <div className="divider-2" />
            </div>
            <div className="content">
                <h4 className="motto">"FIRST EVENTS APP IN MELBOURNE"</h4>
            </div>
        </div>
    );
};

export default HomePage;
