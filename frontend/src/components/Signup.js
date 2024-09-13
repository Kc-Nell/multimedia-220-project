// u20780193 - Deliverable 1

import React from "react";

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmpassword.value;

        let errors = {};

        if(!this.validateEmail(email)){
            errors.email = "Invalid email format. Check that you dont have any other special characters and that you have an @.";
        }

        if(password !== confirmPassword){
            errors.password = "Passwords do not match.";
        }

        if(Object.keys(errors).length > 0){
            this.setState({ errors });
            return;
        }

        console.log(`User:, ${username} + ${email} + password: ${password}`); /////////////

        this.setState({ errors: {} });
    }

    validateEmail(email){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    render(){
        return(
            <div className="d-flex">
                <div className="container d-flex justify-content-center" style={{ height: "100vh" }}>
                    <div className="card" style={{ width: "30rem", height: "30rem" }}>
                    <div className="card-body">
                        <h3 className="card-title justify-content-center">Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="John Doe" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className={`form-control ${this.state.errors.email ? "is-invalid" : ""}`} id="email" name="email" placeholder="john.doe@email.com" required />
                                {this.state.errors.email && <div className="invalid-feedback">{this.state.errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="*************" required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                                <input type="password" className={`form-control ${this.state.errors.password ? "is-invalid" : ""}`} id="confirmpassword" name="confirmpassword" placeholder="*************" required />
                                {this.state.errors.password && <div className="invalid-feedback">{this.state.errors.password}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}