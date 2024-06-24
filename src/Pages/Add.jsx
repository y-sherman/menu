import React, { useState } from 'react';
import { Container, Form, Button, ListGroup} from 'react-bootstrap';


export default function Add(){
   // create list that holds all the menus
const menuList = () => {
    const [menus, setMenus] = useState([]);
    const [menuName, setMenuName] = useState('');

    const handleInputChange = (e) => {
        setItemName(e.target.value);
    };

    const addMenu = () => {
        if (menuName.trim() !== '') {
            setMenus([...menus, menuName]);
            setMenuName('');
        };
    };

    return (
        <Container>
            <h1 className = "mt-4">Add a new menu</h1>

            <Form className = "mt-4">
                <Form.Group>
                    <Form.Control 
                        type = "text"
                        placeholder = "Enter the name of your menu"
                        value = {menuName}
                        onChange = {handleInputChange}
                    />
                </Form.Group>
                <Button variant = "primary" onClick = {addMenu}>Add Menu</Button>
            </Form>

            <ListGroup className = "mt-4">
                {menus.map((item, index) => (
                    <ListGroup.Item key = {index}> {item} </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );  
};
}