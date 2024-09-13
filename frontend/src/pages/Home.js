// u20780193 - Deliverable 1

import React from "react";
import Navbar from "../components/Navbar";
import FeedNav from "../components/FeedNav";
import Search from "../components/Search";
import GroupedPlaylists from "../components/GroupedPlaylists";
// const playlists = require('./playlists.json');

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            playlists: [
                {
                    id: 1,
                    playlistName: "Chill Walk Vibes",
                    friendName: "Bob Dylan",
                    description: "Let's go walking! Just some chill beats to listen to while you get in those steps and get out of your head. Relax and enjoy.",
                    image: "placeholder.svg",
                    genres: "Dream Pop / Pop Instrumental",
                    tags: "#walking #LoFi #vibes"
                },
                {
                    id: 2,
                    playlistName: "Studying in Cafe",
                    friendName: "Bob Ross",
                    description: "Time to grind! The perfect playlist to listen to while studying in a cafe! These LoFI songs are the best to get the brain juices flowing. You can do anything you want. This is your world.",
                    image: "placeholder.svg",
                    genres: "Jazz Beats / Jazz Instrumental",
                    tags: "#studying #JazzBeats #vibes"
                },
                {
                    id: 3,
                    playlistName: "Easy-going Beats",
                    friendName: "Bob Marley",
                    description: "Yah man its just some beats to listen to man. Its like the name, easy-going man.",
                    image: "placeholder.svg",
                    genres: "Hip Hop / LoFI Hip Hop",
                    tags: "#HipHop #Beats #Dance"
                },
                {
                    id: 4,
                    playlistName: "LoFixing",
                    friendName: "Bob the Builder",
                    description: "Struggling to work? Can we fix it? Yes we can! Nothing some good 'ol LoFi songs can't fix! Lets get cracking yall!",
                    image: "placeholder.svg",
                    genres: "LoFi Music / Old Songs LoFi",
                    tags: "#working #LoFixing"
                },
                {
                    id: 5,
                    playlistName: "Hoppin' Clams",
                    friendName: "Sponge Bob",
                    description: "Order Up! One Krabby Patty with lofi house and hoppin beats! Don't forget the tartar sauce!",
                    image: "placeholder.svg",
                    genres: "LoFi House / Hip Hop",
                    tags: "#HipHop #LoFi #vibes"
                }
            ]
        }
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
                    <br/>
                    <h5>Friends & Following Playlists</h5>
                    <GroupedPlaylists playlists={this.state.playlists} />
                </div>
            </div>
        </div>
        );
    }
}