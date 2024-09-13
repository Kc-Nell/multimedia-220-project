// u20780193 - Deliverable 1

import React from "react";
import Navbar from "../components/Navbar";
import DisplayPlaylist from "../components/DisplayPlaylist";
import { useParams } from "react-router-dom";
import DisplayComments from "../components/DisplayComments";

// export default 
class Playlist extends React.Component{
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
            ],
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
                }
            ],
            comments: [
                {
                    comment: "Amazing playlist! Absolutely chill vibes!",
                    image: "placeholder.svg"
                },
                {
                    comment: "You really know how to make a playlist! this is amazing dude!",
                    image: "placeholder.svg"
                },
                {
                    comment: "i love love love this playlist.... seriously i never stop listening to it",
                    image: "placeholder.svg"
                },
                {
                    comment: "on repeat! i listen to this at work, on walks, while studying, dancing ... you name it!",
                    image: "placeholder.svg"
                },
                {
                    comment: "Saved this playlist after the first three songs!",
                    image: "placeholder.svg"
                }
            ],
            newComment: ""
        };
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCommentChange(e) {
        this.setState({ newComment: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.newComment.trim() !== ""){
            const newComment = {
                comment: this.state.newComment,
                image: "placeholder.svg"
            };
            this.setState( (prevState) => ({
                comments: [...prevState.comments, newComment],
                newComment: ""
            }));
        }
    }

    render(){
        const playlistId = parseInt(this.props.params.id, 10);
        const playlist = this.state.playlists.find(p => p.id === playlistId);

        return(
            <div className="d-flex" style={{ height: "100vh" }}>
                <Navbar/>
                <div className="d-flex flex-column" style={{ flexGrow: 1, marginLeft: "200px" }}>
                    {playlist ? (
                        <div>
                            <DisplayPlaylist playlist={playlist} songs={this.state.songs}/>

                            <div className="p-3">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="comment" className="form-label">Add a Comment</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="comment" 
                                            value={this.state.newComment}
                                            onChange={this.handleCommentChange} 
                                            placeholder="Enter your comment" 
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                            <div className="flex-grow-1">
                                <DisplayComments comments={this.state.comments}/>
                            </div>
                        </div>
                    ) : (
                        <h5 className="text-center text-danger">Playlist not found</h5>
                    )}
                </div>
            </div>
        );
    }
}

function WithProductProps(Component){
    return props => <Component {...props} params={useParams()} />;
}

export default WithProductProps(Playlist);