import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DisplayaBar2 } from '../../components/DisplayBar/DisplayaBar2';
import AdminLayout from '../../components/layout/AdminLayout'
import { getCategoryAction } from '../dashboard/categoryAction';
import { getProductsAction } from '../dashboard/productAction';

export const ProductByCategory = () => {
    const [data, setData] = useState({});
    const [categoryName, setCategoryName] = useState('');
    const { _id } = useParams();

    const { productList } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.category);
    const dispatch = useDispatch();


    useEffect(() => {
        !productList.length && dispatch(getProductsAction())
        !categories.length && dispatch(getCategoryAction())
        getProduct()

    }, [dispatch, categories, productList]);


    const getProduct = () => {
        if (productList.length) {
            const select = productList.filter((item) => item.catId === _id)
            setData(select);
        }
        if (categories.length) {
            const filterCategory = Object.values(categories).filter((item) => item._id === _id);
            setCategoryName(filterCategory[0].name);
            console.log(filterCategory[0].name)
        }




    }
    console.log(data);


    return (
        <AdminLayout>
            <Container>
                <div className='header-banner'>Shop by {categoryName}</div>
                {
                    data.length ?
                        <DisplayaBar2 productList={data} title={categoryName}></DisplayaBar2>



                        : (

                            <h4>No products in this category</h4>
                        )
                }

            </Container>

        </AdminLayout>
    )
}
