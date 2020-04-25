import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import EventPage from './event/EventPage';
import ClubPage from './club/ClubPage';
import DjPage from './dj/DjPage';
import PageNotFound from './PageNotFound';
import Header from './common/Header';

function App () {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/events" component={EventPage} />
                <Route path="/clubs" component={ClubPage} />
                <Route path="/djs" component={DjPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
