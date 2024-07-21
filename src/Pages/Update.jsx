import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
export default function Update() {

    const [selectedMenu, setSelectedMenu] = useState([]);

    const [menus, setMenus] = useState([]);

    const [menuKey, setMenuKey] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [itemToUpdate, setItemToUpdate] = useState('');

    const [textInput, setTextInput] = useState("");


    useEffect(() => {
        fetch('https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/default/getAllMenus')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setMenus(data);
                console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error); // Properly log the error
            });
    }, [textInput]);

    console.log(menus);
    console.log(selectedMenu);


    const handleItemChange = (e) => {
        setTextInput(e.target.value);
        console.log("Text input: ", textInput);

    }

    const handleMenuChange = (event) => {
        const selectedMenuPk = event.target.value;
        const selectedMenuObject = menus.find(menu => menu.pk === selectedMenuPk);
        setSelectedMenu(selectedMenuObject);
        setMenuKey(selectedMenuPk);
        setShowForm(false);

    };
    console.log("selectedmenu: ", selectedMenu);
    console.log("menukey : ", menuKey);

    const toggleForm = (item) => {
        setShowForm(true);
        console.log("item: ", item);
        let index = (getKeyByValue(selectedMenu, item));
        setItemToUpdate(index);
        console.log("item to update: ", itemToUpdate);
    };

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    const handleSubmit = (e) => {
        setTextInput(textInput)
        // e.preventDefault();
        // console.log("update e : ", e.target);
        const params = {
            method: 'POST',
            body: JSON.stringify({
                "attributeName": itemToUpdate,
                "newValue": textInput,
            }),
        };
        fetch(`https://rs8vy4dblh.execute-api.us-east-1.amazonaws.com/CORE-enabled/updateMenu?menuId=${menuKey}`, params)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
        const updatedMenu = menus.map((menu) => {
            const key = Object.keys(menu)[0];
            if (key === selectedMenu[0]) {
                const updatedItems = menu[key].map((item) =>
                    item === itemToUpdate ? textInput : item
                );

                return { [key]: updatedItems };
            }
            setMenus(updatedMenu);
            setShowForm(false);
            setTextInput('');
            return menu;


        });
    };


    return (
        <>

            <h1 className="text-center mt-4">Update Menu Items </h1>
            <div className="d-flex justify-content-center">
                <Form>
                    <Form.Select
                        value={selectedMenu}
                        onChange={handleMenuChange}
                    >   <option>Select a Menu</option>
                        {menus.map((menu, index) => (
                            <option key={index} value={menu.pk}>
                                {menu.pk}
                            </option>

                        ))}
                    </Form.Select>
                </Form>
            </div>

            <div className="d-flex justify-content-center mt-3">
                {!showForm && selectedMenu && Object.keys(selectedMenu).map((key) => {
                    if (key !== 'pk') { // Exclude the 'pk' property
                        console.log("key: ", selectedMenu[key]);

                        return (
                            <Button
                                className="btn btn-primary mx-2"

                                onClick={() => toggleForm(selectedMenu[key])}
                                variant="info"
                                key={key}
                            >
                                {selectedMenu[key]}
                            </Button>

                        );
                    }
                    return null;
                })}
            </div>

            {showForm && (
                <div className='d-flex flex-column align-items-center mt-4'>
                    <div style={{ width: '50%' }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId='itemUpdate' className="mb-3 text-center">
                                <Form.Label>Input the updated value</Form.Label>
                                <Form.Control type="text" placeholder='Enter text' value={textInput} onChange={handleItemChange} />

                            </Form.Group>
                            <div className='mt-3' style={{ width: '100%' }}>
                                <Button variant="info" type="submit" className="w-100">Update</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            )};


        </>

    );

}
