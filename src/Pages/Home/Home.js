import React from 'react';
import './Home.css';

import img1 from '../../access/21-217008_value-of-media-and-information-literate-hd-png.png';

const Home = () => {
    return (
        <div>
            <div className='d-lg-flex align-items-center m-5'>
           <img className='home-img'  src={img1} alt="" />
           <h1 className='ms-5  mt-sm-4'>The advantages and disadvantages <br /> of Social Logins: What you need to know</h1>
        </div>

        <h3 className='text-center '>Social login is a type of account authentication that allows users to enter 
        <br /> the site or app without creating an account. Instead, they use their <br /> credentials from a third-party provider such as Facebook, 
        <br /> Twitter, Google+, or LinkedIn.</h3>

     <p className='text-center  mt-5 '>This concept has become increasingly popular with social media users,  with more than 65% of users on Facebook using this service.

        The purpose <br /> of social login or social sign-on is to make it easier for members to join websites without creating an account.
      <br /> However, there are some distinct pros and cons associated with relying on one social media platform to store important information for <br /> multiple accounts in one place.

       In this article, we’ll talk about the <br /> advantages and disadvantages of using social logins, whether it’s safe to 
       incorporate <br /> them into your daily life, and the best practices surrounding this concept.
       </p>
        </div>
    );
};

export default Home;