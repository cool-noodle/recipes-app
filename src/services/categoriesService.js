import categories from '../data/category.json';

export const getAllCategories = () => {
    return categories;
};

export const getCategoryByName = (name) => {
    return categories.find(
        (category) => category.name === name
    );
};