import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Recipe.css";
import { List, ListItem } from "../../components/List";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class Recipe extends Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        this.loadUserRecipes();
    }

    loadUserRecipes = () => {
        API.loadUserRecipes()
            .then(res => {
                console.log(res.data);
                this.setState({ recipes: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <a href="/dashboard" className="btn recipe-dash-btn profileBtn hvr-fade hvr-grow-shadow">Dashboard</a>
                    <p className="recipe-title">User Recipes</p>
                    <div className="brew-div">
                        {this.state.recipes.length ? (
                            <List>
                                {this.state.recipes.map(recipe => (
                                    <ListItem key={recipe._id}>
                                        <Accordion className="accordion">
                                            <AccordionItem>
                                                <AccordionItemTitle className="sign-up hvr-fade hvr-grow-shadow">
                                                    <span className="brew-title-text">Creator: {recipe.creator}</span>
                                                    <span className="brew-title-text">Beer Name: {recipe.beerName}</span>
                                                    <span className="brew-title-text">Date Posted: {recipe.date}</span>
                                                </AccordionItemTitle>
                                                <AccordionItemBody className="brew-item-body">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div>
                                                                <p className="modal-category">Yeast Selection:</p>
                                                                <p className="modal-selection">{recipe.yeast}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Base Malt Selection:</p>
                                                                <p className="modal-selection">{recipe.baseMalt}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Specialty Grains Selection:</p>
                                                                <p className="modal-selection">{recipe.specialtyGrains.join(",  ")}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Adjuncts Selection:</p>
                                                                <p className="modal-selection">{recipe.adjuncts.join(",  ")}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Hops Selection:</p>
                                                                <p className="modal-selection">{recipe.hops.join(",  ")}</p>
                                                                <p className="modal-category">Bitter Level:</p>
                                                                <p className="modal-selection">{recipe.bitter}</p>
                                                            </div>
                                                            <div>
                                                                <p className="modal-category">Addons Selection:</p>
                                                                <p className="modal-selection">{recipe.addons.join(",  ")}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Note:</p>
                                                            <p>{recipe.note}</p>
                                                        </div>
                                                    </div>
                                                </AccordionItemBody>
                                            </AccordionItem>
                                        </Accordion>
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3 className="profile-text">No Recipes Have Been Posted Yet!</h3>
                            )}
                    </div>

                </div>
            </div>
        );
    }
}

export default Recipe;