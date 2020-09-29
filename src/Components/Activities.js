import React from 'react'

const Activities = ({ actv, fullName }) => {

    return (
        <div>
            <p className="label_text">Activities at {fullName} </p>
            <div className='list_container'>
                <ul>
                    {actv.map(activity => (
                        <li key={activity.name}>
                            {activity.name}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Activities
