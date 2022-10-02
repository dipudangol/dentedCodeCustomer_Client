import React from 'react'
import { Link } from 'react-router-dom';
import "./CategoryBar.css";



export const CategoryBar = ({ categories }) => {
  const activeCategories = Object.values(categories).filter((item) => item.status === "active");
  const parentCategory = Object.values(categories).filter((item) => item.parentId === null);
  console.log(parentCategory);
  return (
    <div>
      <div className='main'>
        <div className='category-container' style={{ width: "100%", height: "180px" }}>
          <div className='category-header d-flex gap-3 '>
            <h4>Shop by Category</h4>
            <Link to="/category" className='mt-2 text-decoration-none'> See All --></Link>
          </div>
          <div className='category-cards d-flex justify-content-around  w-100 py-1'>
            {
              parentCategory.map((item, i) => (
                <div className="category-card text-center ms-2">
                  <img className='w-100 h-100'
                    src={item.thumbnail ? "http://localhost:8000" + item.thumbnail : "./Images/books.png"}
                    alt={item.slug}
                    crossOrigin='anonymous'
                  />
                  <Link to={"/category/" + item._id}>
                    {item.name}
                  </Link>
                </div>
              ))
            }
            {/* <div className="category-card text-center ms-2">
              <img className='w-100 h-100' src="./Images/books.png" />
              Book
            </div>
            <div className="category-card text-center">
              <img className='w-100 h-100' src="./Images/decor.jpg" />
              Decor
            </div>
            <div className="category-card text-center">
              <img className='w-100 h-100' src="./Images/electronics.jpg" />
              Electronics
            </div><div className="category-card text-center">
              <img className='w-100 h-100' src="./Images/gadgets.jpg" />
              Gadgets
            </div><div className="category-card text-center">
              <img className='w-100 h-100' src="./Images/mouse.jpg" />
              mouse
            </div> */}
          </div>
        </div>

      </div>
    </div >
  )
}






