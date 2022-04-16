import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject:{title:'WEB', sub:'World Wide Web'}
        }
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                     sub={this.state.subject.sub}></Subject>
                <Subject title={"different"} sub="props"></Subject>
            </div>
        )
    }
}

export default App;
