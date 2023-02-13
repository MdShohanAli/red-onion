import React from 'react';
import { Container } from 'react-bootstrap';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './MiddleNav.css';
import breakfast1 from '../../../images/breakfast/breakfast1.png'
import breakfast2 from '../../../images/breakfast/breakfast2.png'
import breakfast3 from '../../../images/breakfast/breakfast3.png'
import breakfast4 from '../../../images/breakfast/breakfast4.png'
import breakfast5 from '../../../images/breakfast/breakfast5.png'
import breakfast6 from '../../../images/breakfast/breakfast6.png'
import lunch1 from '../../../images/lunch/lunch1.png'
import lunch2 from '../../../images/lunch/lunch2.png'
import lunch3 from '../../../images/lunch/lunch3.png'
import lunch4 from '../../../images/lunch/lunch4.png'
import lunch5 from '../../../images/lunch/lunch5.png'
import lunch6 from '../../../images/lunch/lunch6.png'
import dinner1 from '../../../images/dinner/dinner1.png'
import dinner2 from '../../../images/dinner/dinner2.png'
import dinner3 from '../../../images/dinner/dinner3.png'
import dinner4 from '../../../images/dinner/dinner4.png'
import dinner5 from '../../../images/dinner/dinner5.png'
import dinner6 from '../../../images/dinner/dinner6.png'



const MiddleNav = () => {
    return (
        <div>

            <Tabs defaultIndex={0} >
                <TabList>
                    <Tab> Breakfast </Tab>
                    <Tab> Lunch </Tab>
                    <Tab> Dinner </Tab>
                </TabList>
                <TabPanel >
                    <Container >
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card  ">
                                    <img src={breakfast1} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card">
                                    <img src={breakfast2} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Snake Food</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$20.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={breakfast3} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5 ">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={breakfast4} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={breakfast5} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={breakfast6} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel>
                    <Container >
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={lunch1} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card">
                                    <img src={lunch2} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Snake Food</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$20.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={lunch3} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5 ">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={lunch4} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={lunch5} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={lunch6} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </TabPanel>
                <TabPanel>
                    <Container >
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={dinner1} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card">
                                    <img src={dinner2} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Snake Food</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$20.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={dinner3} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3 g-4 mt-2 mb-5 ">
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={dinner4} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={dinner5} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100 p-2 shadow-card ">
                                    <img src={dinner6} className="card-img-top" alt="..." />
                                    <div className="card-body ">
                                        <h5 className="card-title">Healthy Meal Plan</h5>
                                        <p className="card-text">How We Dream About Our Future</p>
                                        <h3>$23.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </TabPanel>

            </Tabs>

        </div>
    );
};

export default MiddleNav;