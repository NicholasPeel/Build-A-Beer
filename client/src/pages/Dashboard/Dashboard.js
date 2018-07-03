import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Dashboard.css";

class Dashboard extends Component {
    state = {

    };

    componentDidMount() {

    }

    render() {
        return (
            <div className="dash-page">
                <div className="row">
                    <div className="col-4-md profile-bar">
                        <img src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" alt="" width="200px" height="200px"></img>
                        <p className="profile-text">Nicholas Peel</p>
                        <p className="profile-text">3 total brews made</p>
                        <p className="helpful profile-text">Helpful Pages</p>
                        <button className="profileBtn"><i class="fas fa-beer"></i> Beer University</button>
                        <button className="profileBtn"><i class="fas fa-beer"></i> User Recipes</button>
                    </div>
                    <div className="col-8-md dash-content">
                        <p className="your-brews-title">Your Brews</p>
                        <div></div>
                        <a href="/brew" className="btn add-brew-btn"><i class="fas fa-beer"></i> Add A Brew</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;