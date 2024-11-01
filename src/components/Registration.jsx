import { useState } from "react"

export const Registration = () => {
    
    const[firstName,setFirstName] = useState("")
    const[lastName,setLastName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[phone,setPhone] = useState("")

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'firstName':
                setFirstName(value)
                break;
            case 'lastName':
                setLastName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            case 'phone':
                setPhone(value)
                break;
        
            default:
                break;
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phone,
        }
        console.log(formData)

        const response = await fetch('http://localhost:3000', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
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
            <input className="inpt" value={firstName} onChange={handleInputChange} type="text" name="firstName" placeholder="Enter firstName" required />
            <label className="labl" htmlFor="lastName">Last Name</label>
            <input className="inpt" value={lastName} onChange={handleInputChange} type="text" name="lastName" placeholder="Enter lastName" required />
            <label className="labl" htmlFor="email">Email</label>
            <input className="inpt" value={email} onChange={handleInputChange} type="text" name="email" placeholder="Enter Email" required />
            <label className="labl" htmlFor="password">Password</label>
            <input className="inpt" value={password} onChange={handleInputChange} type="password" name="password" placeholder="Enter Password" required />
            <label className="labl" htmlFor="phone">Phone Number</label>
            <input className="inpt" value={phone} onChange={handleInputChange} type="number" name="phone" placeholder="Enter Phone Number" required />
            <p className="mt-6">By creating an account you agree with our <a href="#">Terms & Privacy</a></p>
        </div>
        <div>
            <button type="submit" className="bg-sky-500 hover:bg-sky-600 w-full p-2 text-white rounded-lg my-4 font-semibold">Sign Up</button>
        </div>
        </form>
        </>
    )
}