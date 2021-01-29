import React from 'react';
import {
    CardColumns,
    Card
} from 'react-bootstrap';
 
// TODO: documentation for 'interests' shape. What's the standard way to do this in react?
const InterestsList = ({ interests }) => {
    return (
        <CardColumns>
            {interests.map((eachInterest) => (
                <Card>
                    <Card.Img variant="top" src="https://biologydictionary.net/wp-content/uploads/2020/09/Common-cuttlefish-1.jpg" />
                    <Card.Body>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            ))}
        </CardColumns>
    );
}

export default InterestsList;
