import React, {Component} from "react";

class Content extends Component {
    render() {
        console.log("Content.render() called");
        return (
            <div>
                {this.props.content}
                <br></br>
                <a href='/' onClick={function(e){
                    this.props.onChangePage();
                    alert("yeah~");
                    e.preventDefault();
                }.bind(this)}>My Event</a>
            </div>
        )
    }
}

export default Content;