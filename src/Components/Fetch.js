import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Activities from './Activities';

const Fetch = ({ stateAbrv }) => {

    const [data, setData] = useState([]);
    const [actv, setActv] = useState([]);
    const [showActivities, setShowActivities] = useState(false)

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

    const handleClick = (arg) => {
        console.log(arg.activities)
        setActv(arg.activities)
        setShowActivities(true)
    }

    return (
        <div>
            <h3>Parks</h3>
            <ul>
                {data.map(park => (
                    <li key={park.fullName}>
                        Park Name: {park.fullName} Activities: <button
                            onClick={() => handleClick(park)}
                            style={{
                                borderRadius: '50%',
                                background: 'blue',
                                color: 'white'
                            }}>
                            {park.activities.length}
                        </button>
                    </li>
                ))}
            </ul>

            {showActivities && (
                <Activities
                actv={actv}
                />
            )}

        </div>
    )
}

export default Fetch
