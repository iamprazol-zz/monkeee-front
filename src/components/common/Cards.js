import React, { Component } from 'react';
import Popup from './Popup';

class Cards extends Component {
    constructor (props) {
        super(props);

        this.state = {
            url: window.location.pathname,
            isHovered: false,
            isClicked: false
        };

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
        this.renderSwitch = this.renderSwitch.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    onMouseEnterHandler () {
        this.setState({
            isHovered: true
        });
    }

    onMouseLeaveHandler () {
        this.setState({
            isHovered: false
        });
    }

    togglePopup () {
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    renderSwitch (url) {
        const { name, category, club, suburb, opening, closing, address, email, phone } = this.props;
        switch (url) {
            case '/events':
                return (
                    <div className="identifier">
                        <h2><i>{name}</i></h2>
                        <p>Opening : <strong>{opening}</strong></p>
                        <p>Closing : <strong>{closing}</strong></p>
                        <p>Music : <strong>{category}</strong></p>
                        <p>📍<strong>{club} | {suburb}</strong></p>
                    </div>
                );
            case '/clubs' :
                return (
                    <div className="identifier">
                        <h2><i>{name}</i></h2>
                        <p>Email : <strong>{email}</strong></p>
                        <p>Phone : <strong>{phone}</strong></p>
                        <p>📍<strong>{suburb} | {address}</strong></p>
                    </div>
                );
            default :
                return (
                    <div className="identifier">
                        <h2><i>{name}</i></h2>
                        <p>Email : <strong>{email}</strong></p>
                        <p>Phone : <strong>{phone}</strong></p>
                        <p>Music : <strong>{category}</strong></p>
                        <p>📍<strong>{address}</strong></p>
                    </div>
                );
        }
    }
    render () {
        const { name, imgsrc, dot, oneurl } = this.props;
        return (
            <div className="popup-body">

                <div className="card" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <div className="main">
                        <div className="image-holder">
                            <img src={imgsrc} alt="Event" />
                        </div>
                        <div className="details">
                            {
                                this.state.isHovered ?
                                    <div className="hover">
                                        <h2><i>{name}</i></h2>
                                        <a className="btn" onClick={this.togglePopup}>
                                            <span className="txt">Open</span>
                                            <span className="round">
                                                <p> ➺</p>
                                            </span>
                                        </a>
                                    </div> :
                                    <div>
                                        {this.renderSwitch(this.state.url)}
                                    </div>
                            }
                        </div>
                        <div className="column">
                            <span className={`${dot}`}> </span>
                        </div>
                    </div>
                </div>
                {this.state.isClicked ?
                    <Popup
                        popupOpen={this.state.isClicked}
                        oneurl={oneurl}
                        togglePopup={this.togglePopup}
                    /> :
                    ''
                }
            </div>

        );
    }
}

export default Cards;
