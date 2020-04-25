import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <nav className="slidemenu">
            <NavBar id="slide-item-1" icon="ℋ" links="/" title="Home" />
            <NavBar id="slide-item-2" icon="★" links="/events" title="Events" />
            <NavBar id="slide-item-3" icon="♬" links="/clubs" title="Clubs" />
            <NavBar id="slide-item-4" icon="ヅ" links="/djs" title="Djays" />

            <div className="clear" />

            <div className="slider">
                <div className="bar" />
            </div>
        </nav>
    );
};

export default Header;
