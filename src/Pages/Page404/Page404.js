import React from 'react';
import notFound from '../../access/not-found-404.webp';

const Page404 = () => {
    return (
        <div>
             <img style={{width: '70%'}} src={notFound} alt="" />
            <h2 className='text-center text-danger'>This Page Not Found -404</h2>
        </div>
    );
};

export default Page404;