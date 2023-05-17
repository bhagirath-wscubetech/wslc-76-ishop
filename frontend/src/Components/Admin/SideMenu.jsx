import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { MainContext } from '../../Context/ContextHolder';
import { useContext } from 'react';
export default function SideMenu() {
    const { admin, setAdmin } = useContext(MainContext);
    const navigate = useNavigate();
    const menus = [
        {
            name: "Dashboard",
            path: "/admin",
            multi: false
        },
        {
            name: "Category",
            multi: true,
            items: [
                {
                    route: 'Add',
                    path: "/admin/category/add"
                },
                {
                    route: 'View',
                    path: "/admin/category"
                }
            ]
        },
        {
            name: "Product",
            multi: true,
            items: [
                {
                    route: 'Add',
                    path: "/admin/product/add"
                },
                {
                    route: 'View',
                    path: "/admin/product"
                }
            ]
        }
    ]

    useEffect(
        () => {
            console.log(admin);
            if (admin == false) {
                navigate('/admin/login');
            }
        },
        []
    )


    return (
        <Col xs={2} style={{ background: "#4e73df", minHeight: "100vh" }}>
            <h3 className='text-center text-white py-2'>iShop</h3>
            <ul className='px-3 list-unstyled text-white sticky-top'>
                {
                    menus.map(
                        (menu) => {
                            return <MenuList key={Math.random()} options={menu} />
                        }
                    )
                }
                {/* <li>
                    Dashboard
                </li>
                <li>
                    News
                </li> */}
            </ul>
        </Col>
    )
}

const MenuList = ({ options }) => {
    const [show, setShow] = useState(false);

    return <li className='mt-2' style={{ cursor: "pointer" }} onClick={() => { setShow(!show) }}>
        {
            options.multi == false ?
                <Link to={options.path}>{options.name}</Link>
                :
                <span>{options.name}</span>
        }
        {
            options.multi
                ?
                <ul className={`${show ? 'd-block opacity-100' : 'd-none opacity-0'} list-unstyled p-2 mt-2 shadow bg-white text-dark rounded`} style={{ transition: "400ms" }}>
                    {
                        options.items.map(
                            (i) => {
                                return <li key={Math.random()} >
                                    <Link to={i.path}>
                                        {i.route}
                                    </Link>
                                </li>
                            }
                        )
                    }
                </ul>
                :
                ""
        }
    </li>
}