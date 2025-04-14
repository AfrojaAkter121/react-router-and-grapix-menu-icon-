import React from 'react';
import { useLoaderData,  } from 'react-router';

const UserDetails = () => {
    const params = useLoaderData()
    console.log(params)
    
    const {website, name, phone, address,email, company} = params
    return (
        <div className='min-h-screen pt-20 flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>User Details</h1>
            <div className='border border-lime-800 rounded-2xl p-4'>
            <h1 className='text-2xl'><strong>Name : </strong>{name}</h1>
            <h1 className='text-xl'><strong>Country :</strong> {address.city}</h1>
            <h1  className='text-xl'><strong>Company Name :</strong> {company.name}</h1>
            <h2><strong>Phone :</strong> {phone}</h2>
            <h1><strong>Website : </strong>{website}</h1>
            <p><strong>Email : </strong> {email} </p>
            </div>
        </div>
    );
};

export default UserDetails;