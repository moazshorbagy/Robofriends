import React, { Component } from 'react';
import CardList from '../../components/card-list/card-list.js';
import SearchBox from '../../components/search-box/search-box.js';
import Scroll from '../../components/scroll/scroll.js';
import ErrorBoundary from '../../components/error-boundary/error-boundary.js';
import './app.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
    }

    async componentDidMount() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        this.setState({ robots: users });
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (!robots.length) {
            return <h1>Loading</h1>
        }
        return (
            <div className='tc' >
                <h1 className='f1' >RoboFriends</h1>
                <ErrorBoundary>
                    <SearchBox searchChange={this.onSearchChange} />
                </ErrorBoundary>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;