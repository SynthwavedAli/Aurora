import React, {useState} from 'react'
import './Greet.css';

function Greet() {
    const [firstName, setFirstName] = useState('');
    return <div> 
        <div className="text-colored-div">
            Start Chatting With Planet Ai
        </div>

        <div className="credit-colored-div">
            Made By Ali Shirazi Using React Enjoy
        </div>

        
    </div>
}


export default Greet