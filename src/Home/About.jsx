
import React from 'react';
import { useLoaderData } from 'react-router';
import Users from './Children/User';

const About = () => {
    const users = useLoaderData();
  
    return (
        <div className='min-h-screen pt-20 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 p-10'>
            {
                users.map(user => <Users key={user.id} user={user}></Users>)
            }
        </div>
    );
};

export default About;