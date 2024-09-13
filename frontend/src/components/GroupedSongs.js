// u20780193 - Deliverable 1

import React from "react";
import SingleSong from "./SingleSong";

export default class GroupedSongs extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                {this.props.songs.map((song, i) => {
                    return <SingleSong key={i} image={song.image} songName={song.songName} 
                    artistName={song.artistName} time={song.time}/>;
                })}
            </div>
        );
    }
}