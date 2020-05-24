import React, { Component } from 'react';
import EventCards from '../event/EventCards';
import ClubCards from '../club/ClubCards';
import DjCards from '../dj/DjCards';

class Popup extends Component {
    constructor (props) {
        super(props);

        this.state = {
            url: window.location.pathname,
            closePopup: true,
            items: []
        };

        this.renderSwitch = this.renderSwitch.bind(this);
        this.displayPopup = this.displayPopup.bind(this);
    }

    componentDidMount () {
        this.renderSwitch(this.state.url);
    }

    displayPopup () {
        this.setState({
            closePopup: !this.state.closePopup
        });
    }

    renderSwitch (url) {
        switch (url) {
            case '/events':
                fetch(`http://monkeee.com/api/eventbyclick/${this.props.oneurl}`)
                    .then(results => {
                        return results.json();
                    }).then(data => {
                        let events = data.data.event.original.data.map((event) => {
                            return (
                                <div className="popup-eachCard" key={event.id}>
                                    <EventCards
                                        name={event.name}
                                        imgsrc={event.picture}
                                        description={event.description}
                                        address={event.address}
                                        category={event.category}
                                        price={event.price}
                                        opening_date={event.opening_date}
                                        opening={event.opening}
                                        closing_date={event.closing_date}
                                        closing={event.closing}
                                        suburb={event.suburb}
                                        ticketLink={event.ticket_link}
                                        facebook={event.facebook}
                                        instagram={event.instagram}
                                        views={event.count}
                                    />
                                </div>
                            );
                        });
                        this.setState({ items: events });
                    });
                break;
            case '/clubs' :
                fetch(`http://monkeee.com/api/clubbyid/${this.props.oneurl}`)
                    .then(results => {
                        return results.json();
                    }).then(data => {
                        let clubs = data.data.club.map((club) => {
                            return (
                                <div className="popup-eachCard" key={club.id}>
                                    <ClubCards
                                        oneurl={club.id}
                                        name={club.name}
                                        imgsrc={club.cover_photo}
                                        description={club.description}
                                        address={club.address}
                                        opening={club.open}
                                        suburb={club.suburb_name}
                                        email={club.email}
                                        phone={club.phone}
                                        facebook={club.facebook}
                                        instagram={club.instagram}
                                    />
                                </div>
                            );
                        });
                        this.setState({ items: clubs });
                    });
                break;
            default :
                fetch(`http://monkeee.com/api/djbyid/${this.props.oneurl}`)
                    .then(results => {
                        return results.json();
                    }).then(data => {
                        let djs = data.data.map((dj) => {
                            return (
                                <div className="popup-eachCard" key={dj.dj}>
                                    <DjCards
                                        name={dj.name}
                                        imgsrc={dj.picture}
                                        description={dj.bio}
                                        address={dj.resident}
                                        category={dj.category}
                                        label={dj.label}
                                        email={dj.email}
                                        phone={dj.mobile}
                                        facebook={dj.facebook}
                                        instagram={dj.instagram}
                                    />
                                </div>
                            );
                        });
                        this.setState({ items: djs });
                    });
        }
    }
    render () {
        return (
            <div>
                {
                    this.state.closePopup ?
                        <div className="popup-overlay">
                            <div className="popup">
                                <span className="popup-close" onClick={this.displayPopup}>&times;</span>
                                <div className="popup-events">
                                    <div className="popup-card-holder">
                                        {this.state.items}
                                    </div>
                                </div>
                            </div>
                        </div> :
                        null
                }
            </div>
        );
    }
}

export default Popup;
