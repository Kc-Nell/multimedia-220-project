// u20780193 - Deliverable 1

import React from "react";
import Navbar from "../components/Navbar";
import GroupedProfiles from "../components/GroupedProfiles";
import ProfilePreview from "../components/ProfilePreview";
import GroupedPlaylists from "../components/GroupedPlaylists";

export default class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profiles : [
                { image: "placeholder.svg", name: "John Doe" },
                { image: "placeholder.svg", name: "John Doe" },
                { image: "placeholder.svg", name: "John Doe" },
            ],
            myPlaylists: [
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
                }
            ],
            savedPlaylists: [
                {
                    id: 100,
                    playlistName: "Easy-going Beats",
                    friendName: "Bob Marley",
                    description: "Yah man its just some beats to listen to man. Its like the name, easy-going man.",
                    image: "placeholder.svg",
                    genres: "Hip Hop / LoFI Hip Hop",
                    tags: "#HipHop #Beats #Dance"
                },
                {
                    id: 110,
                    playlistName: "LoFixing",
                    friendName: "Bob the Builder",
                    description: "Struggling to work? Can we fix it? Yes we can! Nothing some good 'ol LoFi songs can't fix! Lets get cracking yall!",
                    image: "placeholder.svg",
                    genres: "LoFi Music / Old Songs LoFi",
                    tags: "#working #LoFixing"
                },
                {
                    id: 111,
                    playlistName: "Hoppin' Clams",
                    friendName: "Sponge Bob",
                    description: "Order Up! One Krabby Patty with lofi house and hoppin beats! Don't forget the tartar sauce!",
                    image: "placeholder.svg",
                    genres: "LoFi House / Hip Hop",
                    tags: "#HipHop #LoFi #vibes"
                }
            ],
            newPlaylist: {
                playlistName: '',
                friendName: 'John Doe',
                description: '',
                image: 'placeholder.svg',
                genres: '',
                tags: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newPlaylist = { id: this.state.myPlaylists.length + 1, ...this.state.newPlaylist};
        this.setState(prevState => ({
            myPlaylists: [...prevState.myPlaylists, newPlaylist],
            newPlaylist: { playlistName: '', friendName: '', description: '', image: 'placeholder.svg', genres: '', tags: '' }
        }));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => ({
            newPlaylist: { ...prevState.newPlaylist, [name]: value }
        }));
    }

    render(){
        return(
            <div className="d-flex" style={{ height: "100vh" }}>
                <Navbar />
                <div className="d-flex flex-column" style={{ flexGrow: 1, marginLeft: "200px" }}>
                    <ProfilePreview image="placeholder.svg" name="John Doe" gender="He/Hee" followers="250" following="180"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." links={["X", "Insta", "TikTok"]} />

                    <div className="p-3">
                        <h5>Friends</h5>
                        <GroupedProfiles profiles={this.state.profiles} />
                    </div>

                    <div className="p-3">
                        <h5>My Playlists</h5>
                        <GroupedPlaylists playlists={this.state.myPlaylists} />
                    </div>

                    <div className="p-3">
                        <h5>Saved Playlists</h5>
                        <GroupedPlaylists playlists={this.state.savedPlaylists} />
                    </div>

                    <div className="p-3">
                        <h5>Add a New Playlist</h5>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="playlistName" className="form-label">Playlist Name</label>
                                <input type="text" id="playlistName" name="playlistName" className="form-control" value={this.state.newPlaylist.playlistName} onChange={this.handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea id="description" name="description" className="form-control" value={this.state.newPlaylist.description} onChange={this.handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genres" className="form-label">Genres</label>
                                <input type="text" id="genres" name="genres" className="form-control" value={this.state.newPlaylist.genres} onChange={this.handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tags" className="form-label">Hashtags</label>
                                <input type="text" id="tags" name="tags" className="form-control" value={this.state.newPlaylist.tags} onChange={this.handleChange} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Playlist</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}