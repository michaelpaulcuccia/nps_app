import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Activities from './Activities';
import '../Styles/FetchStyle.css'

const Fetch = ({ stateAbrv }) => {

    const [data, setData] = useState([]);
    const [actv, setActv] = useState([]);
    const [fullName, setFullName] = useState('');
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
        setFullName(arg.fullName)
        setShowActivities(true)
    }

    return (

        <div>

            <div>
            <p className="label_text">Parks</p>
            </div>
        
            <div className="list_container">
            <ul>
                {data.map(park => (
                    <li key={park.fullName}
                    className="list_content"
                    >
                        <strong>Park Name:</strong> {park.fullName} <strong>Activities:</strong> <button
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
            </div>
                

        {showActivities && (
                <Activities
                actv={actv}
                fullName={fullName}
                />
            )}

        </div>
    )
}

export default Fetch
