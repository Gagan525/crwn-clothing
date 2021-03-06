import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from "../../redux/cart/cart.selector";

import './cart-dropdown.styles.scss';
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, dispatch }) => (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                ) : <span className="empty-message">Your cart is empty </span>
                }
            </div>
            <Link to="/checkout">
                <CustomButton onClick={ () => {dispatch(toggleCartHidden())}} >GO TO CHECKOUT</CustomButton>
            </Link>
        </div>
    );

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);