import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
const NewsSummary = ({ news }) => {
    // console.log(news)
    const { title, _id, author, total_view, rating, image_url, details } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div className='ms-2'>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
                <div className='d-flex '>
                    <FaStar className='text-warning'></FaStar>
                    <p>{rating.number}</p>
                </div>
                <div>
                    <FaEye></FaEye>
                    {total_view}
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsSummary;