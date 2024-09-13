// u20780193 - Deliverable 1

import React from "react";
import Comment from "./Comment";

export default class DisplayComments extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="d-flex flex-column">
                <p><b>{this.props.comments.length} Comments</b></p>
                {this.props.comments.map((comment, i) => {
                    return <Comment key={i} image={comment.image} comment={comment.comment}/>;
                })}
            </div>
        );
    }
}