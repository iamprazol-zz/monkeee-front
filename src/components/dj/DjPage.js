import React, { Component } from 'react';
import Cards from '../common/Cards';

class DjPage extends Component {
    constructor () {
        super();
        this.state = {
            djs: []
        };
    }

    componentDidMount () {
        fetch('http://monkeee.com/api/dj')
            .then(results => {
                return results.json();
            }).then(data => {
                let djs = data.data.map((dj) => {
                    return (
                        <div className="eachCard" key={dj.dj}>
                            <Cards
                                oneurl = {dj.dj}
                                name = {dj.name}
                                imgsrc={dj.picture}
                                description={dj.bio}
                                address={dj.resident}
                                email={dj.email}
                                phone={dj.mobile}
                                label={dj.label}
                                category={dj.category}
                                facebook={dj.facebook}
                                instagram={dj.instagram}
                            />
                        </div>
                    );
                });
                this.setState({ djs: djs });
            });
    }

    render () {
        return (
            <div className="events">
                <div className="event-type">
                    <p>Djays</p>
                </div>
                <div className="card-holder">
                    {this.state.djs}
                </div>
            </div>
        );
    }
}
export default DjPage;
