import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import styles from "./Brew.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import CheckboxOrRadioGroup from '../../components/CheckboxOrRadioGroup';

class Brew extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            yeastOptions: ["WYeast 1056 American Ale", "WYeast 1272 American Ale II", "WYeast 1007 German Ale", "WYeast 1028 London Ale", "WYeast London Ale III", "WYEast 2007 Pilsen Lager", "WYeast 2035 American Lager", "WYeast 2206 Bavarian Lager", "WYeast 2308 Munich Lager"],
            yeastSelection: ["WYeast 1056 American Ale"],
            baseOptions: ["Two Row Malt", "Pilsner Malt", "Pale Ale Malt", "Vienna Malt", "Munich Malt"],
            baseSelection: ["Two Row Malt"],
            specialOptions: ["Amber Malt", "Aromatic Malt", "Biscuit Malt", "Black Malt", "Brown Malt", "Crystal Malt", "Chocolate Malt", "Honey Malt", "Smoked Malt", "Special B", "Victory Malt"],
            specialSelection: ["Amber Malt"],
            adjunctsOptions: ["Flaked Barley", "Flaked Maize", "Flaked Oats", "Flaked Rye", "Flaked Wheat", "Black Barley"],
            adjunctsSelection: ["Flaked Barley"],
            hopsOptions: ["Aurora", "Bramling Cross", "Centennial", "Challenger", "Chinook", "East Kent Golding", "Glacier", "Mt. Rainier", "Northern Brewer", "Pacific Jade", "Polaris", "Waimea", "Wakatu"],
            hopsSelection: ["Aurora"],
            addonsOptions: ["Belgian Candi Sugar", "Bitter Orange Peel", "Cardamom Seed", "Cinnamon Sticks", "Elderberries", "Apple Flavoring", "Apricot Flavoring", "Blackberry Flavoring", "Cherry Flavoring", "Blood Orange Flavoring", "Blueberry Flavoring", "Cranberry Flavoring", "Ginger", "Jalepeno", "Maple", "Mango Flavoring", "Peach Flavoring", "Pear Flavoring", "Pineapple Flavoring", "Lemon Peel", "Licorice Stick", "Rose Hips"],
            addonsSelection: ["Belgian Candi Sugar"],
            bitterOptions: ["Mild", "Standard", "Hoptastic", "Hopcrazy"],
            bitterSelection: ["Standard"],
            toolTip: ["hover dog", "hover cat", "hover bird"],
            siblingOptions: ["yes", "no"],
            siblingSelection: ["yes"]
        };
    }

    handleSpecialSelection = (e) => {

        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.specialSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.specialSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.specialSelection, newSelection];
        }

        this.setState({ specialSelection: newSelectionArray });
    }

    handleAdjunctsSelection = (e) => {

        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.adjunctsSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.adjunctsSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.adjunctsSelection, newSelection];
        }

        this.setState({ adjunctsSelection: newSelectionArray });
    }

    handleHopsSelection = (e) => {

        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.hopsSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.hopsSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.hopsSelection, newSelection];
        }

        this.setState({ hopsSelection: newSelectionArray });
    }

    handleAddonsSelection = (e) => {

        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.addonsSelection.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.addonsSelection.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.addonsSelection, newSelection];
        }

        this.setState({ addonsSelection: newSelectionArray });
    }

    handleYeastSelection = (e) => {
        this.setState({ yeastSelection: [e.target.value] });
    }
    handleBaseSelection = (e) => {
        this.setState({ baseSelection: [e.target.value] });
    }
    handleBitterSelection = (e) => {
        this.setState({ bitterSelection: [e.target.value] });
    }

    render() {
        return (
            <div className="brew-page">
                <p className="brew-title">Create A Brew</p>
                <p className="brew-desc">Go through each menu option and choose from our list of premium brewing ingredients. Choose one Yeast Strain and one base malt. Then choose up to three options each, from Specialty Grains, Hops, and Addons</p>
                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="sign-up brew-tab">
                            <p><i class="fas fa-beer"></i> Yeast</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'The type of yeast you choose will determine the very basic classification of your beer. All beers fall into two classifications: Ale or Lager. An "Ale" is created using a Top Fermenting Yeast, while a "Lager" is created using a Bottom Fermenting Yeast. Learn more about yeast by clicking on the "Beer University" button from your dashboard. Hover over each selection to get more info about the flavor profile.'}
                                    setName={'yeast'}
                                    type={'radio'}
                                    controlFunc={this.handleYeastSelection}
                                    options={this.state.yeastOptions}
                                    selectedOptions={this.state.yeastSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="log-in brew-tab">
                            <p><i class="fas fa-beer"></i> Base Malt</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'The Base Malt makes up the bulk ratio of your grain selection and is responsible for base flavor and color notes of your beer. The Base Malt is also responsible for the bulk of the alcohol production in your beer. Learn more about Base Malts by clicking on the "Beer University" button from your dashboard. Hover over each selection to get more info about the flavor profile.'}
                                    setName={'base malt'}
                                    controlFunc={this.handleBaseSelection}
                                    type={'radio'}
                                    options={this.state.baseOptions}
                                    selectedOptions={this.state.baseSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="sign-up brew-tab">
                            <p><i class="fas fa-beer"></i> Specialty Grains</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'Specialty Grains add more color and flavor complexity to your beer as well as other characteristics. Learn more about Specialty Grains by clicking on the "Beer University" button from your Dashboard. Hover over each selection to get more info about the flavor profile.'}
                                    setName={'specialty grains'}
                                    type={'checkbox'}
                                    controlFunc={this.handleSpecialSelection}
                                    options={this.state.specialOptions}
                                    selectedOptions={this.state.specialSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="log-in brew-tab">
                            <p><i class="fas fa-beer"></i> Adjuncts</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'Adjuncts are usually un-malted grains which are used to add various characteristics including head retention, smoothness, body, and creaminess. Learn more about Adjuncts by clicking on the "Beer University" button from your Dashboard. Hover over each selection for more info about the flavor profile.'}
                                    setName={'adjuncts'}
                                    type={'checkbox'}
                                    controlFunc={this.handleAdjunctsSelection}
                                    options={this.state.adjunctsOptions}
                                    selectedOptions={this.state.adjunctsSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="sign-up brew-tab">
                            <p><i class="fas fa-beer"></i> Hops</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'Hops are responsible for the level of bitterness in your beer. Hops also provide much of the aroma notes in your finished beer. Learn more about hops by clicking on the "Beer University" button from your Dashboard. Hover over each selection for more info about the flavor profile.'}
                                    setName={'hops'}
                                    type={'checkbox'}
                                    controlFunc={this.handleHopsSelection}
                                    options={this.state.hopsOptions}
                                    selectedOptions={this.state.hopsSelection} />
                                <CheckboxOrRadioGroup
                                    title={'Choose a bitterness level to go along with your hops selection'}
                                    setName={'bitterness'}
                                    controlFunc={this.handleBitterSelection}
                                    type={'radio'}
                                    options={this.state.bitterOptions}
                                    selectedOptions={this.state.bitterSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>

                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="log-in brew-tab">
                            <p><i class="fas fa-beer"></i> Addons</p>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <form className="container">
                                <CheckboxOrRadioGroup
                                    title={'Truly make your beer your own by adding selections from our list of various Addons including spices and fruit extracts.'}
                                    setName={'addons'}
                                    type={'checkbox'}
                                    controlFunc={this.handleAddonsSelection}
                                    options={this.state.addonsOptions}
                                    selectedOptions={this.state.addonsSelection} />
                            </form>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
                <div className="brew-btn-div">
                    <a href="/brew" className="btn create-brew-btn"><i class="fas fa-beer"></i> Create Brew</a>
                </div>
            </div>
        );
    }
}

export default Brew;