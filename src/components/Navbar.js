import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav } from 'reactstrap';
import { useState } from 'react'



export const Navigation = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <Navbar
            color='dark'
            dark
            expand='md'
        >
            <NavbarToggler onClick = {() => {setIsOpen(!isOpen)}} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='mx-auto' navbar>
                    <NavItem>
                        <NavLink href="#">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>    
                        <NavLink href="#">
                            Calender
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  )
}

