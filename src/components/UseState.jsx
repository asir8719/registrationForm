import { useState } from "react"

// const users= [
//     {name:"Ahmad", age:25},
//     {name:"Ashad", age:30},
//     {name:"Yahya", age:35},
//     {name:"Abbas", age:45}
// ]

export const DerivedState = ()=>{

    const [users, setUsers] = useState([ 
        {name:"Ahmad", age:25},
        {name:"Ashad", age:30},
        {name:"Yahya", age:35},
        {name:"Abbas", age:45}
    ])

    // Derived state
    const userCount = users.length
    // Derived state
    const averageAge = users.reduce((accu, curElem) => accu + curElem.age, 0)/userCount

    return(
        <div className="main-div">
            <h1>Users List</h1>
            <ul>
                {
                    users.map((curElem, index)=>{
                       return( <li key={index}>
                            {curElem.name} - {curElem.age} years old
                        </li> )   
                    })
                }
                <li>Total users: {userCount}</li>
                <li>Average Age: {averageAge}</li>
            </ul>
        </div>
    )
} 