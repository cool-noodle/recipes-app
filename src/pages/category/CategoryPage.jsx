import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import CategoryWrapper from './CategoryWrapper';
import Card from '../../components/Card';

import { getRecipesByCategory } from '../../services/recipesService';
import { getCategoryByName } from '../../services/categoriesService';

const CategoryPage = () => {

    const { category } = useParams();

    const [items, setItems] = useState([]);

    const currentCategory = getCategoryByName(category);

    useEffect(() => {

        const categoryItems = getRecipesByCategory(category);

        setItems(categoryItems);

    }, [category]);

    return (
        <div className='px-6 lg:px-12 py-10'>

            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize'>
                {currentCategory?.label}
            </h1>

            <CategoryWrapper />

            <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items.map(item => (
                        <Card
                            item={item}
                            key={item.menuId}
                        />
                    ))
                }
            </ul>

        </div>
    )
}

export default CategoryPage