import { useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import IProduct from "../models/IProduct";

type Props = {
    increaseQty: (product: IProduct) => void;
    decreaseQty: (product: IProduct) => void;
    cart: { product: IProduct; qty: number }[];
};

const Cart = ({ increaseQty, decreaseQty, cart }: Props) => {
    const total = cart.reduce( ( acc, item ) => acc + item.qty * item.product.price, 0 );

    return (
        <div>
            <h2>Cart</h2>
            <hr />
            <div style={{ fontSize: '0.8em', fontFamily: 'monospace' }}>
                {
                    cart.length !== 0 && (
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, idx) => (
                                    <tr key={item.product.id}>
                                        <td>{idx + 1}</td>
                                        <td>{item.product.name}</td>
                                        <td className="d-flex justify-content-between">
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={() => decreaseQty( item.product )}
                                            >-</Button>
                                            {item.qty}
                                            <Button
                                                variant="primary"
                                                size="sm"
                                                onClick={() => increaseQty( item.product )}
                                            >+</Button>
                                        </td>
                                        <td className="text-end">{item.product.price}</td>
                                        <td className="text-end">{item.product.price * item.qty}</td>
                                    </tr>
                                ))}
                                {
                                    cart.length !== 0 && (
                                        <>
                                            <tr>
                                                <td colSpan={4}>Total</td>
                                                <td className="text-end">{total.toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}>Tax</td>
                                                <td className="text-end">{(total * 0.14).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={4}>Grand total</td>
                                                <td className="text-end">{(total * 1.14).toFixed(2)}</td>
                                            </tr>
                                        </>
                                    )
                                }
                            </tbody>
                        </Table>
                    )
                }
                {
                    cart.length === 0 && (
                        <small>No items in your cart</small>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;
