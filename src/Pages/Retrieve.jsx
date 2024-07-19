import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function Retrieve() {
    const [menus, setMenus] = useState([]); // State for storing all menus
    const [selectedMenu, setSelectedMenu] = useState(null); // State for storing the selected menu
    const [menuItems, setMenuItems] = useState([]); // State for storing menu items of the selected menu

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/default/getAllMenus');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMenus(data); // Setting state with fetched menus array
            } catch (error) {
                console.error('Error fetching menus:', error);
            }
        };

        fetchMenus();
    }, []);

    // Function to handle menu selection change
    const handleMenuChange = async (event) => {
        const selectedMenuPk = event.target.value;
        const selectedMenuObject = menus.find(menu => menu.pk === selectedMenuPk); // Finding the selected menu object
        setSelectedMenu(selectedMenuObject); // Setting selected menu state

        try {
            const response = await fetch(`https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/retrieveMenu?menuId=${selectedMenuPk}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMenuItems(data); // Setting state with specific fetched menu
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <h1 className="text-center mb-4">View Your Menu</h1>
                    <Form>
                        <Form.Select
                            value={selectedMenu ? selectedMenu.pk : ''} // Setting value of the select input based on selectedMenu state
                            onChange={handleMenuChange} // Calling handleMenuChange on select change
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

            {/* Displaying selected menu details */}
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    {!menuItems ? null : (
                        <ul className="list-group">
                            {/* Rendering details of the selected menu */}
                            {Object.keys(menuItems).map((key, index) => {
                                if (key !== 'pk') { // Excluding 'pk' from rendering
                                    return (
                                        <li key={index} className="list-group-item">
                                            {menuItems[key]}
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
