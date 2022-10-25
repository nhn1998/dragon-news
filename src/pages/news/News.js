import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const News = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <Card style={{  }}>
            <Card.Img className='' variant="top" src={news.image_url} />
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                    {news.details}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default News;