import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToCartAction, removeFromCartAction} from '../actions/cartAction';
import getUrlkeys from '../utils/utils.js'
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1)
    },
  }));

const ProductDetails = (props) => {
    console.log(props);
    console.log(props.match.params.productId);
    let selectedProductDetails = props.cartProps.items[props.match.params.productId];
    console.log(selectedProductDetails);
    const classes = useStyles();

    return (
        <div class="products" id="detailsCnt">
            <div class="infoMainCnt">                
                <div class="detailImgCnt" id="detailImgCnt"> 
                    <img src={require("../assets/Images/1.jpeg")} className="detailImg" id="detailImg" alt={selectedProductDetails.name} />
                </div>
                <div class="infoCnt" id="infoCnt">
                    <div class="infoName" id="infoName">{selectedProductDetails.name}</div>
                    <div class="infoDescription" id="infoDescription">{selectedProductDetails.description}</div>
                    <div class="infoPrice" id="infoPrice">{selectedProductDetails.price + '/-'}</div>
                    {selectedProductDetails.inCart ? <div class="infoQuantity" id="infoQuantity">{ selectedProductDetails.numbers + ' item(s) in cart.'}</div> : ''}
                    <Button
                        variant="contained"
                        className={classes.button}
                        startIcon={<AddShoppingCartIcon fontSize="large" />}
                        id="addCart"
                        onClick={() => props.addToCartAction(selectedProductDetails.id)} 
                    >
                        Add to cart
                    </Button>
                    {/* <button class="addCart" id="addCart" onClick={() => props.addToCartAction(selectedProductDetails.id)} >Add to cart</button> */}
                    {/* {selectedProductDetails.inCart ? <button class="remove" id="remove" onClick={() => props.removeFromCartAction(selectedProductDetails.id)}>Remove</button> : ''} */}
                    {selectedProductDetails.inCart ? 
                        <Button
                            variant="contained"
                            className={classes.button}
                            startIcon={<Delete fontSize="large" />}
                            id="remove"
                            onClick={() => props.removeFromCartAction(selectedProductDetails.id)} 
                        >
                            Remove
                        </Button>
                        : ""
                    }
               </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, {addToCartAction, removeFromCartAction})(ProductDetails);