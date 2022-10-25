import React from 'react';
import { Button } from 'react-bootstrap';
import './SignIn.css'
import {FaGoogle, FaGithub} from 'react-icons/fa'
const SignIn = () => {
    return (
            <div className='logIn-container'>
           <div>
            <h1 className='title'>please Sign-In </h1>
            <div className='app-wrapper'>
                <form className='form-wrapper'>
                    <div className='name'>
                        <label htmlFor="name" className='name'>full Name</label>
                        <input type="text" className='input' />
                    </div>
                    <div className='name'>
                        <label htmlFor="email" className='name'>Email</label>
                        <input type="email" className='input' />
                    </div>
                    <div className='name'>
                        <label htmlFor="password" className='name'>Password</label>
                        <input type="password" className='input' />
                    </div>
                    <div className='name'>
                        <label htmlFor="name" className='name'>Confirm password</label>
                        <input type="password" className='input' />
                    </div>
                      
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
            </div>
            <div className='third-party'>
            <Button className='third-party1 fs-2' variant="light"><FaGoogle/> Google</Button>
            <Button className='fs-2'> <FaGithub/> Git Hub</Button>
            </div>
        </div>
        </div>
    );
};

export default SignIn;
