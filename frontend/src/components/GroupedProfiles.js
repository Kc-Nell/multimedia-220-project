// u20780193 - Deliverable 1

import React from "react";
import SingleProfile from "./SingleProfile";

export default class GroupedProfiles extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-center p-10">
                        {this.props.profiles.map((profile, index) => (
                            <SingleProfile key={index} image={profile.image} name={profile.name} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}