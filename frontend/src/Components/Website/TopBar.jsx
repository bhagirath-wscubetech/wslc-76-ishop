import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function TopBar() {
    const cart = useSelector((state) => state.cart.data)
    console.log(cart)
    return (
        <div className="row">
            <div className="left-top">
                EN
                <i className="fa fa-caret-down" aria-hidden="true" />
                &nbsp;&nbsp;<span>$</span>&nbsp;
                <i className="fa fa-caret-down" aria-hidden="true" />
            </div>
            <div className="right-top">
                <img src="images/profile_icon.svg" alt="" />
                <span>My Profile</span>&nbsp;&nbsp;
                <Link to="/cart">
                    <img src="images/bag_icon.svg" alt="" />
                    &nbsp;&nbsp;
                    <span>{cart.length} Items</span>
                </Link>
                <img src="images/search_icon.svg" alt="" />
            </div>
        </div>
    )
}
