import React from 'react';
import { Link } from 'react-router';

const Users = ({user}) => {

    const {name, email, phone,id , username,website} = user;
    return (
        <div className='border-2 border-lime-800 rounded-2xl p-4 shadow shadow-lime-500 text-left'>
            <h1 className='text-2xl font-semibold'>{name}</h1>
            <h1 className='text-xl'><span className='font-bold'>UserName :</span> {username}</h1>
            <p className='text-lg'><span className='font-bold'>Email :</span> {email}</p>
            <p className='text-sm'><span className='font-bold'>Phone :</span> {phone}</p>
            <h1 className='mb-5'><span className='font-bold'>Website :</span>{website}</h1>
            <Link className='border border-lime-700 p-2 rounded-xl' to={`/about/${id}`}>show</Link>

        </div>
    );
};

export default Users;