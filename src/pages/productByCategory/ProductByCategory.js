import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../../components/layout/AdminLayout'
import { getProductsAction } from '../dashboard/productAction';

export const ProductByCategory = () => {

    const { productList } = useSelector(state => state.products);
    const dispatch = useDispatch();


    useEffect(() => {
        !productList.length && dispatch(getProductsAction())



    }, [dispatch, productList]);


    return (
        <AdminLayout>
            <Container>

                <div>ProductByCategory</div>
            </Container>

        </AdminLayout>
    )
}
