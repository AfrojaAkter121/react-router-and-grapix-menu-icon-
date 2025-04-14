
import Post from './Children/Post';
import { useLoaderData } from 'react-router';

const Services = () => {
    const services = useLoaderData()
    


    return (
        <div className='min-h-screen pt-20'>
            <div className='grid grid-cols-6 gap-5'>
                {
                    services.map(service => <Post service={service}></Post>)
                }
            </div>
        </div>
    );
};

export default Services;