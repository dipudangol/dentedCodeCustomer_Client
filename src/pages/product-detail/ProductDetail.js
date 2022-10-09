import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AdminLayout from '../../components/layout/AdminLayout'
import { getCategoryAction } from '../dashboard/categoryAction';
import { getProductsAction } from '../dashboard/productAction';
import "./ProductDetail.css";

export const ProductDetail = () => {

  const [data, setData] = useState({});
  const [img, setImg] = useState({});
  const { productList } = useSelector(state => state.products);
  const { categories } = useSelector(state => state.category);
  const dispatch = useDispatch();
  const { _id } = useParams();


  let slides, dots, captionText;
  let slideIndex = 1;

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    // console.log(slides[slideIndex - 1].className);
    if (slides.length > 0 || dots.length > 0) {
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = dots[slideIndex - 1].alt;
    }
  }


  // Next/previous controls
  const plusSlides = (n) => {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  const currentSlide = (n) => {
    showSlides(slideIndex = n);
  }



  const getProduct = () => {
    if (productList.length) {
      const select = productList.filter((item) => item._id === _id)
      setData(select);
      setImg(select[0].images);
    }

  }


  useEffect(() => {
    !productList.length && dispatch(getProductsAction())
    !categories.length && dispatch(getCategoryAction())
    showSlides(1)
    getProduct()
  }, [dispatch, categories, productList,showSlides]);


  console.log(img);

  return (
    <AdminLayout>
      {/* <!-- Container for the image gallery --> */}
      <div class="container-display">

        {/* <!-- Full-width images with number text --> */}
        {
          img.length > 0 && img.forEach((item, i) => (
            <>
              <div class="mySlides">
                <div class="numbertext">{i + 1} / {img.length}</div>
                <img src={item ? "http://localhost:8000" + item : "https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg"} alt={item.sku}
                  crossOrigin='anonymous' className="w-100 h-100"
                />
                {/* <img src="img_woods_wide.jpg" style={{ width: "100%" }} /> */}
              </div>
            </>
          )
          )
        }

        {/* <div class="mySlides">
          <div class="numbertext">1 / 6</div>
          <img src="img_woods_wide.jpg" style={{ width: "100%" }} />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 6</div>
          <img src="img_5terre_wide.jpg" style={{ width: "100%" }} />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 6</div>
          <img src="img_mountains_wide.jpg" style={{ width: "100%" }} />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 6</div>
          <img src="img_lights_wide.jpg" style={{ width: "100%" }} />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 6</div>
          <img src="img_nature_wide.jpg" style={{ width: "100%" }} />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 6</div>
          <img src="img_snow_wide.jpg" style={{ width: "100%" }} />
        </div> */}

        {/* <!-- Next and previous buttons --> */}
        <a class="prev" onClick={() => plusSlides(-1)} >&#10094;</a>
        <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>

        {/* <!-- Image text --> */}
        <div class="caption-container">
          <p id="caption"></p>
        </div>

        {/* <!-- Thumbnail images --> */}
        <div class="row">
          <div class="column">
            <img class="demo cursor" src="img_woods.jpg" style={{ width: "100%" }} onClick={() => currentSlide(1)} alt="The Woods" />
          </div>
          <div class="column">
            <img class="demo cursor" src="img_5terre.jpg" style={{ width: "100%" }} onClick={() => currentSlide(2)} alt="Cinque Terre" />
          </div>
          <div class="column">
            <img class="demo cursor" src="img_mountains.jpg" style={{ width: "100%" }} onClick={() => currentSlide(3)} alt="Mountains and fjords" />
          </div>
          <div class="column">
            <img class="demo cursor" src="img_lights.jpg" style={{ width: "100%" }} onClick={() => currentSlide(4)} alt="Northern Lights" />
          </div>
          <div class="column">
            <img class="demo cursor" src="img_nature.jpg" style={{ width: "100%" }} onClick={() => currentSlide(5)} alt="Nature and sunrise" />
          </div>
          <div class="column">
            <img class="demo cursor" src="img_snow.jpg" style={{ width: "100%" }} onClick={() => currentSlide(6)} alt="Snowy Mountains" />
          </div>
        </div>
      </div>

    </AdminLayout>
  )
}
