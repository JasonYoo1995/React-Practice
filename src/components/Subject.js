import React, {Component} from "react";

class Subject extends Component {
    render() {
        let any = "render() { ... } 블록 내에서, ";
        any += "아무 연산이나 코딩한 다음, ";
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
                <h3>{any+ 'return ( ... ) 안에서 사용할 수 있음'}</h3>
            </header>
        )
    }
}

export default Subject;