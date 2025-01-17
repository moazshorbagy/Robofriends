import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.log(error);
        console.log(info);
    }

    render() {

        if (this.state.hasError)
            return <h1>Oooops. This is not good!</h1>;

        return this.props.children;
    }
}

export default ErrorBoundary;