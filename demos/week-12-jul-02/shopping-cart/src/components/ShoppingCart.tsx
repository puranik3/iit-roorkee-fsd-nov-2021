import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsList from './ProductsList';
import Cart from './Cart';
import data from '../data';
import IProduct from '../models/IProduct';

const ShoppingCart = () => {
    const [ cart, setCart ] = useState<{ product: IProduct, qty: number }[]>( [] );

    const increaseQty = ( product : IProduct ) => {
        const match = cart.find(
            p => p.product.id === product.id
        );

        if( !match ) {
            setCart([
                ...cart,
                {
                    product,
                    qty: 1
                }
            ]);
        } else {
            const newCart = cart.map(
                p => {
                    if( p.product.id !== product.id ) {
                        return p;
                    } else {
                        return {
                            product: p.product,
                            qty: p.qty + 1
                        }
                    }
                }
            );

            setCart( newCart );
        }
    }

    return (
        <Container className="my-4">
            <Row>
                <Col xs={1} lg={9}>
                    <ProductsList increaseQty={increaseQty} />
                </Col>
                <Col xs={12} lg={3}>
                    <Cart increaseQty={increaseQty} cart={cart} />
                </Col>
            </Row>
        </Container>
    );
};

export default ShoppingCart;