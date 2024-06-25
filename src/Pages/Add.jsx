import React, { useState } from 'react';
import { Container, Form, Button, ListGroup} from 'react-bootstrap';

const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [menuName, setMenuName] = useState('');
    const [menuDescription, setMenuDescription] = useState('')

    const handleNameChange = (e) => {
        setMenuName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setMenuDescription(e.target.value);
    };

    const addMenu = () => {
        if (menuName.trim() !== '' && menuDescription.trim() !== '') {
            const newMenu = {
                name: menuName,
                description: menuDescription
            };
            
            setMenus([...menus, newMenu]);
            setMenuName('');    //clears input after adding an item
            setMenuDescription('');
        }
    };


    return (                                                
        <Container>
            <h1 className = "mt-4">Add a new menu item</h1>

            <Form className = "mt-4">
                <Form.Group>
                    <Form.Label>Menu Name</Form.Label>
                    <Form.Control 
                        type = "text"
                        placeholder = "Enter the name of your menu"
                        value = {menuName}
                        onChange = {handleNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Menu Description</Form.Label>
                    <Form.Control
                        as = "textarea"
                        rows = {3}
                        placeholder = "Enter the tems you will include in your menu"
                        value = {menuDescription}
                        onChange = {handleDescriptionChange}
                    />
                </Form.Group>
                <Button variant = "primary" onClick = {addMenu}>Add Menu</Button>
            </Form>

            <ListGroup className = "mt-4">
                {menus.map((menu, index) => (
                    <ListGroup.Item key = {index}>
                        <h5>{menu.name}</h5>
                        <p>{menu.description}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
        );  
    };

    export default MenuList;