import React, { Component } from 'react';
//import Product from "./product.js";
import {connect} from 'react-redux';
import PRODUCTS_LIST from "../assets/data/productsData.js"; 
import {addToCartAction} from '../actions/cartAction';
import Product from "react-ecommerce-product-design"

const Products = (props) => {
    const allItems = [];
    Object.keys(props.cartProps.items).forEach( (itemId) => {
        allItems.push(props.cartProps.items[itemId]);
    })
    return (
        <div className="products">
            {allItems.map((item, i) => (
                 //<Product key={i} details={item} onclick={props.addToCartAction} />
                <Product key={i} details={item} onclick={props.addToCartAction} />
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {addToCartAction})(Products);