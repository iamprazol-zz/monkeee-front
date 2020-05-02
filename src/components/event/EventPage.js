import React, { Component } from 'react';
import EventCards from './EventCards';

class EventPage extends Component {
    constructor () {
        super();
        this.state = {
            upcomingEvents: [],
            liveEvents: []
        };
    }

    componentDidMount () {
        fetch('http://monkeee.com/api/eventlist')
            .then(results => {
                return results.json();
            }).then(data => {
                let upcomingEvents = data.data.upcoming.original.data.map((upcomingEvent) => {
                    return (

                        <div className="eachCard" key={upcomingEvent.id}>
                            <EventCards
                                imgsrc={upcomingEvent.picture}
                                description={upcomingEvent.description}
                                address={upcomingEvent.address}
                                opening={upcomingEvent.opening}
                                closing={upcomingEvent.closing}
                                price={upcomingEvent.price}
                                ticketLink={upcomingEvent.ticket_link}
                                facebook={upcomingEvent.facebook}
                                instagram={upcomingEvent.instagram}
                            />
                        </div>
                    );
                });
                let liveEvents = data.data.live.original.data.map((liveEvent) => {
                    return (
                        <div className="eachCard" key={liveEvent.id}>
                            <EventCards
                                imgsrc={liveEvent.picture}
                                description={liveEvent.description}
                                address={liveEvent.address}
                                opening={liveEvent.opening}
                                closing={liveEvent.closing}
                                price={liveEvent.price}
                                ticketLink={liveEvent.ticket_link}
                                facebook={liveEvent.facebook}
                                instagram={liveEvent.instagram}
                            />
                        </div>
                    );
                });
                this.setState({ upcomingEvents: upcomingEvents, liveEvents: liveEvents });
            });
    }

    render () {
        return (
            <div className="events">
                <div className="event-type">
                    Live Events
                    <div className="event-divider" />
                </div>
                <div className="card-holder">
                    {this.state.liveEvents}
                </div>
                <div className="event-type">
                   Upcoming Events
                    <div className="event-divider" />
                </div>
                <div className="card-holder">
                    {this.state.upcomingEvents}
                </div>
            </div>
        );
    }
}
export default EventPage;
