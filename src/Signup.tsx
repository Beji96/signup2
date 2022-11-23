import React from 'react'
import {nanoid} from 'nanoid'

function Signup() {
    const addUser =(e)=>{
        e.preventDefault();
       const { email, password} = e.currentTarget.elements;
       const newUser = {
        id:nanoid(),
        email: email.value,
        password: password.value
        

       }

    }
  return (
    <div>
        <form onSubmit={addUser}>
            <input type="email" name="email" />
            <input type="password" name="password"/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Signup