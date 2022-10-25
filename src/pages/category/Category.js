import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../shared/NewsSummary';

const Category = () => {
    const allCatgories = useLoaderData();
    return (
        <div>
            <h5>this is catagory:{allCatgories.length}</h5>
            {
                allCatgories.map(news=><NewsSummary key={news._id} news={news}></NewsSummary>)
            }
        </div>
    );
};

export default Category;