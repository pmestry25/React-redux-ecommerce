import React from "react";
import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import Delete from '@material-ui/icons/Delete';

const CartItem = (props) => (
  <li className="cartProductListItem" key={props.id}>
      <img className="cartProductItemImg" src={require("../assets/Images/1.jpeg")} alt="props.name"/>
      <div className="cartProductItemInfo">
        <div className="cartProductItemName">{props.name}</div>
        <div className="cartProductItemPrice">{props.price + '/- per item'}</div>
      </div>
      <div className="cartProductItemQuantity">
        <RemoveCircle color="action" className="decreaseQuantity" onClick={() => props.decreaseQuantityFn(props.id)} />
        <div className="quantityNum">{props.numbers}</div>
        <AddCircle color="action" className="increaseQuantity" onClick={() => props.increseQuantityFn(props.id)} />
        {/* <button onClick={() => updateCartUnits({id, units: units+1})}>+</button>
        <button onClick={() => updateCartUnits({id, units: units-1})}>-</button> */}
      </div>
      <Delete color="secondary" fontSize="large" className="cartProductItemRemove" onClick={() => props.removeItemFn(props.id)} />
      {/* <button className="cartProductItemRemove" onClick={() => props.removeItemFn(props.id)}> Remove </button> */}
  </li>
)

export default CartItem;
