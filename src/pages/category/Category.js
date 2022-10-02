import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { DisplayaBar2 } from '../../components/DisplayBar/DisplayaBar2';
import AdminLayout from '../../components/layout/AdminLayout'
import { getCategoryAction } from '../dashboard/categoryAction';
import { getProductsAction } from '../dashboard/productAction';

export const Category = () => {
    const [tempProduct, setTempProduct] = useState({});
    const { productList } = useSelector(state => state.products);
    const { categories } = useSelector(state => state.category);
    const dispatch = useDispatch();

    const getProductByCategory = () => {
        categories.length && categories.map((item, i) => {
            let parentCategory = Object.values(productList).filter((product) => product.catId === item._id)
            parentCategory.length && console.log(parentCategory, "from function");
        })


    }


    useEffect(() => {
        !productList.length && dispatch(getProductsAction())
        !categories.length && dispatch(getCategoryAction())
        getProductByCategory()



    }, [dispatch, categories, productList, getProductByCategory]);



    // console.log(productList)

    return (
        <AdminLayout>
            <Container>
                <div className="pt-2">Category</div>
                {categories.length && categories.map((item, i) => (

                    productList.map((product, i) => (

                        (item._id === product.catId) && <div>{product.name}</div>
                        //     (

                        //         < DisplayaBar2 productList={tempProduct} title={item.name} />
                        //     )

                    ))

                ))
                }
            </Container>
        </AdminLayout >
    )
}
