import React from 'react'
import "./Carousel.css";

export const Carousel = ({ items }) => {
    return (

        <div>

<section class="section-1">
        <div class="section-1-container">
            <div class="section-1-column">
                <h3>Top picks for your home</h3>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg" alt=""/>
                <p>See more</p>
            </div>
            <div class="section-1-column">
                <h3>Top rated, premium quality | Amazon Brands & more</h3>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_2X_V2_5._SY232_CB636581721_.jpg" alt=""/>
                <p>See more</p>
            </div>
            <div class="section-1-column">
                <h3>Shop & Pay | Earn rewards daily</h3>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg" alt=""/>
                <p>See more</p>
            </div>
            <div class="section-1-column">
                <h3>Sign in for your best experience</h3>
                <button>Sign in securely</button>
            </div>
        </div>
    </section>
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
