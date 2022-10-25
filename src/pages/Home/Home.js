import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../shared/NewsSummary';

const Home = () => {
    const AllNews=useLoaderData()
    return (
        <div>
            <h1>this is home route:{AllNews.length}</h1>
            {
                AllNews.map(news=><NewsSummary key={news._id} news={news}></NewsSummary>)
            }
        </div>
    );
};

export default Home;