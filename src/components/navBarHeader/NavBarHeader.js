import React from 'react'
import { ButtonToolbar, Container, DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-pro-sidebar';
import DropDown from './DropDown';

export const NavBarHeader = ({ categories }) => {
    const parentCategory = Object.values(categories).filter((item) => item.parentId === null);
    // console.log(parentCategory);
    return (
        <>
            <Container>

                <div className='navbar d-flex justify-content-start gap-5'>
                    {
                        parentCategory.map((item, i) => (
                            <>
                                <ButtonToolbar>

                                    <DropdownButton
                                        title={item.name}
                                        bsStyle="default"
                                        key={i}
                                        noCaret
                                        id="dropdown-no-caret"
                                    >
                                        {
                                            categories.map((cat, i) => (
                                                (cat.parentId && cat.parentId === item._id) && (
                                                    <MenuItem eventKey={i} className="dropdown ps-2">{cat.name}</MenuItem>
                                                )
                                            ))
                                        }
                                    </DropdownButton>
                                </ButtonToolbar>

                            </>

                        ))
                    }
                </div>
            </Container>
        </>
    )
}
