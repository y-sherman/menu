import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import './Add.css';

const MenuList = () => {
    const [menus, setMenus] = useState([]);
    const [menuName, setMenuName] = useState('');
    const [menuDescription, setMenuDescription] = useState([]);
    const [error, setError] = useState(null);

    const handleNameChange = (e) => {
        setMenuName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        const lines = e.target.value.split('\n').map(item => item.trim());  //separate description based on new lines
        setMenuDescription(lines);
    };

    const addMenu = async () => {
        if (menuName.trim() !== '' && menuDescription.length > 0) {
            const newMenu = {
                menuId: menuName,
                menuItems: menuDescription
            };
            
            try {
                const response = await fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/createMenu', {
                    method: 'POST',
                    body: JSON.stringify(newMenu)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Menu created:', data);

                setMenus([...menus, newMenu]);
                setMenuName(''); 
                setMenuDescription([]);
            } catch (error) {
                console.error('Error creating menu:', error);
                setError('Error creating menu');
            }
        }
    };

    return (                                                
        <Container>
            <h1 className="mt-4">Add a New Menu</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <Form className="mt-4">
                <Form.Group>
                    <Form.Label>Menu Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter the Name of Your Menu"
                        value={menuName}
                        onChange={handleNameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Menu Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Enter Each Item Followed by the Enter Key"
                        value={menuDescription.join('\n')}
                        onChange={handleDescriptionChange}
                    />
                </Form.Group>
                <Button variant="custom" className="btn btn-dark mt-4" onClick={addMenu}>Add Menu</Button>
            </Form>

            <ListGroup className="mt-4">
                {menus.map((menu, index) => (
                    <ListGroup.Item key={index} className="custom-list-item">
                        <h5>{menu.menuId}</h5>
                        <ul>
                            {menu.menuItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );  
};

export default MenuList;
