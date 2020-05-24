import React, { Component } from 'react';
import Cards from '../common/Cards';

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
                            <Cards
                                oneurl={upcomingEvent.id}
                                name={upcomingEvent.name}
                                dot="upc"
                                imgsrc={upcomingEvent.picture}
                                category={upcomingEvent.category}
                                club={upcomingEvent.club}
                                opening={upcomingEvent.opening}
                                closing={upcomingEvent.closing}
                                suburb={upcomingEvent.suburb}
                            />
                        </div>
                    );
                });
                let liveEvents = data.data.live.original.data.map((liveEvent) => {
                    return (
                        <div className="eachCard" key={liveEvent.id}>
                            <Cards
                                oneurl={liveEvent.id}
                                name={liveEvent.name}
                                dot="live"
                                imgsrc={liveEvent.picture}
                                category={liveEvent.category}
                                club={liveEvent.club}
                                opening={liveEvent.opening}
                                closing={liveEvent.closing}
                                suburb={liveEvent.suburb}
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
                    <p>Events</p>
                </div>
                <div className="card-holder">
                    {this.state.liveEvents}
                    {this.state.upcomingEvents}
                </div>
            </div>
        );
    }
}
export default EventPage;
