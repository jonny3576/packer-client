import React, { Component } from 'react';
import { Navbar, Nav, Form} from 'react-bootstrap';
class NavigationBar extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <img
                        src="Images/Packer.png"
                        width="110px"
                        height="50x"
                        alt="Company Logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>My Deliveries</Nav.Link>
                    <Nav.Link>Be A Driver</Nav.Link>
                    <Nav.Link>Send anything</Nav.Link>

                </Nav>

                <Form inline>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                         width="50px"
                         height="50x"
                         alt="Account Icon"
                         style={{marginLeft: '10px'}}
                    />
                </Form>



            </Navbar>
        );
    }

}
export default NavigationBar;