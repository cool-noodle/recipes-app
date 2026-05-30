import recipes from '../data/recipes.json';

export const getAllRecipes = () => {
    return recipes;
};

export const getRecipeById = (id) => {
    return recipes.find(
        (recipe) => recipe.menuId === Number(id)
    );
};

export const searchRecipes = (query) => {

    if (!query) return [];

    return recipes.filter((recipe) => {

        const search = query.toLowerCase();

        return (
            recipe.name.toLowerCase().includes(search) ||
            recipe.description.toLowerCase().includes(search) ||
            recipe.ingredients.some((ingredient) =>
                ingredient.name.toLowerCase().includes(search)
            )
        );
    });
};

export const getRecipesByCategory = (category) => {

    return recipes.filter(
        (recipe) => recipe.category === category
    );
};

