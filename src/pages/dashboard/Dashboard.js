import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CategoryBar } from '../../components/DisplayBar/CategoryBar';
import { DisplayaBar1 } from '../../components/DisplayBar/DisplayaBar1';
import { DisplayaBar2 } from '../../components/DisplayBar/DisplayaBar2';
import AdminLayout from '../../components/layout/AdminLayout'
import { getCategoryAction } from './categoryAction';
import { getProductsAction } from './productAction';



export const Dashboard = () => {

  const { productList } = useSelector(state => state.products);
  const { categories } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !productList.length && dispatch(getProductsAction())
    !categories.length && dispatch(getCategoryAction())


  }, [dispatch, categories, productList]);

  console.log(categories);
  return (
    <AdminLayout>
      <Container>

        <div className='top-trending py-3'>
          <div className='d-flex  justify-content-start align-items-center gap-2'>
            <h3 className='m-1'>Top Trending  </h3>
            <Link to="/"><p className=' mt-2 mb-1'>See Details...</p></Link>
          </div>

          {/* Section to display category */}
          <CategoryBar categories={categories} />
          {/* Section to display recent products */}
          <DisplayaBar1 productList={productList} />

          {/* Section to display top products */}
          <DisplayaBar2 productList={productList} title="Top active product in the store" />



        </div>
      </Container>
    </AdminLayout>
  )
}
