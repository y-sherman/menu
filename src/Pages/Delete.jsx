// Dassi Rabenstein
// See a list of menus -> delete a menu from the list

import React, { useState , useEffect } from 'react';
import { Container, Button, Card, Row, Col} from 'react-bootstrap';


export default function Delete() {

    // functions
    const [menuList, setMenuList] = useState([]);


    async function deleteMenu(menu) {
        try {
            const params = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(`https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/deleteMenu?menuId=${menu}`,params)
                
            if (response.ok) {
                const data = await response.json();
                console.log(data); // 'Menu deleted successfully'
                // Update state to remove the deleted menu
                setMenuList(prevMenuList => prevMenuList.filter(m => m !== menu));

                const menuElement = document.getElementById(`${menu}`);
                if (menuElement) {
                    menuElement.remove();
                }

            } else {
                console.error(`Failed to delete menu: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error deleting menu from DynamoDB', error);
        }
    }
    

    useEffect(() => {
        fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/default/getAllMenus')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then((data) => {
                //list all menu names (pks)
                const pks = data.map(d => d.pk);
                setMenuList(pks);
                console.log('Just Pks', pks);
            })
            .catch((error) => {
                console.log('There was a problem with the fetch operations: ',error)
            });
    }, []);

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