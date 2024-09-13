// u20780193 - Deliverable 1

import React from "react";
import { Link } from "react-router-dom";

export default class SingleProfile extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Link to={`/profile`} style={{ cursor: 'pointer' }}>
                <div className="p-3 container" >
                    <div className="d-flex flex-column">
                        <img src={`/assets/images/${this.props.image}`} style={{ width: "65px", marginRight: "20px" }} alt="Profile"/>
                        <p className="pt-2">{this.props.name}</p>
                    </div>
                </div>
            </Link>
        );
    }
}