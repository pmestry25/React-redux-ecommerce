import React, { Component, useEffect } from 'react';
import '../assets/sass/styles.scss';
import cartLogo from '../assets/Images/retail.svg'
import {connect} from 'react-redux';
import { getCartItemsCount } from '../actions/cartAction';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

class Header extends Component {
    render() {
        console.log(this.props);
        // useEffect(() => {
        //     getCartItemsCount();
        // }, [])
        return (
            <div className="titleBar">
                <div className="home"><Link to="/home">Home</Link></div>
                <div className="cart">
                    <Link to="/cart">
                        <IconButton style={{ color: 'white'}} aria-label="add to shopping cart">
                            <ShoppingCart />
                        </IconButton>
                        {this.props.cartProps.cartItemsCount > 0 ? <div className="cartCount" id="cartCount"> {this.props.cartProps.cartItemsCount} </div> : ""}
                        <div className="cartName">Cart</div>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {getCartItemsCount})(Header);