import { useState } from "react"

export const RegistrationUpdated = () => {
    
    const[user,setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser((prev) => ({...prev, [name]:value}))
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        console.log(user)

        const response = await fetch('https://registrationform-sr80.onrender.com', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        const resData = await response.json()
        console.log(resData);
    }

    return (
        <>
        <form action="" onSubmit={handleFormSubmit} className="shadow-lg p-4 w-1/3 mx-auto shadow-black  rounded-xl bg-white text-black">
        <div className="frm">
            <h1 className="text-4xl mb-4">Sign up</h1>
            <p>Please fill this form to create an account.</p>
            <label className="labl" htmlFor="firstName">First Name</label>
            <input className="inpt" value={user.firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Enter firstName" required />
            <label className="labl" htmlFor="lastName">Last Name</label>
            <input className="inpt" value={user.lastName} onChange={handleInputChange} type="text" name="lastName" placeholder="Enter lastName" required />
            <label className="labl" htmlFor="email">Email</label>
            <input className="inpt" value={user.email} onChange={handleInputChange} type="text" name="email" placeholder="Enter Email" required />
            <label className="labl" htmlFor="password">Password</label>
            <input className="inpt" value={user.password} onChange={handleInputChange} type="password" name="password" placeholder="Enter Password" required />
            <label className="labl" htmlFor="phone">Phone Number</label>
            <input className="inpt" value={user.phone} onChange={handleInputChange} type="number" name="phone" placeholder="Enter Phone Number" required />
            <p className="mt-6">By creating an account you agree with our <a href="#">Terms & Privacy</a></p>
        </div>
        <div>
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 w-full p-2 text-white rounded-lg my-4 font-semibold">Sign Up</button>
        </div>
        </form>
        </>
    )
}
