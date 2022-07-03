import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductsList from './ProductsList';
import Cart from './Cart';
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
    };

    const decreasQty = ( product : IProduct ) => {
        // neither filter nor map can achieve exactly what we want to in one go. So a normal forEach is chosen.
        const newCart = [] as { product: IProduct, qty: number }[];

        cart.forEach(
            p => {
                if( p.product.id !== product.id ) {
                    newCart.push( p );
                } else {
                    if( p.qty !== 1 ) {
                        newCart.push({
                            product: p.product,
                            qty: p.qty - 1
                        });
                    }
                }
            }
        );

        setCart( newCart );
    };

    return (
        <Container className="my-4">
            <Row>
                <Col xs={12} lg={9}>
                    <ProductsList increaseQty={increaseQty} />
                </Col>
                <Col xs={12} lg={3}>
                    <Cart
                        increaseQty={increaseQty}
                        decreaseQty={decreasQty}
                        cart={cart}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default ShoppingCart;