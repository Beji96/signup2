import React from 'react'
import {nanoid} from 'nanoid'
import {useStore} from './store'


console.log(useStore);

function Signup() {
    const addUser =(e)=>{
        e.preventDefault();
       const { email, password} = e.currentTarget.elements;
       const newUser = {
        id:nanoid(),
        email: email.value,
        password: password.value
       }
    useStore((state) => state.addUser(newUser))


    }
    const users = useStore((state) => state.users);
   console.log(users);
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