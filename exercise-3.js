const getRecipes = () => {
    return [
        {
            name: "salmon soup",
            vegan: false,
            ingredients: [
                { name: "salmon",  quantity: 1, }, 
                { name: "cream", quantity: 2, },
                { name: "milk", quantity: 1, },
            ]
        },
        {
            name: "carbonara",
            vegan: false,
            ingredients: [
                { name: "pasta", quantity: 5, },
                { name: "cheese", quantity: 5, },
                { name: "milk", quantity: 1, },
            ]
        },
        {
            name:"rice bowl",
            vegan: false,
            ingredients: [
                { name: "rice", quantity: 2, },
                { name: "water", quantity: 1, },
            ]
        }
    ];
}

//console.log(getRecipes());
//console.dir(getRecipes, {depth:null});

// Task: 1. Add a new recipe
//const addRecipe = (recipes, recipe) => {
    // check if recipe has name and vegan status
    // add recipe to recipes
    // return recipes array
//  }

const newRecipe = {
    name: "couscous verde bowl",
    vegan: true,
    ingredients: [
        { name: "salsa verde", quantity: 1, },
        { name: "whole-wheat couscous", quantity: 2},
        { name: "corn", quantity: 2, },
        { name: "black beans", quantity: 1, },
    ]
};

const addRecipe = (recipes, recipe) => {
        if (recipe.includes("name") && recipe.includes("vegan"))
        return recipes.concat(recipe);}

//console.log(addRecipe(getRecipes(),newRecipe));

