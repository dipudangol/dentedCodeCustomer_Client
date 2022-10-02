import React from 'react'
import "./DisplayaBar2.css";

export const DisplayaBar2 = ({ productList, title }) => {
    return (
        <div>
            <section class="section-3">
                <section class="section-3-container">
                    <h3>{title}</h3>
                    <div class="product-detail-cards">
                        {
                            productList && productList.map((item, i) => (
                                item && <>
                                    <div class="product-detail-card">
                                        <div class="product-detail-img">
                                            <img src={item ? "http://localhost:8000" + item.thumbnail : "https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg"} alt={item.sku}
                                                crossOrigin='anonymous' width="auto" height="auto"
                                            />
                                        </div>
                                        <a class="product-detail-link" href="./product.html">{item.name} </a>
                                        <p>
                                            <strong class="product-price">${item.price}</strong>
                                        </p>
                                        {
                                            item.salesEndDate && (

                                                <p class="product-deliver-by">Get it by <strong>{item.salesEndDate.substr(0, 10)}</strong></p>
                                            )
                                        }
                                        <p class="product-deliver-by">
                                            FREE Delivery inside city only at Dented Store.
                                        </p>
                                    </div>
                                </>
                            ))
                        }

                        <div class="product-detail-card">
                            <div class="product-detail-img">
                                <img src="https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg" alt="" />
                            </div>
                            <a class="product-detail-link" href="./product.html">2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with 10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a>
                            <p>
                                <strong class="product-price">₹ 3,99,999.00</strong>
                            </p>
                            <p class="product-deliver-by">Get it by <strong>Monday, August 22</strong>
                                FREE Delivery over ₹499. Fulfilled by Amazon.
                            </p>
                        </div>




                    </div>
                </section>
            </section>

        </div>
    )
}
