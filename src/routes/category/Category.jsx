import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className="category-container">
                {   products &&
                    products.map(product => {

                        return <ProductCard key={product.id} product={product}/>
                    })
                }
            </div>
        </>
        
    );
}

export default Category;