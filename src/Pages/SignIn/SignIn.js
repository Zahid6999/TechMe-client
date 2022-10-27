import React from 'react';
import { Button } from 'react-bootstrap';
import './SignIn.css'
import {FaGoogle, FaGithub} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const SignIn = () => {

    const [error, setError] = useState('');
const {signInProvider, githubSignInProvider, signInUser} = useContext(AuthContext);
const navigate = useNavigate();

// porvider----------
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
// Handler ------------
const handleForm = (event) => {
 event.preventDefault();

 const form = event.target;
 const email = form.email.value;
 const password = form.password.value;
 console.log(email, password);
 form.reset()

    signInUser(email, password)
    .then(result => {
        const user = result.user ;
        navigate('/')
        setError('')
        console.log(user);
    })
    .catch(e => {
        console.error('error', e)
        setError(e.message);
    })
}


const handleGoogle = () => {
    signInProvider(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log('ErroR Name', error))
}



 const handleGitHub = () =>{
    githubSignInProvider(githubProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log('Error is', error))
 }

    return (
            <div className='logIn-container'>
           <div>
            <h1 className='title'>please Sign-In </h1>
            <div className='app-wrapper'>
                <form onSubmit={handleForm} className='form-wrapper'>
                   
                    <div className='name'>
                        <label htmlFor="email" className='name'>Email</label>
                        <input type="email" name='email' className='input' required/>
                    </div>
                    <div className='name'>
                        <label htmlFor="password" className='name'>Password</label>
                        <input type="password" name='password' className='input' required/>
                    </div>
                   
                      
                    <input className='submit-btn' type="submit" value="Submit" />
                    <div>
                        <p className='text-danger'>{error}</p>
                    </div>
                </form>
                <p className='mt-4 text-center'>you have first time visit go to <Link to='/register'>register now</Link></p>
            </div>
            <div className='third-party'>
            <Button onClick={handleGoogle} className='third-party1 fs-2' variant="light"><FaGoogle/> Google</Button>
            <Button onClick={handleGitHub} className='fs-2'> <FaGithub/> Git Hub</Button>
            </div>
        </div>
        </div>
    );
};

export default SignIn;
