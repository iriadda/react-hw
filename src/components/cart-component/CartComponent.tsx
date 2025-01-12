import {ICart} from "../../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

export const CartComponent = ({cart}: CartComponentProps) => {
    return (
        <div className='m-3.5'>
            {cart.products.map(product =>(<div key={product.id}><ul><li>{product.title}: {product.price}</li></ul></div>))}
        </div>
    );
};