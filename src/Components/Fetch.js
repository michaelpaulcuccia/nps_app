import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = ({ stateAbrv }) => {
    
    const [data, setData] = useState([]);

    const url = `https://developer.nps.gov/api/v1/parks?stateCode=${stateAbrv}&api_key=`;
    const key = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const getData = async () => {

            let response = await axios(`${url}${key}`);
            let responseArray = response.data.data;
            setData(responseArray)
        };

        getData()

    }, [stateAbrv]);


    return (
        <div>
            <ul>
                {data.map(park => (
                    <li key={park.fullName}>
                        {park.fullName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch
