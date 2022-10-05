import React from 'react'

export const NavBarHeader = ({ categories }) => {
    const parentCategory = Object.values(categories).filter((item) => item.parentId === null);
    console.log(parentCategory);
    return (
        <div>NavBarHeader</div>
    )
}
