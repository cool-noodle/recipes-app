import React from 'react'
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';
import { getAllRecipes } from '../../services/recipesService'

const Recipes = () => {

     const items = getAllRecipes();

    return (
        <div className='px-6 lg:px-12 py-20'>

            <h1 className='text-3xl text-center font-semibold text-secondary sm:text-5xl sm:leading-relaxed mb-6 sm:mb-4'>
                כל המתכונים
            </h1>

            <CategoryWrapper />

            <ul className='mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    items.map((item) => (
                        <Card
                            key={item.menuId}
                            item={item}
                        />
                    ))
                }
            </ul>

        </div>
    )
}

export default Recipes