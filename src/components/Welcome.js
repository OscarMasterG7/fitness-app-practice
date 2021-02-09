import React from 'react';
import './styles/Welcome.css'

/* Forma Clasica
function Welcome(props){
    return()
}
export default Welcome;
*/

const Welcome = ({username}) => (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {username}!</h1>
                <p>Animos conseguiras ese trabajo!</p>
            </div>
        </div>
)
export default Welcome;