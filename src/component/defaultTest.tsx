import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './defaultTest.css'

const DefaultTest = (): JSX.Element => {

    let { test } = useParams() as {
        test: string
    };

    useEffect(() => {
        console.log(test);
    })

    return (
        <div className='testClass'>
            <h2>Test Value</h2>
            <p>{test}</p>
            <p>Does this work?</p>
        </div>
    )
}

export default DefaultTest;