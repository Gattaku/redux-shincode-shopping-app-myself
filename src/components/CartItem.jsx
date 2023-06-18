import React from 'react'
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { clearEachItem, increase, decrease } from '../features/cart/CartSlice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
    const {id, title, price, img, amount} = props;
    const dispatch = useDispatch();
  return (
    <article className='cart-item'>
        <img src={img} alt="" />
        <div>
            <h4>{title}</h4>
            <h4 className="item-price">{price}円</h4>
            <button className='remove-btn' onClick={()=> dispatch(clearEachItem(id))}>削除</button>
        </div>
        <div>
            <button className="amount-btn" onClick={()=> dispatch(increase(id))}>
                <PlusIcon />
            </button>
            <p className="amount">{amount}</p>
            <button className="amount-btn" onClick={()=>{
                if (amount === 1) {
                    dispatch(clearEachItem(id));
                } else {
                    dispatch(decrease(id))
                }
            }}>
                <MinusIcon />
            </button>
        </div>
    </article>

  )
}

export default CartItem