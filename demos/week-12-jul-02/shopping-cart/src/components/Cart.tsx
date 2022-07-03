import IProduct from '../models/IProduct';

type Props = {
    increaseQty: ( product : IProduct ) => void,
    cart: { product: IProduct, qty: number }[]
}

const Cart = ( { increaseQty, cart } : Props ) => {
    return (
        <div>
            <h2>Cart</h2>
            <hr />
            {
                cart.map(
                    item => (
                        <div key={item.product.id}>
                            {item.product.name} - {item.qty}
                        </div>
                    )
                )
            }
        </div>
    );
};

export default Cart;