import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Dashboard.css";
import { List, ListItem } from "../../components/List";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Input, FormBtn, TextArea } from "../../components/Form";

class Dashboard extends Component {
    state = {
        beers: [],
        yeast: [],
        baseMalt: [],
        specialtyGrains: [],
        adjuncts: [],
        hops: [],
        bitter: [],
        addons: [],
        beerName: "",
        note: "",
        open: false
    };

    componentDidMount() {
        console.log(sessionStorage);
        this.loadUserBeers();
    }

    loadUserBeers = () => {
        API.loadUserBeers({
            creator: sessionStorage.getItem("id")
        })
            .then(res => {
                console.log(res.data);
                this.setState({ beers: res.data });
            })
            .catch(err => console.log(err));
    }

    handlePostRecipe = event => {
        event.preventDefault();
        var ID = event.target.getAttribute('data-id')
        console.log(ID);

        API.findBeerByID({
            beerId: ID
        })
            .then(res => {
                console.log("beer found" + res.data._id);
                this.setState({
                    yeast: res.data.yeast,
                    baseMalt: res.data.baseMalt,
                    specialtyGrains: res.data.specialtyGrains,
                    adjuncts: res.data.adjuncts,
                    hops: res.data.hops,
                    bitter: res.data.bitter,
                    addons: res.data.addons,
                    beerName: res.data.beerName
                });
                API.postRecipe({
                    yeast: this.state.yeast,
                    baseMalt: this.state.baseMalt,
                    specialtyGrains: this.state.specialtyGrains,
                    adjuncts: this.state.adjuncts,
                    hops: this.state.hops,
                    bitter: this.state.bitter,
                    addons: this.state.addons,
                    beerName: this.state.beerName,
                    date: Date.now,
                    creator: sessionStorage.getItem("firstName"),
                    note: this.state.note
                })
                    .then(res => {
                        console.log(res.data);
                        window.location = "/dashboard"
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    signOut = event => {
        event.preventDefault();
        sessionStorage.removeItem("firstName");
        sessionStorage.removeItem("lastName");
        sessionStorage.removeItem("beerNum");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("id");
        window.location = "/"
    }

    render() {
        const { open } = this.state;
        return (
            <div className="dash-page">
                <div className="profile-bar">
                    <img src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" alt="" width="200px" height="200px"></img>
                    <p className="profile-text">Welcome: {sessionStorage.getItem("firstName")}</p>
                    <p className="profile-text">Total Beers Made: {this.state.beers.length}</p>
                    <button className="profileBtn hvr-fade hvr-grow-shadow" onClick={this.signOut}><i className="fas fa-beer"></i> Sign Out</button>
                    <p className="helpful profile-text">Helpful Pages</p>
                    <a href="/university" className="btn profileBtn hvr-fade hvr-grow-shadow"><i className="fas fa-beer"></i> Beer University</a>
                    <a href="/recipe" className="btn profileBtn hvr-fade hvr-grow-shadow"><i className="fas fa-beer"></i> User Recipes</a>
                </div>
                <div className="dash-content">
                    <p className="your-brews-title">Your Brews</p>
                    <div className="brew-div">
                        {this.state.beers.length ? (
                            <List className="brew-div">
                                {this.state.beers.map(beer => (
                                    <ListItem key={beer._id} className="brew-list-item">
                                        <Accordion className="accordion">
                                            <AccordionItem>
                                                <AccordionItemTitle className="sign-up hvr-fade hvr-grow-shadow">
                                                    <span className="brew-title-text">Beer Name: {beer.beerName}</span>
                                                    <span className="brew-title-text">Order Date: {beer.date}</span>
                                                    <span className="brew-title-text">Expected Delivery: </span>
                                                </AccordionItemTitle>
                                                <AccordionItemBody className="brew-item-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div>
                                                                <p className="modal-category">Yeast Selection:</p>
                                                                <p className="modal-selection">{beer.yeast}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Base Malt Selection:</p>
                                                                <p className="modal-selection">{beer.baseMalt}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Specialty Grains Selection:</p>
                                                                <p className="modal-selection">{beer.specialtyGrains.join(",  ")}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Adjuncts Selection:</p>
                                                                <p className="modal-selection">{beer.adjuncts.join(",  ")}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Hops Selection:</p>
                                                                <p className="modal-selection">{beer.hops.join(",  ")}</p>
                                                                <p className="modal-category">Bitter Level:</p>
                                                                <p className="modal-selection">{beer.bitter}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Addons Selection:</p>
                                                                <p className="modal-selection">{beer.addons.join(",  ")}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p className="modal-title">Add A Note:</p>
                                                            <form>
                                                                <TextArea
                                                                    className="text"
                                                                    value={this.state.note}
                                                                    onChange={this.handleInputChange}
                                                                    name="note"
                                                                    placeholder="Note"
                                                                />
                                                            </form>
                                                            <button className="btn profileBtn hvr-fade hvr-grow-shadow" data-id={beer._id} onClick={this.handlePostRecipe}><i className="fas fa-beer"></i> Post Recipe</button>
                                                        </div>
                                                    </div>
                                                </AccordionItemBody>
                                            </AccordionItem>
                                        </Accordion>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3 className="profile-text">You have not made any Beers yet!</h3>
                            )}
                    </div>
                    <a href="/brew" className="btn add-brew-btn profileBtn hvr-fade hvr-grow-shadow"><i className="fas fa-beer"></i> Add A Brew</a>
                </div>
            </div>
        );
    }
}

export default Dashboard;