// u20780193 - Deliverable 1

import React from "react";
import SinglePlaylist from "./SinglePlaylist";

export default class GroupedPlaylists extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                {this.props.playlists.map((playlist, i) => {
                    return <SinglePlaylist key={i} id={playlist.id}
                    image={playlist.image} playlistName={playlist.playlistName} 
                    friendName={playlist.friendName} descr={playlist.description} genres={playlist.genres} tags={playlist.tags}/>;
                })}
            </div>
        );
    }
}