import React, { Component } from 'react';
import Cards from '../common/Cards';

class ClubPage extends Component {
    constructor () {
        super();
        this.state = {
            clubs: []
        };
    }

    componentDidMount () {
        fetch('http://monkeee.com/api/club')
            .then(results => {
                return results.json();
            }).then(data => {
                let clubs = data.data.map((club) => {
                    return (

                        <div className="eachCard" key={club.id}>
                            <Cards
                                name = {club.name}
                                imgsrc={club.cover_photo}
                                description={club.description}
                                suburb={club.suburb_name}
                                address={club.address}
                                email={club.email}
                                phone={club.phone}
                                open={club.open}
                                order={club.order}
                                facebook={club.facebook}
                                instagram={club.instagram}
                            />
                        </div>
                    );
                });
                this.setState({ clubs: clubs });
            });
    }

    render () {
        return (
            <div className="events">
                <div className="event-type">
                    Clubs
                    <div className="event-divider" />
                </div>
                <div className="card-holder">
                    {this.state.clubs}
                </div>
            </div>
        );
    }
}
export default ClubPage;
