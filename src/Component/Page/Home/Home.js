import React from 'react';
import './Home.css';


const Home = () => {
    return (
        <div className='contain' >
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL = "/public/bannerbackground.png"})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }} className='header-part mt-2 img-fluid'>


                <div className=" search-container mt-4 ">
                    <h1 className='search-text mb-4' >Best Food Waiting For Your Belly</h1>
                    <input type="text" className="search-input " placeholder="    search food items" />
                    <button className="search-btn" id="search-btn"> Search </button>
                </div>

            </div>

        </div>
    );
};

export default Home;