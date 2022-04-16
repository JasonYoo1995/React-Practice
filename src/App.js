import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title={"web"} sub="world wide web"></Subject>
                <Subject title={"different"} sub="props"></Subject>
            </div>
        )
    }
}

export default App;
