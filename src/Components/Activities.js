import React from 'react'

const Activities = ({actv}) => {

    console.log(actv)
    //pull out 'name' values and display in a map

    return (
        <div>
            <h3>Activities</h3>
            {actv.map(activity =>(
                <li key={activity.name}>
                    {activity.name}
                </li>
            ))}
        </div>
    )
}

export default Activities
