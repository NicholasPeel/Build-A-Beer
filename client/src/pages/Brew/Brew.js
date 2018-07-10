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
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Input, FormBtn } from "../../components/Form";

class Brew extends Component {

    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            yeastOptions: [
                {
                    name: "WYeast 1056 American Ale",
                    desc: `This beer yeast is used commercially for several classic American ales.
                     It ferments dry, finishes soft, smooth and clean, and is very well balanced. 
                     Apparent attenuation: 73-77%. Flocculation: low–medium. Optimum temp: 60°-72° F`
                },
                {
                    name: "WYeast 1272 American Ale II",
                    desc: `Is fruitier and more flocculant than 1056.
                     It leaves beers with a slightly nutty, soft, clean, slightly tart finish.
                      Apparent attenuation: 72-76%. Flocculation: high. Optimum temp: 60°-72° F`
                },
                {
                    name: "WYeast 1007 German Ale",
                    desc: `This beer yeast ferments dry and crisp, leaving a complex, mild flavor.
                     It produces an rocky head and ferments well down to 55° F.
                      Apparent attenuation: 73-77%. Flocculation: low. Optimum temp: 55°-66° F`
                },
                {
                    name: "WYeast 1028 London Ale",
                    desc: `Is rich with a dry finish, minerally profile, bold and crisp, with some fruitiness.
                     Apparent attenuation: 73-77%. Flocculation: medium. Optimum temp: 60°-72°`
                },
                {
                    name: "WYeast 1318 London Ale III",
                    desc: `Is from a traditional London brewery.
                     It leaves your beer with a great malt and hop profile.
                     It is a true top cropping strain, fruity, very light, soft balanced palate, finishes slightly sweet.
                     Apparent attenuation: 71-75%. Flocculation: high. Optimum temp: 64°-74° F`
                },
                {
                    name: "WYEast 2007 Pilsen Lager",
                    desc: `This is a classic American pilsner strain.
                     It makes beer with a smooth, malty palate and ferments dry and crisp.
                      Apparent attenuation: 71-75%. Flocculation: medium. Optimum temp: 48°-56° F`
                },
                {
                    name: "WYeast 2035 American Lager",
                    desc: `Beers are bold, complex and aromatic, with good depth of flavor.
                     Use it for a variety of lager beers.
                      Apparent attenuation: 73-77%. Flocculation: medium. Optimum temp: 48°-58° F`
                },
                {
                    name: "WYeast 2206 Bavarian Lager",
                    desc: `is used by many German breweries to produce rich, full-bodied, malty beers.
                     It is a good choice for Bocks and Dopplebocks.
                      Apparent attenuation: 73-77%. Flocculation: medium. Optimum temp: 46°-56° F`
                },
                {
                    name: "WYeast 2308 Munich Lager",
                    desc: `Is a unique strain, capable of producing fine lagers with very smooth,
                     well-rounded and full-bodied characteristics.
                      It benefits from a temperature rise for diacetyl rest.
                       Apparent attenuation: 73-77%. Flocculation: medium. Optimum temp: 48°-56° F`
                }
            ],
            yeastSelection: ["WYeast 1056 American Ale"],
            baseOptions: [
                {
                    name: "Two Row Malt",
                    desc: `Two-row base malt is made from two-row barley,
                     which typically features plump kernels and a high starch to protein ratio.
                      Light in color at 1.8˚L.`
                },
                {
                    name: "Pilsner Malt",
                    desc: `This base malt is the lightest colored malt available (1˚ Lovibond).
                     It works well for very light lagers and ales.
                      Its profile makes it a suitable base malt for brewing just about any style of beer,
                       but it is a must when making a pilsner lager.`
                },
                {
                    name: "Pale Ale Malt",
                    desc: `As a comparison, pale malt is kilned at a slightly higher temperature than pilsner malt,
                     giving it a slightly darker color (2.5˚L) and a maltier flavor.
                      It’s a good option for just about any ale recipe,
                       especially pale ale, IPA, brown ale, porter, and stout.`
                },
                {
                    name: "Vienna Malt",
                    desc: ` Vienna malt is another step above pale malt in terms of darkness (3.5˚L).
                     It’s a great option for Vienna lagers, Oktoberfest, and other amber lagers.`
                },
                {
                    name: "Munich Malt",
                    desc: `This base malt is the darkest malt that still has diastatic power.
                     Its flavor profile is has rich, malty flavor reminiscent of bread crusts.
                      As much as 100% Munich malt may be used in some types of German-style dark
                       lagers, such as bocks and Munich dunkel. 10-20˚L.`
                }
            ],
            baseSelection: ["Two Row Malt"],
            specialOptions: [
                {
                    name: "Amber Malt",
                    desc: `This roasted malt gives off a biscuit flavor and is used in brown,
                     Belgium and British ales.  The color is 15-25L.`
                },
                {
                    name: "Aromatic Malt",
                    desc: `This kilned malt is used in mostly Belgium brews.
                      It has a very strong flavor and deep color of 15-25L.`
                },
                {
                    name: "Biscuit Malt",
                    desc: `This Belgium malt gives off a biscuit and toasty finishing flavor.
                      Creates a medium brown color.  Must be mashed with malts that have extra diastatic powder.
                        20-25L`
                },
                {
                    name: "Black Malt",
                    desc: ` Malted barley used in gives you a strong roasted flavor
                     used in stouts, porters, and dark lagers.  Use sparingly.  600+L`
                },
                {
                    name: "Brown Malt",
                    desc: `  A rarely used grain that imparts a spicy and smoky
                     flavor commonly found in brown ales and stouts.  75-150L`
                },
                {
                    name: "Crystal Malt",
                    desc: `These malts add the a beers color, mouth feel,
                     and imparts a nutty or caramel flavor.  
                     The intensity depends on the SRM ratings from 10-120L.`
                },
                {
                    name: "Chocolate Malt",
                    desc: `A Roasted malt that is very pungent and gives off a very dark color.  
                    It adds a nutty chocolaty taste to dark beers.  300-450L`
                },
                {
                    name: "Honey Malt",
                    desc: `Adds a honey sweetness to any beer and lacks any bitter flavors.
                      Does not add any color.`
                },
                {
                    name: "Smoked Malt",
                    desc: `Adds a sweet smoky flavor to the beer.
                      Can be used in various Scottish Ales and porters.   5L`
                },
                {
                    name: "Special B",
                    desc: `A dark Belgium caramel malt that also contributes
                     the most flavor and color.  The caramel taste has been described 
                     as raisiny, woody, and pruney.  Contributes a dark brown color.  100-220L

`
                },
                {
                    name: "Victory Malt",
                    desc: ` This grains lends a brown coloring to
                     beer along with toasty biscuit notes.
                       Used in darker ales and lager.  3-7L`
                }
            ],
            specialSelection: ["Amber Malt"],
            adjunctsOptions: [
                {
                    name: "Flaked Barley",
                    desc: `An unmalted malt used in stouts and German lagers 
                    to improve head retention, creaminess and body.  
                    Has a grainy taste and does not affect color.  2L`
                },
                {
                    name: "Flaked Maize",
                    desc: ` A adjunct used to increase alcohol.  
                    Used in light beers.  Does not affect color, 
                    and for the most part, flavor.`
                },
                {
                    name: "Flaked Oats",
                    desc: `Used in stouts and Belgium ale to create smoothness.  
                    Counteracts hard water.  Does not affect color.`
                },
                {
                    name: "Flaked Rye",
                    desc: `Used with highly modified malts to deliver a dry, crisp, strong flavor. 
                     Not typically used in standard beer varieties.  1-3L`
                },
                {
                    name: "Flaked Wheat",
                    desc: ` Used to increase body and head retention in 
                    moderate amounts (4-6 ounces) with other highly modified malts.  2.7L`
                },
                {
                    name: "Black Barley",
                    desc: `Roasted unmalted barley that has a dry stout flavor.  550+L`
                }
            ],
            adjunctsSelection: ["Flaked Barley"],
            hopsOptions: [
                {
                    name: "Aurora",
                    desc: `AROMA PROFILE: EARTHY, HERBAL
                        A diploid hybrid of Northern Brewer and a TG seedling of unknown origin, 
                        Aurora displays an intense yet pleasant aroma in finished beers. 
                        It is also known as Super Styrian.`
                },
                {
                    name: "Bramling Cross",
                    desc: `AROMA PROFILE: SPICY, FRUITY
                        Developed at Wye College by Professor Salmon. 
                        Often used in traditional cask conditioned beers due to its distinct 
                        characteristics.`
                },
                {
                    name: "Centennial",
                    desc: `AROMA PROFILE: FLORAL, CITRUS
                        Bred in 1974 and released by Washington State University in 1990, 
                        Centennial is an aroma-type cultivar that has found favor as one of 
                        the most popular varieties in craft brewing. It is often referred to 
                        as a super-Cascade (containing nearly double the alpha content) and can 
                        be used for bittering purposes. Centennial is a diploid cross between 
                        Brewer's Gold and a USDA male.`
                },
                {
                    name: "Challenger",
                    desc: `AROMA PROFILE: FRUITY, HERBAL, CEDAR
                        Bred at Wye College and introduced in 1972, Challenger is a 
                        granddaughter of Northern Brewer and niece of Northdown. It is a versatile 
                        variety with wide application in both early and late kettle additions.`
                },
                {
                    name: "Chinook",
                    desc: `AROMA PROFILE: CITRUS, SPICY, PINE
                        Developed by the USDA breeding program in Washington State and released 
                        in 1985 as a high alpha bittering variety, Chinook is a cross between 
                        Petham Golding and a USDA male. In recent years, it has found favor as 
                        a dual purpose hop in the craft brewing community as a result of its spice 
                        and pine aroma characteristics.`
                },
                {
                    name: "East Kent Golding",
                    desc: `AROMA PROFILE: CITRUS, SPICY
                        Developed from wild Canterbury Whitebine in the late 1700s, East Kent 
                        Godling is the quintessential English variety. It has been used in kettle 
                        and dry hopping and is known for is subtle citrus, floral and herbal 
                        characteristics.`
                },
                {
                    name: "Glacier",
                    desc: `AROMA PROFILE: FRUITY, CEDAR
                        Released in 2000 by Washington State University, Glacier is an 
                        offspring of French Elsasser, Brewer's Gold and Northern Brewer. 
                        It was selected for its good yield potential and low co-humulone, 
                        providing smoothness and balanced bitterness in beer.`
                },
                {
                    name: "Mt. Rainier",
                    desc: `AROMA PROFILE: FLORAL, HERBAL
                        Bred by Oregon State University, Mt. Rainier is a dual purpose variety 
                        with noble aroma characteristics. It is similar to the classic German 
                        variety, Hallertau Mittelfrüh, but features more bittering strength.`
                },
                {
                    name: "Northern Brewer",
                    desc: `AROMA PROFILE: PINE, HERBAL, CEDAR
                        Bred in England in 1934 from a Canterbury Golding plant and male 
                        seedling of Brewer's Gold, Northern Brewer is mainly grown in the 
                        United States and Germany. US Northern Brewer contains slightly higher 
                        alpha acids and high myrcene oil content resulting in herbal, wood and
                         peppery aroma characteristics; it is suitable for any stage of the 
                         brewing process.`
                },
                {
                    name: "Pacific Jade",
                    desc: `AROMA PROFILE: CITRUS, SPICY, HERBAL
                        Developed by the New Zealand Institute for Plant and Food Research 
                        hop breeding program and released in 2004, Pacific Jade is a cross of 
                        New Zealand First Choice (a relative of the Late Cluster) and a Saaz male. 
                        It is suited for use as a bittering hop but also delivers bold citrus and 
                        spice aroma characteristics.`
                },
                {
                    name: "Polaris",
                    desc: `AROMA PROFILE: TROPICAL FRUIT, HERBAL
                        Bred at the Hop Research Institute in Hüll and released in 2012, 
                        Polaris was commercialized as a new, German variety in response 
                        to growing demand from the craft beer industry for distinct flavor 
                        profiles. It features extremely high alpha content along with intense 
                        mint flavors.`
                },
                {
                    name: "Waimea",
                    desc: `AROMA PROFILE: CITRUS, PINE
                        Released from The New Zealand Institute for Plant & Food Research 
                        Limited’s Motueka Research Centre, Waimea™ is well-suited to dual purpose 
                        applications from early kettle additions right through to dry hopping. 
                        It exudes quality bitterness and aroma abound with fruity citrus and pine 
                        characters from this hop's big weight of oil. A big hop for big beers, it 
                        an be used across a wide array of styles in a variety of brewhouse and dry 
                        hopping applications.`
                },
                {
                    name: "Wakatu",
                    desc: `AROMA PROFILE: FLORAL, CITRUS
                        Developed by the New Zealand Institute for Plant and Food Research 
                        hop breeding program and released in 1988, as Hallertau Aroma, Wakatu™ was 
                        renamed in 2011. It is a triplod variety with two thirds Hallertau Mittelfrüh 
                        parentage. Wakatu™ is a well rounded variety with strong, fresh citrus 
                        characteristics and some bittering capabilities.`
                }
            ],
            hopsSelection: ["Aurora"],
            addonsOptions: [
                {
                    name: "Belgian Candi Sugar",
                    desc: "Belgian Candi Sugar"
                },
                {
                    name: "Bitter Orange Peel",
                    desc: "Bitter Orange Peel"
                },
                {
                    name: "Cardamom Seed",
                    desc: "Cardamom Seed"
                },
                {
                    name: "Cinnamon Sticks",
                    desc: "Cinnamon Sticks"
                },
                {
                    name: "Elderberries",
                    desc: "Elderberries"
                },
                {
                    name: "Apple Flavoring",
                    desc: "Apple Extract"
                },
                {
                    name: "Apricot Flavoring",
                    desc: "Apricot Extract"
                },
                {
                    name: "Blackberry Flavoring",
                    desc: "Blackberry Extract"
                },
                {
                    name: "Cherry Flavoring",
                    desc: "Cherry Extract"
                },
                {
                    name: "Blood Orange Flavoring",
                    desc: "Blood Orange Extract"
                },
                {
                    name: "Blueberry Flavoring",
                    desc: "Blueberry Extract"
                },
                {
                    name: "Cranberry Flavoring",
                    desc: "Cranberry Extract"
                },
                {
                    name: "Ginger",
                    desc: "Ginger Extract"
                },
                {
                    name: "Jalepeno",
                    desc: "Jalepeno"
                },
                {
                    name: "Maple",
                    desc: "Maple"
                },
                {
                    name: "Mango Flavoring",
                    desc: "Mango Extract"
                },
                {
                    name: "Peach Flavoring",
                    desc: "Peach Extract"
                },
                {
                    name: "Pear Flavoring",
                    desc: "Pear Extract"
                },
                {
                    name: "Pineapple Flavoring",
                    desc: "Pineapple Extract"
                },
                {
                    name: "Lemon Peel",
                    desc: "Lemon Peel"
                },
                {
                    name: "Licorice Stick",
                    desc: "Licorice Stick"
                },
                {
                    name: "Rose Hips",
                    desc: "Rose Hips"
                }
            ],
            addonsSelection: ["Belgian Candi Sugar"],
            bitterOptions: [
                {
                    name: "Mild",
                    desc: "Gives a low level of bitterness"
                },
                {
                    name: "Standard",
                    desc: "Gives a standard level of bitterness found in most beers"
                },
                {
                    name: "Hoptastic",
                    desc: "Gives a more hoppy flavor and bitterness similar to a stout"
                },
                {
                    name: "Hopcrazy",
                    desc: "Gives a high level of bitterness similar to an IPA"
                }
            ],
            bitterSelection: ["Standard"],
            open: false,
            beerName: ""
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

    handleCreateBrew = event => {
        event.preventDefault();
        API.createBrew({
            yeast: this.state.yeastSelection,
            baseMalt: this.state.baseSelection,
            specialtyGrains: this.state.specialSelection,
            adjuncts: this.state.adjunctsSelection,
            hops: this.state.hopsSelection,
            bitter: this.state.bitterSelection,
            addons: this.state.addonsSelection,
            beerName: this.state.beerName,
            date: Date.now,
            creator: sessionStorage.getItem("id")
        })
            .then(res => {
                API.updateBeerTotal({
                    userID: sessionStorage.getItem("id")
                })
                    .then(res => {
                        sessionStorage.setItem("beerNum", res.data.beerNum);
                        console.log(sessionStorage);
                        window.location = "/dashboard";
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

    render() {
        const { open } = this.state;
        return (
            <div className="brew-page">
                <p className="brew-title">Create A Brew</p>
                <p className="brew-desc">Go through each menu option and choose from our list of premium brewing ingredients. Choose one Yeast Strain and one base malt. Then choose up to three options each, from Specialty Grains, Hops, and Addons</p>
                <Accordion className="accordion">
                    <AccordionItem>
                        <AccordionItemTitle className="sign-up brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Yeast</p>
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
                        <AccordionItemTitle className="log-in brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Base Malt</p>
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
                        <AccordionItemTitle className="sign-up brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Specialty Grains</p>
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
                        <AccordionItemTitle className="log-in brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Adjuncts</p>
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
                        <AccordionItemTitle className="sign-up brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Hops</p>
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
                        <AccordionItemTitle className="log-in brew-tab hvr-fade hvr-grow-shadow">
                            <p><i className="fas fa-beer"></i> Addons</p>
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

                <form>
                    <p className="">Name Your Beer:</p>
                    <Input
                        className="brew-name-input"
                        value={this.state.beerName}
                        onChange={this.handleInputChange}
                        name="beerName"
                    />
                </form>

                <div className="brew-btn-div">
                    <button className="btn create-brew-btn profileBtn hvr-fade hvr-grow-shadow" onClick={this.onOpenModal}><i className="fas fa-beer"></i> Create Brew</button>
                    <Modal classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }} open={open} onClose={this.onCloseModal} closeOnEsc={false} closeOnOverlayClick={false} showCloseIcon={true} closeIconSize={50} center>
                        <p className="modal-title">Confirm Your Brew</p>
                        <div>
                            <p className="modal-category">Beer Name:</p>
                            <p className="modal-selection">{this.state.beerName}</p>
                        </div>
                        <div>
                            <p className="modal-category">Yeast Selection:</p>
                            <p className="modal-selection">{this.state.yeastSelection}</p>
                        </div>
                        <div>
                            <p className="modal-category">Base Malt Selection:</p>
                            <p className="modal-selection">{this.state.baseSelection}</p>
                        </div>
                        <div>
                            <p className="modal-category">Specialty Grains Selection:</p>
                            <p className="modal-selection">{this.state.specialSelection.join(",  ")}</p>
                        </div>
                        <div>
                            <p className="modal-category">Adjuncts Selection:</p>
                            <p className="modal-selection">{this.state.adjunctsSelection.join(",  ")}</p>
                        </div>
                        <div>
                            <p className="modal-category">Hops Selection:</p>
                            <p className="modal-selection">{this.state.hopsSelection.join(",  ")}</p>
                            <p className="modal-category">Bitter Level:</p>
                            <p className="modal-selection">{this.state.bitterSelection}</p>
                        </div>
                        <div>
                            <p className="modal-category">Addons Selection:</p>
                            <p className="modal-selection">{this.state.addonsSelection.join(",  ")}</p>
                        </div>
                        <div>
                            <button className="btn profileBtn hvr-fade hvr-grow-shadow" onClick={this.handleCreateBrew}><i className="fas fa-beer"></i> Create Brew</button>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Brew;