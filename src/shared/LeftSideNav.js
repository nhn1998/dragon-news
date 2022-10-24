import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [catagories,setCatagories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/news-category')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div className=''>
            <h4>this is left side nav: {catagories.length}</h4>
            <div>
                {
                    catagories.map(catagory=> <p key={catagory.id}>
                        <Link to={`/category/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;