// u20780193 - Deliverable 1

import React from "react";
import { NavLink } from "react-router-dom";

export default class FeedNav extends React.Component{
    render(){
        return(
            <nav className="content p-3" >
                <div className="d-flex flex-row">
                    <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`}>
                        Playlists
                    </NavLink>
                    <NavLink to="/songs" className={({ isActive }) => `nav-link ${isActive ? 'text-primary' : 'text-secondary'}`}>
                        Songs
                    </NavLink>
                </div>
            </nav>
        );
    }
}