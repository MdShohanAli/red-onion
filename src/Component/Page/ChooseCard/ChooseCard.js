import React from 'react';
import { Container } from 'react-bootstrap';
import Delevery from '../../../images/adult-blur-blurred-background-687824.png'
import Responder from '../../../images/chef-cook-food-33614.png'
import fast from '../../../images/architecture-building-city-2047397.png'
import icon1 from '../../../images/icons/Group 204.png'
import './ChooseCard.css'

const ChooseCard = () => {
    return (
        <div>
            <Container>
                <div class="card-group mt-5  ">

                    <div class="card border-0 cards  ">
                        <img src={Delevery} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <div className='d-flex' >
                                <div>
                                    <img src={icon1} style={{ width: '35px' }} alt="" />
                                </div>
                                <div className='mx-3 text-style ' >
                                    <h5 class="card-title text-start">First Delivery</h5>
                                    <p>
                                        <small className='text-start' >
                                            eCourier p2p parcel delivery service allows you to send parcel easily across Bangladesh. Get the best delivery service with tracking facilities without ...
                                        </small>
                                    </p>
                                    <a href="#" className='text-decoration-none' > See More details </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card border-0 cards mx-3 ">
                        <img src={Responder} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card border-0 cards ">
                        <img src={fast} class="card-img-top" alt="..." />
                        <div class="card-body  ">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </Container >
        </div >

    );
};

export default ChooseCard;