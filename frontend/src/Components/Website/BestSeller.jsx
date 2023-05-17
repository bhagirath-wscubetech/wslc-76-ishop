import React, { useEffect, useState } from 'react'
import { getCategory } from '../../Apis/category';
import { getCategoryProduct, getProduct } from '../../Apis/product';

export default function BestSeller() {
    const [categories, setCategory] = useState([]);
    const [products, setProduct] = useState([]);
    const [active, setActive] = useState('All');
    const [loader, setLoader] = useState(false);
    const [productImagePath, setProductImagePath] = useState("");
    const categoryChangeHandler = (categoryId) => {
        setActive(categoryId);
        setLoader(true);
    }

    useEffect(
        () => {
            if (active == "All") {
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
            } else {
                getCategoryProduct(active)
                    .then(
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
        },
        [active]
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
        },
        []
    )
    return (
        <>
            <div className="row">
                <div className="best-seller">best seller</div>
                <div className="menu-seller">
                    <div onClick={
                        () => categoryChangeHandler("All")
                    } className={active == "All" ? 'active' : ''} style={{ cursor: "pointer" }}>
                        All
                    </div>
                    {
                        categories.map(
                            (category) => {
                                return (
                                    <div
                                        className={active == category._id ? 'active' : ''}
                                        onClick={
                                            () => categoryChangeHandler(category._id)
                                        } style={{ cursor: "pointer" }}>{category.name}</div>
                                );
                            }
                        )
                    }
                </div>
            </div>
            <div className="row">
                {
                    loader == true
                        ?
                        <h1 className='text-center'>Loading...</h1>
                        :
                        <>
                            {
                                products.map(
                                    (data) => {
                                        return (
                                            <Box {...data} path={productImagePath} />
                                        );
                                    }
                                )
                            }
                        </>
                }

            </div >
        </>
    )
}


const Box = (props) => {
    return (
        <div className="box">
            <div className="hot">Hot</div>
            <div className="product-img">
                <img src={props.path + props.image} alt="" />
            </div>
            <div className="hr" />
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
                    <span style={{ color: "#ff4858" }}>$ {props.discounted_price}</span>
                    <span style={{ color: "#c1c8ce", textDecoration: "line-through" }}>
                        $ {props.original_price}
                    </span>
                </div>
            </div>
        </div>
    )
}