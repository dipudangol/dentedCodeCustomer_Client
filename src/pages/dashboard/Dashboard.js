import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel } from '../../components/carousel/Carousel';
import AdminLayout from '../../components/layout/AdminLayout'
import { getProductsAction } from './productAction';




export const Dashboard = () => {

  const { productList } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => { !productList.length && dispatch(getProductsAction()) }, [dispatch, productList]);
  console.log(productList);
  return (
    <AdminLayout>
      <Container>

        <div className='top-trending py-3'>
          <div >
            <h3 className='d-inline'>Top Trending </h3>
            <Link to ="/"><p className='d-inline'>See Details...</p></Link>
          </div>

          <Carousel items={productList} />


        </div>
      </Container>
    </AdminLayout>
  )
}
