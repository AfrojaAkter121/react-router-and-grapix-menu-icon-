import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData()
    return (
        <div className='min-h-screen pt-20 flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;