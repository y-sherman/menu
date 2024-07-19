import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function Retrieve() {
    const [menus, setMenus] = useState([]);
    const [selectedMenu, setSelectedMenu] = useState(null);

    useEffect(() => {
        fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/default/getAllMenus')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setMenus(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleMenuChange = event => {
        const selectedMenuPk = event.target.value;
        const selectedMenuObject = menus.find(menu => menu.pk === selectedMenuPk);
        setSelectedMenu(selectedMenuObject);
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="text-center mb-4">View Your Menu</h1>
                    <Form>
                        <Form.Select
                            value={selectedMenu ? selectedMenu.pk : ''}
                            onChange={handleMenuChange}
                        >
                            <option value="">Select a Menu</option>
                            {menus.map((menu, index) => (
                                <option key={index} value={menu.pk}>
                                    {menu.pk}
                                </option>
                            ))}
                        </Form.Select>
                    </Form>
                </div>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    {!selectedMenu ? null : (
                        <ul className="list-group">
                            {Object.keys(selectedMenu).map((key, index) => {
                                if (key !== 'pk') {
                                    return (
                                        <li key={index} className="list-group-item">
                                            {selectedMenu[key]}
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
