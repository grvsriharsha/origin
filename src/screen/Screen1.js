import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Screen1 extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {

        if (event) {
            console.log(event.target.value)
        }
    }
    render() {
        return (
            <div>
                <Link className="addIcon" to="/b">clickme for second screen</Link>
                <h1>Screen1</h1>
                <form onSubmit={
                    this.handleSubmit
                }>
                    <input type="text" placeholder="text" name="textname"></input>
                    <input type="description" placeholder="description" name="descname"></input>
                    <button>post</button>
                </form>
            </div>
        )
    }
}

export default Screen1;
    