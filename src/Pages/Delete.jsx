// Dassi Rabenstein
// See a list of menus -> delete a menu from the list

import React, { useState } from 'react';
import { Container, Button, Card, Row, Col} from 'react-bootstrap';


export default function Delete() {

    // functions
    const [menuList, setMenuList] = useState(['Shabbos','Pesach','Rosh Chodesh','Chanukah']);

    const deleteMenu = value => {
        setMenuList(oldMenuList => {
            return oldMenuList.filter(menu => menu !== value);
        });
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='mt-5'>Delete a menu</h1>
                    </Col>
                </Row>
                <Row>
                    <Card>
                        <Card.Body>
                            <ul>
                                {menuList.map((menu) => (
                                    <li key={menu}>
                                        <Row>
                                            <Col>
                                                <span>{menu}</span>
                                            </Col>
                                            <Col>
                                                <Button
                                                    className="m-2"
                                                    variant="danger"
                                                    onClick={() => deleteMenu(menu)}
                                                >
                                                    Delete
                                                </Button>
                                            </Col>
                                        </Row>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}