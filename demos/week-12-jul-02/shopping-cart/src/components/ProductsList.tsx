import { Row, Col, Card, Button } from 'react-bootstrap';

import data from "../data";

import IProduct from '../models/IProduct';

type Props = {
    increaseQty: ( product : IProduct ) => void
}

const ProductsList = ( { increaseQty } : Props ) => {
    return (
        <div>
            <h2>List of products</h2>
            <hr />
            <Row xs={1} lg={4}>
                {data.products.map((product) => (
                    <Col key={product.id} className="my-2 d-flex align-items-stretch">
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Rs. {product.price}
                                </Card.Text>
                                <Button
                                    variant="primary" onClick={() => increaseQty( product )}
                                >
                                    Add
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductsList;
