// u20780193 - Deliverable 1

import React from "react";
import GroupedSongs from "./GroupedSongs";

export default class DisplayPlaylists extends React.Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "60rem", height: "40rem" }}>
                    <div className="card-body d-flex">
                        
                            <div className="row w-100">
                                <div className="col-md-6">
                                    <GroupedSongs songs={this.props.songs}/>
                                </div>

                                <div className="col-md-6">
                                    <h2 className="text-center">{this.props.playlist.playlistName}</h2>
                                    <div className="text-center">
                                        <img src={`/assets/images/${this.props.playlist.image}`} style={{ width: "280px" }} alt={this.props.playlist.playlistName}/>
                                    </div>
                                    
                                    <div className="text-center my-3">
                                        <button className="btn btn-secondary">Save</button>
                                        <button className="btn btn-secondary ml-3">Open</button>
                                    </div>

                                    <p className="text-center mb-6"><b>{this.props.playlist.genres}</b> </p>
                                    <p className="text-center mb-3">{this.props.playlist.description}</p>
                                    <p className="text-center text-muted">{this.props.playlist.tags}</p>
                                    <p className="text-center">Created by: <b>{this.props.playlist.friendName}</b></p>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        );
    }
}