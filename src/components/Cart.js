import React, { Component } from 'react';
import {connect} from 'react-redux';
import CartItem from "./cartItem";
import {addToCartAction, decreaseQuantityAction, removeFromCartAction} from '../actions/cartAction';

class Cart extends Component {

    render() {

        console.log(this.props.cartProps);

        let itemsInCart = []

        Object.keys(this.props.cartProps.items).forEach( (itemId) => {
            console.log(itemId);
            if (this.props.cartProps.items[itemId].inCart) {
                itemsInCart.push(this.props.cartProps.items[itemId]);
            }
        })


        return (
            <div className='products'>
                { this.props.cartProps.cartItemsCount > 0 ?
                    <React.Fragment>
                        <div className='cartProducts' id='cartProducts'>
                            <ul className="list">
                                {
                                    itemsInCart.map(item => 
                                        <CartItem {...item} key={item.id} increseQuantityFn={this.props.addToCartAction}
                                        decreaseQuantityFn={this.props.decreaseQuantityAction}
                                        removeItemFn={this.props.removeFromCartAction}
                                        />
                                    )
                                }
                            </ul>
                        </div>
                        <div className='totalAmount' id='totalAmount'>
                            <div className='totalAmountText' id='totalAmountText'>
                                <div className='amountText' id='amountText'> Total Amount </div>
                                <div className='itemQunatityText' id='itemQunatityText'>
                                    {'Item(s): ' + this.props.cartProps.cartItemsCount  + '  Quantity: ' + this.props.cartProps.cartItemsQuantity}
                                </div>
                            </div>
                            <div className='totalAmountNum' id='totalAmountNum'>
                                {this.props.cartProps.cartTotalPrice + '/-'} 
                            </div>
                        </div>
                    </React.Fragment>
                : <div className='nocartItems'> No items in your cart</div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {addToCartAction, decreaseQuantityAction, removeFromCartAction})(Cart);