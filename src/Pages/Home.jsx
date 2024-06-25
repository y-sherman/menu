import {Container, Button } from 'react-bootstrap';
import './Home.css';

export default function Home(){
    return(
            <Container className = "home-container mt-5">
                <div className = "text-center">
                    <h1 className = "display-4">Welcome to Team Menu App</h1>
                    <p className = "lead">
                        Create and store your menus with ease. For any occasion, we have you covered
                    </p>

                    <div className = "btn-row">
                        <Button variant ="outline-pink" className = "custom-btn" href = "/Add">
                            Add Menu
                        </Button>
                        <Button variant ="outline-pink" className = "custom-btn" href = "/Update">
                            Edit Menu
                        </Button>
                        <Button variant ="outline-pink" className = "custom-btn" href = "/Delete">
                            Delete a Menu
                        </Button>
                        <Button variant ="outline-pink" className = "custom-btn" href = "/Retrieve">
                            View a Menu
                        </Button>
                    </div>

                </div>
               
                <hr className = "my-4"/>

                <div className = "feature-section">
                    <div className = "row">
                        <div className = "col-md-6">
                            <h2 id = "create-menu">Create Your Menu</h2>
                            <p>
                                Easily create and customize menus for all different needs. Save, manage, and edit them effortlessly.
                            </p>
                        </div>
                        <div className = "col-md-6">
                            <h2>Store your Menus</h2>
                            <p>
                                Securely store all your created menus. Access them anytime, anywhere, and make updates as needed.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>        
    );
};
