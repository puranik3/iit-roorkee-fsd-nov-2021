import { Container, Row, Col } from 'react-bootstrap';
import ProductsList from './ProductsList';
import Cart from './Cart';

const ShoppingCart = () => {
    return (
        <Container className="my-4">
            <Row>
                <Col xs={1} lg={9}>
                    <ProductsList />
                </Col>
                <Col xs={12} lg={3}>
                    <Cart />
                </Col>
            </Row>
        </Container>
    );
};

export default ShoppingCart;