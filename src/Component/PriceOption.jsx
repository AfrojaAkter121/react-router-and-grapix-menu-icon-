import React from 'react';
import PriceCart from './PriceCart';

const PriceOption = ({fetchData}) => {
    const priceData = fetchData
    return (
        <div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-11/12 pt-30 mx-auto'>
            {
                priceData.map(data => <PriceCart key={data.id} data={data}></PriceCart>)
            }
            </div>
        </div>
    );
};

export default PriceOption;