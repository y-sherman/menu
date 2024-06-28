import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
export default function Update() {

    const [menu, setMenu] = useState([
        { 'Shabbos': ['Challah', 'Soup', 'Chicken'] },
        { 'SundayDinner': ['Chicken Cutlets', 'Brocoli', 'Rice'] },
        { 'FamilyBBQ': ['Hot dogs', 'Grilled Chicken', ' Corn', 'French Fries'] }
    ])


    const [selectedMenu, setSelectedMenu] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [itemToUpdate, setItemToUpdate] = useState('');


    const [textInput, setTextInput] = useState("");


    const handleItemChange = (e) => {
        setTextInput(e.target.value)

    }

    const handleMenuChange = (e) => {
        const selectedValue = JSON.parse(e.currentTarget.value);
        const selectedArray = Object.values(selectedValue)[0];
        setSelectedMenu(selectedArray)
    }

    const toggleForm = (item) => {
        setShowForm(true);
        setItemToUpdate(item)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMenu = menu.map((menuItem) => {
            const key = Object.keys(menuItem)[0];
            if (key === selectedMenu[0]) {
                const updatedItems = menuItem[key].map((item) =>
                    item === itemToUpdate ? textInput : item
                );

                return { [key]: updatedItems };
            }
            return menuItem;


        }
        )

        setMenu(updatedMenu);
        setShowForm(false);
        setTextInput('');
    }

    return (
        <>

            <h2 className="text-center mt-4">Update Menu Items </h2>

            <div className="d-flex justify-content-center">
                <Form>
                    <Form.Select
                        value={JSON.stringify(menu.find(item => Object.keys(item)[0] === selectedMenu[0]))}
                        onChange={handleMenuChange}>
                        <Form.Label>Select a Menu</Form.Label>
                        <option value={JSON.stringify(menu[0])}>Shabbos</option>
                        <option value={JSON.stringify(menu[1])}>Sunday Dinner</option>
                        <option value={JSON.stringify(menu[2])}>Family BBQ</option>
                    </Form.Select>
                </Form>
            </div>

            <div className="d-flex justify-content-center mt-3">
                {showForm ? null : (
                    selectedMenu.map((item, index) => (
                        <Button className="btn btn-primary mx-2" onClick={() => toggleForm(item)} variant="info" key={index}>{item}</Button>
                    ))
                )}
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
            )}


        </>

    )
}
