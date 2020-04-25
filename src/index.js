import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './components/App';

class Welcome extends Component {
    render () {
        return (
            <Router>
                <App />
            </Router>
        );
    }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
