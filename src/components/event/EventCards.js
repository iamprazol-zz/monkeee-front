import React, { Component } from 'react';

class EventCards extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isHovered: false
        };

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);

        console.log(window.location.pathname);
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

    render () {
        const { name, imgsrc, dot, category, club, suburb, opening, closing } = this.props;

        return (
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
                                    <a href="" className="btn">
                                        <span className="txt">Open</span>
                                        <span className="round">
                                            <p> ➺</p>
                                        </span>
                                    </a>
                                </div> :
                                <div className="identifier">
                                    <h2><i>{name}</i></h2>
                                    <p>Opening : <strong>{opening}</strong></p>
                                    <p>Closing : <strong>{closing}</strong></p>
                                    <p>Music : <strong>{category}</strong></p>
                                    <p>📍<strong>{club} | {suburb}</strong></p>
                                </div>

                        }
                    </div>
                    <div className="column">
                        <span className={`${dot}`}> </span>

                    </div>
                </div>
            </div>
        );
    }
}

export default EventCards;
