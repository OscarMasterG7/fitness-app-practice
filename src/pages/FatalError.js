import React from 'react'
import FatalErrorImg from '../images/500.png'

const FatalError = () => {
    return ( 
        <div>
            <h1>Error 500</h1>
            <img src={FatalErrorImg} alt="Error 500"></img>
        </div>   
    );
}
export default FatalError;