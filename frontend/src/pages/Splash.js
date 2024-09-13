// u20780193 - Deliverable 1

import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Signup from "../components/Signup";

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "",
            showForms: false
        };
        this.toggleSign = this.toggleSign.bind(this);
        this.exploreLoFind = this.exploreLoFind.bind(this);
    }

    toggleSign(tab){
        this.setState({ activeTab: tab });
    }

    exploreLoFind(){
        this.setState({ showForms: true, activeTab: "login"});
    }

    render() {
        return (
            <div className="d-flex" style={{ height: "100vh", backgroundImage: "url('/assets/images/splashBackground.png')", backgroundSize: 'cover' }}>
                <Navbar />
                <div className="d-flex flex-column" style={{ flexGrow: 1 }}>
                    {!this.state.showForms ? (
                        <div className="d-flex justify-content-end align-items-center" style={{ padding: "50px", textAlign: "right" }}>
                            <div className="text-light">
                                <h1>Trying to find the perfect LoFi music plasylist?</h1>
                                <p><b>Create</b>, <b>share</b> and <b>indulge</b> yourself with endless LoFi music and chill beats playlists!</p>
                                <p>They're just waiting for you to <b>explore</b> them.</p>
                                <button className="btn btn-primary" onClick={this.exploreLoFind}>
                                    <b><i>Feeling Adventurous?</i></b>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-3" style={{ marginLeft: "auto", marginRight: "auto", width: "50%" }}>
                            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${this.state.activeTab === "login" ? "active" : "text-light"}`} href="#" onClick={() => this.toggleSign("login")}>
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className={`nav-link ${this.state.activeTab === "signup" ? "active" : "text-light"}`} href="#" onClick={() => this.toggleSign("signup")}>
                                        Sign Up
                                    </a>
                                </li>
                            </ul>

                            <div className=" justify-content-center">
                                {this.state.activeTab === "login" ? <Login/> : <Signup/>}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
