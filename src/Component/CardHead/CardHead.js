import React from 'react';
import { Container } from 'react-bootstrap';

const CardHead = () => {
    return (
        <div>
            <Container>

                <div className='position-relative z-3  ' >
                    <div className=' position-absolute top-0 start-0  ' >
                        <h3 className="text-start" > Why You Choose Us </h3>
                        <p className="text-start" ><small>Easy, confident home pressure canning vegetables, meats, poultry, and seafood. <br /> Doubles as a boiling water canner for fruits, jams, jellies, pickles,</small></p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CardHead;