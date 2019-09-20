import React, { Component } from 'react';
import { connect } from 'react-redux';

import CardList from '../../components/card-list/card-list.js';
import SearchBox from '../../components/search-box/search-box.js';
import Scroll from '../../components/scroll/scroll.js';
import ErrorBoundary from '../../components/error-boundary/error-boundary.js';

import './app.css';

import { setSearchField, requestRobots } from '../../actions.js';

// parameter state comes from index.js provider store state (rootReducers)
const mapStateToProps = state => ({
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
});

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from reducers.
const mapDispatchToProps = dispatch => ({
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

class App extends Component {

    async componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if (isPending) {
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

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);