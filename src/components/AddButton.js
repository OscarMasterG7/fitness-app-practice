import React from 'react';
import AddButtonImage from '../images/add.png'
import { Link } from 'react-router-dom'

const AddButton = () => (
        <Link to= '/exercise/new'>
            <img className='Fitness-Add' src= {AddButtonImage} alt='Exercise'></img>  
        </Link>
)   
export default AddButton