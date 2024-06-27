import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function Update() {
    const menu = [
        { 'Shabbos': ['Challah', 'Soup', 'Chicken'] },
        { 'SundayDinner': ['Chicken Cutlets', 'Broccoli', 'Rice'] },
        { 'FamilyBBQ': ['Hot dogs', 'Grilled Chicken', 'Corn', 'French Fries'] }
    ];

    const [selectedMenu, setSelectedMenu] = useState([]);

    const handleMenuChange = (e) => {
        const selectedValue = e.currentTarget.value;
        if (selectedValue === "") {
            setSelectedMenu([]); // Clear selectedMenu if default option is selected
        } else {
            const selectedArray = Object.values(JSON.parse(selectedValue))[0];
            setSelectedMenu(selectedArray);
        }
    };

    return (
        <div className="container mt-4">
            <h1>Access your Menus here:</h1>

            <Form className="mb-3">
                <Form.Group controlId="selectMenu">
                    <Form.Label>Select a Menu</Form.Label>
                    <Form.Select
                        value={selectedMenu.length > 0 ? JSON.stringify(menu.find(item => Object.keys(item)[0] === selectedMenu[0])) : ""}
                        onChange={handleMenuChange}
                    >
                        <option value="">Select Menu</option> {/* Default option */}
                        <option value={JSON.stringify(menu[0])}>Shabbos</option>
                        <option value={JSON.stringify(menu[1])}>Sunday Dinner</option>
                        <option value={JSON.stringify(menu[2])}>Family BBQ</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <div>
                {selectedMenu.length > 0 ? (
                    <ul className="list-group">
                        {selectedMenu.map((item, index) => (
                            <li key={index} className="list-group-item">{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">Please select a menu above.</p>
                )}
            </div>
        </div>
    );
}
