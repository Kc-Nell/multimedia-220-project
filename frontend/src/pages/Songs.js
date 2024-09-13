// u20780193 - Deliverable 1

import React from "react";
import Navbar from "../components/Navbar";
import FeedNav from "../components/FeedNav";
import Search from "../components/Search";
import GroupedSongs from "../components/GroupedSongs";
import AddSong from "../components/AddSong";

export default class Songs extends React.Component{
    constructor(props){
        super(props);
        // this.searchFeed = this.searchFeed.bind(this);
        this.state = {
            songs : [
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                },
                {
                    songName: "LoFi Song",
                    artistName: "Bob Dylan",
                    time: "1:43",
                    image: "placeholder.svg"
                }
            ]
            // ,
            // filteredEvents: []
        };
        // this.state.filteredEvents = this.state.events;
    }
    render(){
        return(
            <div className="d-flex" style={{ height: "100vh" }}>
            <Navbar/>
            <div className="d-flex flex-column" style={{ flexGrow: 1, marginLeft: "200px" }}>
                <div className="d-flex justify-content-center">
                    <FeedNav />
                </div>
                <div className="p-3">
                    <Search function={this.searchFeed}/>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h5 className="d-flex justify-content-center">Recently Added Songs</h5>
                                <GroupedSongs songs={this.state.songs} />
                            </div>
                            
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <AddSong />
                                </div>

                                <div className="mt-3">
                                    <h5 className="d-flex justify-content-center">Your Added Songs</h5>
                                    <GroupedSongs songs={this.state.songs} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}