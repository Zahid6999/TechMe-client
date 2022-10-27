import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
           <div className='card'>
            <h1 className='fs-2 text-center text-bg-info p-2'> What is cors?</h1>
          <p>Cross-origin resource sharing (CORS)
            In this section, we will explain what cross-origin resource sharing (CORS) is, describe some common examples of cross-origin resource sharing based attacks, and discuss how to protect against these attacks. This topic was written in collaboration with PortSwigger Research, who popularized this attack class with the presentation Exploiting CORS misconfigurations for Bitcoins and bounties.

            What is CORS (cross-origin resource sharing)?
            Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
           </div>



           <div className='card'>
            <h1 className='fs-2 text-center text-bg-info p-2'> Why are you using firebase?   </h1>
          <p className=''>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together..</p>

          <h1 className='fs-2 text-center text-bg-info p-2'>  What other options do you have to implement authentication</h1>

          <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
           </div>




           <div className='card'>
            <h1 className='fs-2 text-center text-bg-info p-2'>How does the private route work?</h1>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
           </div>


           <div className='card'>
            <h1 className='fs-2 text-center text-bg-info p-2'>What is Node? How does Node work?</h1>
          <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return..</p>
           </div>
        </div>
    );
};

export default Blog;