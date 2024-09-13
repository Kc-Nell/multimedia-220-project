// u20780193 - Deliverable 1

import React from "react";

export default class ProfilePreview extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="p-3" >
                <div className="p-3 card" style={{ width: "100%", marginBottom: "20px" }}>
                    <div className="d-flex align-items-start">
                        <img src={`/assets/images/${this.props.image}`} style={{ width: "180px", height: "180px", marginRight: "30px" }} alt="Profile" />
                        
                        <div className="d-flex flex-column w-100">
                            <h3>{this.props.name}</h3>
                            
                            <div className="d-flex">
                                <p className="mr-3">{this.props.gender}</p>
                                <p className="mr-3">{this.props.followers} Followers</p>
                                <p>{this.props.following} Following</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3">
                        <p>{this.props.description}</p>
                    </div>

                    <div className="mt-3 d-flex justify-content-start">
                        {this.props.links.map((link, index) => (
                            <button key={index} className="btn btn-secondary mr-2">
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}