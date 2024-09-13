// u20780193 - Deliverable 1

import React from "react";
import { Link } from "react-router-dom";

export default class Comment extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="p-3" >
                <div className="d-flex">
                    <Link to={`/profile`} style={{ cursor: 'pointer' }}>
                        <img src={`/assets/images/${this.props.image}`} style={{ width: "50px"}} alt="Comment"/>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center flex-grow-1 w-10 ms-3 ">
                        <p>{this.props.comment}</p>
                    </div>
                </div>
            </div>
        );
    }
}