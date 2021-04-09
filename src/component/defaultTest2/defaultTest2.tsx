import React, {useState} from 'react'
import {CSSTransition} from "react-transition-group";

import './defaultTest2.css'

const DefaultTest2 = (): JSX.Element => {

    const [showElement, setShowElement] = useState(false);

    const toggleElement = () => {
        setShowElement(!showElement);
    }

    return(
        <div>
            <button onClick={toggleElement}>Toggle Element</button>
            <CSSTransition
                in={showElement}
                timeout={300}
                unmountOnExit>
                <div className='moreTest'>
                    <h2>Let's do this!</h2>
                    <p>We can try!</p>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DefaultTest2;