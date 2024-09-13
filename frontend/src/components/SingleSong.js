// u20780193 - Deliverable 1

import React from "react";

export default class SingleSong extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="p-3" >
                <div className="d-flex">
                    <img src={`/assets/images/${this.props.image}`} style={{ width: "65px", marginRight: "20px" }} alt="Song"/>
                    <div className="d-flex justify-content-between align-items-center flex-grow-1 w-10">
                        <div className="ms-3 ">
                            <p><b>{this.props.songName}</b> - {this.props.artistName}</p>
                            <p>{this.props.time}</p>
                        </div>
                        <button className="btn btn-secondary">Add to Playlist</button>
                    </div>
                </div>
            </div>
        );
    }
}