// u20780193 - Deliverable 1

import React from "react";

export default class AddSong extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            urlError: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUrl = this.validateUrl.bind(this);
    }
    
    validateUrl(url){
        const urlPattern = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
        return urlPattern.test(url);
    }

    handleSubmit(e){
        e.preventDefault();
        const songName = e.target.songName.value;
        const artistName = e.target.artistName.value;
        const time = `${mins}:${secs}`;
        const url = e.target.url.value;

        if (!this.validateUrl(url)) {
            this.setState({ urlError: "Please enter a valid URL." });
            return;
        }

        this.setState({ urlError: "" });

        console.log(`Adding Song: ${songName} ${artistName} ${time} ${url}`);
    };
    
    render() {
        return (
            <div className="d-flex">
                <div className="container d-flex justify-content-center">
                    <div className="card" style={{ width: "30rem", height: "31rem" }}>
                        <div className="card-body">
                            <h4 className="card-title d-flex text-align-center">Add a Song</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="songName" className="form-label">Song Name:</label>
                                    <input type="text" id="songName" name="songName" className="form-control" placeholder="Never gonna give you up..." required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="artistName" className="form-label">Artist Name:</label>
                                    <input type="text" id="artistName" name="artistName" className="form-control" placeholder="Rick Astley" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="time" className="form-label">Song Duration:</label>
                                    <div className="row">
                                        <div className="ml-3 mr-3">
                                            <label htmlFor="mins" className="form-label">Minutes:</label>
                                            <input type="number" id="mins" name="mins" className="form-control" placeholder="1" required />
                                        </div>
                                        <div className="mr-3">
                                            <label htmlFor="secs" className="form-label">Seconds:</label>
                                            <input type="number" id="secs" name="secs" className="form-control" placeholder="23" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="url" className="form-label">Song URL:</label>
                                    <input type="text" id="url" name="url" className={`form-control ${this.state.urlError ? "is-invalid" : ""}`} placeholder="https://open.spotify.com/..." required />
                                    {this.state.urlError && <div className="invalid-feedback">{this.state.urlError}</div>}
                                </div>
                                <button type="submit" className="btn btn-primary">Add Song</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}