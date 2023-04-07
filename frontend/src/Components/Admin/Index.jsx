import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideMenu from './SideMenu';
import { Outlet } from 'react-router-dom';
export default function Index() {
    return (
        <Container fluid className='p-0'>
            <Row className='w-100'>
                <SideMenu />
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
