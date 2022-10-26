import React from 'react';
import { Button } from 'react-bootstrap';
import './SignIn.css'
import {FaGoogle, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
const {signInProvider, githubSignInProvider} = useContext(AuthContext);

// porvider----------
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
// Handler ------------
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
                <form className='form-wrapper'>
                   
                    <div className='name'>
                        <label htmlFor="email" className='name'>Email</label>
                        <input type="email" className='input' />
                    </div>
                    <div className='name'>
                        <label htmlFor="password" className='name'>Password</label>
                        <input type="password" className='input' />
                    </div>
                   
                      
                    <input className='submit-btn' type="submit" value="Submit" />
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
