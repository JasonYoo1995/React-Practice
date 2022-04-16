import React, {Component} from "react";

class Content extends Component {
    render() {
        console.log("Content.render() called");
        return (
            <div>{this.props.content}</div>
        )
    }
}

export default Content;