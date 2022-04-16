import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 0,
            subject:{title:'WEB', sub:'World Wide Web'},
            content:[
                {text: "0번째"},
                {text: "1번째"},
            ]
        }
    }
    render() {
        console.log("App.render() called");
        let _content = this.state.mode === 0 ?
                        this.state.content[0].text :
                        this.state.content[1].text;
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                     sub={this.state.subject.sub}></Subject>
                <Subject title={"different"} sub="props"></Subject>
                <Content content={_content}></Content>
                <div>
                    <a href='/' onClick={(e) => {
                        e.preventDefault(); // a 태그의 기본 동작을 제거함으로써, 페이지가 새로 고침되지 않도록 막음
                        alert("새로 고침이 안 되도록 했습니다");
                    }}>새로고침 없음</a>
                    <br></br>
                    <a href='/' onClick={(e) => {
                        alert("새로 고침이 일어납니다");
                    }}>새로고침 있음</a>
                </div>
            </div>
        )
    }
}

export default App;
