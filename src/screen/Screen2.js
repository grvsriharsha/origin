import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Screen2 extends Component {
    render() {
        return (
            <div>
                <Link to="/a">Click me for first screen</Link>
                <h1>Screen2</h1>
            </div>
        )
    }
}

export default Screen2;
