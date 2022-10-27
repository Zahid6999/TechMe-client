import React, { useContext, useState } from 'react';

import { Button } from 'react-bootstrap';

import {FaGoogle, FaGithub} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
 const {createUser} = useContext(AuthContext);
 const navigate = useNavigate()



    const handleForm = (event) => {
     event.preventDefault();

     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     const confirm = form.confirm.value;
     console.log(name, email, password, confirm);
     
     createUser(email, password)
     .then(result => {
        const user = result.user;
        console.log(user);
        form.reset()
        setError('')
        navigate('/')
     })
     .catch(error => {
        console.log(error)
        setError(error.message)
    
    })
    }
    return (
        <div className='logIn-container'>
           <div>
            <h1 className='title'>Register </h1>
            <div className='app-wrapper'>
                <form onSubmit={handleForm} className='form-wrapper'>
                    <div className='name'>
                        <label htmlFor="name" className='name'>full Name</label>
                        <input type="text" name='name' className='input' />
                    </div>
                    <div className='name'>
                        <label htmlFor="email" className='name'>Email</label>
                        <input type="email" name='email' className='input'  required/>
                    </div>
                    <div className='name'>
                        <label htmlFor="password" className='name'>Password</label>
                        <input type="password" name='password' className='input'  required/>
                    </div>
                    <div className='name'>
                        <label htmlFor="name" className='name'>Confirm password</label>
                        <input type="password" name='confirm' className='input'  required/>
                    </div>
                      
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
                <p className='mt-3 text-center'>You have Already account then go to <Link to='/signin'>sign-in</Link></p>
                {error}
            </div>
            <div className='third-party'>
            <Button className='third-party1 fs-2' variant="light"><FaGoogle/> Google</Button>
            <Button className='fs-2'> <FaGithub/> Git Hub</Button>
            </div>
        </div>
        </div>
    );
};

export default Register;