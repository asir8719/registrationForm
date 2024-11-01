import { useState } from "react";

export const Login = () => {

    const [user, setUser] = useState({
        userName: "",
        password: "",
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.log(user)

        const response = await fetch("http://localhost:3000",{
            method: "POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user),
        })
        console.log(await response.json())
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setUser((prev) => ({...prev, [name]:value}))
    }

  return (
    <>
      <div>
        <form action="" onSubmit={handleFormSubmit} className="frm shadow-lg p-4 w-1/3 mx-auto shadow-black  rounded-xl bg-white text-black">
        <h1 className="text-4xl mb-4">Login Form</h1>
          <label className="labl"  htmlFor="userName">Username</label>
          <input className="inpt" onChange={handleInputChange} value={user.userName} name="userName" type="text" placeholder="Enter Username" required/>
          <label className="labl"  htmlFor="password">Password</label>
          <input className="inpt" onChange={handleInputChange} value={user.password} name="password" type="password" placeholder="Enter Password" required />
          <button type="submit" className="bg-sky-500 hover:bg-sky-600 w-full p-2 text-white rounded-lg my-4 font-semibold">Login</button>
        </form>
      </div>
    </>
  );
};
