import React from 'react'
import TopBar from '../../Components/Website/TopBar'
import { Link } from 'react-router-dom'
export default function Cart() {
    return (
        <div className="main-container top-container">
            <div className="container">
                <TopBar />
                <div className="row">
                    <div className="ishop-img">
                        <img src="images/iSHOP Logo.svg" alt="image" />
                    </div>
                    <div className="menu">
                        <div>
                            <Link to="/">
                                Home
                            </Link>
                        </div>
                        <div>
                            <a href="index2.html">Store</a>
                        </div>
                        <div>
                            <a href="iphone.html">iphone</a>
                        </div>
                        <div>
                            <a href="ipad.html">ipad</a>
                        </div>
                        <div>
                            <a href="macbook.html">macbook</a>
                        </div>
                        <div>
                            <a href="index3.html">accesories</a>
                        </div>
                    </div>
                </div>
                <div className="cart">cart</div>
                <div className="product-main">
                    <div className="price-section-f">
                        <div className="price-left" style={{ paddingLeft: 70 }}>
                            FRODUCT
                        </div>
                        <div className="price-right">
                            <div>PRICE</div>
                            <div>QTY</div>
                            <div>UNIT PRICE</div>
                        </div>
                    </div>
                    <div className="price-section-f">
                        <div className="price-left">
                            <span>X</span> <img src="3_Corousel.png" alt="" />
                            <p>Philips Hue 7W BR30 Connected Downlight Lamp</p>
                        </div>
                        <div className="price-right">
                            <div>$998</div>
                            <div>-&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;+</div>
                            <div>$499</div>
                        </div>
                    </div>
                    <div className="price-section-f">
                        <div className="price-left">
                            <span>X</span> <img src="apple_mac/apple_mac.png" alt="" />
                            <p style={{ width: 427 }}>Apple Macbook Pro</p>
                        </div>
                        <div className="price-right">
                            <div>$998</div>
                            <div>-&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;+</div>
                            <div>$499</div>
                        </div>
                    </div>
                </div>
                <div className="info-product">
                    {/* start left bar */}
                    <div className="left-bar">
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="Voucher code"
                                style={{ textAlign: "center" }}
                            />
                        </div>
                        <button>redeem</button>
                    </div>
                    {/* end left bar */}
                    {/* start right bar */}
                    <div className="right-bar">
                        <div className="main-bar">
                            <div className="bar-info">
                                <div className="bar-data-l">Subtotal</div>
                                <div className="bar-data-r">$998</div>
                            </div>
                            <div className="bar-info">
                                <div className="bar-data-l">Shipping fee</div>
                                <div className="bar-data-r">$20</div>
                            </div>
                            <div className="bar-info">
                                <div className="bar-data-l">Coupon</div>
                                <div className="bar-data-r">No</div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="total-price">
                            <div className="top-price">
                                <span>Total</span> <span>$1018</span>
                            </div>
                            <br />
                            <div className="buttom-send">Check out</div>
                        </div>
                    </div>
                    {/* end right bar */}
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="last">
                <div className="row">
                    <div className="col">
                        <div className="lo-go">
                            <img src="images/ishop.svg" alt="" />
                        </div>
                        <div className="-ipsum">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever.Since the 1500s, when an unknown printer.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="follow-us">
                            <b>follow Us</b>
                        </div>
                        <div className="-ipsum">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever.
                            </p>
                            <br />
                            <div className="logos">
                                <img src="images/facebook.svg" alt="" />
                                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                <img src="images/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="contact-us">
                            <b>Contact Us</b>
                        </div>
                        <div className="-ipsum">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever.Since the 1500s, when an unknown printer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-3">
                <div className="footer">
                    <div className="footer-heading">
                        <b>Infomation</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-heading">
                        <b>Service</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-heading">
                        <b>Extras</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-heading">
                        <b>My Account</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-heading">
                        <b>Userful Links</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-heading">
                        <b>Our Offers</b>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li>
                                <a href="">Infomation </a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                            <li>
                                <a href="">Policy Terms &amp;Conditions </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>

    )
}
