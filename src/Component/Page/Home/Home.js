import React from 'react';
import './Home.css';
import background from '../../../images/bannerbackground.png'
import MiddleNav from '../../Shared/MiddleNav/MiddleNav';


const Home = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className='header-part mt-2 img-fluid'>


                <div className=" search-container mt-4 ">
                    <h1 className='search-text mb-4' >Best Food Waiting For Your Belly</h1>
                    <input type="text" className="search-input " placeholder="    search food items" />
                    <button className="search-btn" id="search-btn"> Search </button>
                </div>

            </div>
            <MiddleNav></MiddleNav>



        </div>
    );
};

export default Home;