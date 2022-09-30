import React from 'react'
import "./Carousel.css";

export const Carousel = ({ items }) => {
    return (

        <div>
            <section class="section-2">
                <div class="section-2-container">
                    <h3>Related to items you've viewed</h3>
                    <div class="product-cards">
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SY400_.jpg" alt="" />
                        </div>
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SY400_.jpg" alt="" />
                        </div>
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_SY400_.jpg" alt="" />
                        </div>
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SY400_.jpg" alt="" />
                        </div>
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/712B4P3yOnL._AC_SY400_.jpg" alt="" />
                        </div>
                        <div class="product-card">
                            <img src="https://m.media-amazon.com/images/I/51eTOVYRbTL._AC_SY400_.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
