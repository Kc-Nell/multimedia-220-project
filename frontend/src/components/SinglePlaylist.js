// u20780193 - Deliverable 1

import React from "react";
import { Link } from "react-router-dom";

export default class SinglePlaylist extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="p-3">
                <div className="d-flex">
                    <Link to={`/playlist/${this.props.id}`} style={{ cursor: 'pointer' }}>
                        <img src={`/assets/images/${this.props.image}`} style={{ width: "180px", marginRight: "20px" }} alt="Playlist"/>
                    </Link>
                    <div className="ms-3 flex-grow-1">
                        <p><b>{this.props.friendName}</b> created a new playlist called <b>{this.props.playlistName}</b>.</p>
                        <p>{this.props.descr}</p>
                        <p><b>{this.props.genres}</b></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="text-muted"><i>{this.props.tags}</i></p>
                            <button className="btn btn-secondary">Add Playlist</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}