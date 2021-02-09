import React from 'react'
import NotFoundImg from '../images/404.png'

const NotFound = () => {
    return ( 
        <div>
            <h1>NOT FOUND</h1>
            <img src={NotFoundImg} alt='404 not found error'></img>
        </div>
    );
}
export default NotFound;