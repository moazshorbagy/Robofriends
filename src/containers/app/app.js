import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../../components/card-list/card-list.js';
import SearchBox from '../../components/search-box/search-box.js';
import Scroll from '../../components/scroll/scroll.js';
import ErrorBoundary from '../../components/error-boundary/error-boundary.js';

import './app.css';

import { setSearchField } from '../../actions.js';

const mapStateToProps = state => ({
    searchField: state.searchField
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
});

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    async componentDidMount() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await response.json();
        this.setState({ robots: users });
    }

    render() {
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
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
                    <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);