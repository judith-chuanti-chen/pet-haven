import React from 'react';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const LoadingThumbnails = ({count}) => {
    const thumbnails = []
    for(let i = 0; i < count; i++){
        thumbnails.push(
            <Card className="m-3 shadow" style={{ width: '27rem', height: '29em', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}}>
            <Card.Img variant="top" style={{height: '18em', objectFit: 'cover', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}} />
              <Card.Body className="d-flex flex-column">
                <Card.Text className="text-center">
                  <Skeleton />
                  <Skeleton />
                </Card.Text>
                <ButtonGroup className="mt-auto">
                  <Button variant="light"><Skeleton /> </Button>
                  <Button  variant="light"><Skeleton /></Button>
                </ButtonGroup>
              </Card.Body>
          </Card>
        )
    }
    return (
        <>
            {thumbnails}
        </>
    )
};

export default LoadingThumbnails;