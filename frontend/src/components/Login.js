// u20780193 - Deliverable 1

import React from "react";

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(`User:, ${username} + ${password}`); /////////////
    }

    render(){
        return(
            <div className="d-flex">
                <div className="container d-flex justify-content-center" style={{ height: "100vh" }}>
                    <div className="card" style={{ width: "30rem", height: "20rem" }}>
                        <div className="card-body">
                            <h3 className="card-title justify-content-center">Login</h3>
                            
                            <form onSubmit={this.handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="John Doe" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="*************" required />
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}