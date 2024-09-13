// u20780193 - Deliverable 1

import React from "react";

export default class Search extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-end">
                <form className="d-flex align-items-center p-3">
                    <input type="text" id="search" name="searchInput" placeholder="Search something..." className="form-control d-inline" style={{ width: "auto", display: "inline-block" }} />
                    <input type="submit" value="Search" className="btn btn-primary ms-2"/>
                </form>
            </div>
        );
    }// onSubmit={this.search}
}