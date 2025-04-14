import React from 'react';
import { Link } from 'react-router';

const Post = ({service}) => {
    const {id , title}  = service;
    return (
        <div className='border border-lime-800 p-2 text-center flex flex-col items-start justify-between'>
            <h1 className='text-left'>{title}</h1>
            <Link to={`/services/${id}`}>
            <button className='btn'>show</button>
            </Link>
        </div>
    );
};

export default Post;