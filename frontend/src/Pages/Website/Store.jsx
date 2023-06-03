import React from 'react'
import { getCategory } from '../../Apis/category';
import { getProduct, filterProduct } from '../../Apis/product';
import { getColor } from "../../Apis/color";
import { useState, useEffect } from 'react';
export default function Store() {
    const [categories, setCategory] = useState([]);
    const [colors, setColors] = useState([]);
    const [products, setProduct] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeColor, setActiveColor] = useState(null);
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(0);
    const [loader, setLoader] = useState(false);
    const [productImagePath, setProductImagePath] = useState("");
    const categoryChangeHandler = (categoryId) => {
        setActiveCategory(categoryId);
    }
    const colorChangeHandler = (colorId) => {
        setActiveColor(colorId);
    }


    useEffect(
        () => {
            const filter = {
                "category": activeCategory,
                "color": activeColor,
                "from": fromPrice,
                "to": toPrice,
            }
            filterProduct(filter).
                then(
                    (success) => {
                        if (success.data.status == 1) {
                            setProduct(success.data.product);
                            setLoader(false);

                        }
                        setProductImagePath(success.data.path);
                    }
                )
                .catch()
        },
        [activeCategory, activeColor, fromPrice, toPrice]
    )

    const applyFilter = () => {
        const filter = {
            "category": activeCategory,
            "color": activeColor,
            "from": fromPrice,
            "to": toPrice,
        }
        filterProduct(filter).
            then(
                (success) => {
                    if (success.data.status == 1) {
                        setProduct(success.data.product);
                        setLoader(false);

                    }
                    setProductImagePath(success.data.path);
                }
            )
            .catch()
    }

    useEffect(
        () => {
            getProduct().
                then(
                    (success) => {
                        if (success.data.status == 1) {
                            setProduct(success.data.product);
                            setLoader(false);

                        }
                        setProductImagePath(success.data.path);
                    }
                )
                .catch()
        },
        []
    )

    useEffect(
        () => {
            getCategory()
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setCategory(success.data.category);
                        }
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
            getColor()
                .then(
                    (success) => {
                        if (success.data.status == 1) {
                            setColors(success.data.color);
                        }
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        []
    )
    return (
        <div className="main-container top-container">
            <div className="container">
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
                        <img src="images/bag_icon.svg" alt="" />
                        <span>2 Items</span>
                        <span>$998</span>
                        &nbsp;&nbsp;
                        <img src="images/search_icon.svg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="ishop-img">
                        <img src="images/iSHOP Logo.svg" alt="image" />
                    </div>
                    <div className="menu">
                        <div>
                            <a href="index.html">Home</a>
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
                <div className="row-1">
                    <div className="link">
                        <a href="">store</a>&nbsp;/&nbsp;<a href="">Accesories</a>
                    </div>
                </div>
                <div className="row2">
                    {/* left col start*/}
                    <div className="col-left">
                        <div className="left-section-1">
                            <div className="top-H">
                                <h3>Categories</h3>
                            </div>
                            {
                                categories.map(
                                    (category, index) => {
                                        return (
                                            <div style={
                                                {
                                                    color: activeCategory == category._id ? "#33a0ff" : ""
                                                }
                                            } className="buttom-list" key={index} onClick={
                                                () => categoryChangeHandler(category._id)
                                            }>
                                                <div className="product-s">{category.name}</div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="price-section">
                            <div className="price-head">
                                <h3>PRICES</h3>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <input type="number" name="" onChange={
                                        (e) => setFromPrice(e.target.value)
                                    } id="" value={fromPrice} placeholder='From' />
                                </div>
                                <div className="col-5">
                                    <input type="number" onChange={
                                        (e) => setToPrice(e.target.value)
                                    } name="" id="" value={toPrice} placeholder='To' />
                                </div>
                            </div>
                        </div>
                        <div className="color-section">
                            <div className="color-head">
                                <h3>Color</h3>
                            </div>
                            <div className="colors">
                                {
                                    colors.map(
                                        (color) => {
                                            return <div
                                                onClick={() => colorChangeHandler(color._id)}
                                                style={
                                                    {
                                                        width: "20px",
                                                        height: "20px",
                                                        background: color.color,
                                                        cursor: "pointer",
                                                        boxShadow: color._id == activeColor ? "0px 0px 10px grey" : ""
                                                    }
                                                }></div>
                                        }
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <button onClick={applyFilter} className='btn btn-primary' style={{
                                margin: "5px"
                            }}>Apply Filter</button>
                            <button className='btn btn-warning' style={{
                                margin: "5px"
                            }}>Remove Filter</button>
                        </div>
                    </div>
                    {/* left col end */}
                    {/* right col start */}
                    <div className="col-right">
                        <div className="right-section-1">
                            <div className="left-heading-1">
                                <p id="iphone">iPhone 8</p>
                                <br />
                                <p id="title-p">
                                    Performance and design. Taken right <br />
                                    to the edge.
                                </p>
                                <br />
                                <div className="ishop-box">
                                    <p>SHOP NOW</p>
                                </div>
                            </div>
                            <div className="right-img-1">
                                <img src="Store_Accesories/iphone_8.png" alt="" />
                            </div>
                        </div>
                        <div className="menu-section-2">
                            <div className="menu-left">
                                <span>13 Items</span>
                                <span>Sort By</span>
                                <span>
                                    Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </span>
                                <span>
                                    Show
                                    &nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="menu-right">
                                <span>
                                    <i
                                        style={{ color: "#2678bf" }}
                                        className="fa fa-th"
                                        aria-hidden="true"
                                    />
                                </span>
                                <span>
                                    <i
                                        style={{ color: "#c1c8ce" }}
                                        className="fa fa-bars"
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="product-container">
                            {/* The product box will be here */}
                            {
                                loader == true
                                    ?
                                    <h1 className='text-center'>Loading...</h1>
                                    :
                                    products.map(
                                        (product) => {
                                            return <ProductBox {...product} productImagePath={productImagePath} />
                                        }
                                    )
                            }
                        </div>
                    </div>
                    {/* right col end */}
                </div>
                <div className="row" style={{ height: 400 }}>
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
        </div>

    )
}


const ProductBox = (props) => {
    return (
        <div className="product-box">
            <div className="product-image">
                <img
                    width={"100%"}
                    height={"100%"}
                    src={props.productImagePath + props.image}
                    alt=""
                />
            </div>
            <div className="product-content">
                <h3>{props.name}</h3>
                <div className="rate">
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#ffc600" }}
                        aria-hidden="true"
                    />
                    <i
                        className="fa fa-star"
                        style={{ color: "#c1c8ce" }}
                        aria-hidden="true"
                    />
                </div>
                <div>
                    <span style={{ color: "#ff4858" }}>
                        {props.original_price}
                    </span>
                </div>
            </div>
        </div>
    )
}