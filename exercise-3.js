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

let recipes = getRecipes();

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

const addRecipe = (recipes, newRecipe) => {
        if (newRecipe.name && newRecipe.vegan != null)
        recipes.push(newRecipe)
        return recipes;
    }

//console.log(recipes);
//console.dir(recipes, {depth:null});
//console.log(addRecipe(getRecipes(),newRecipe));
//console.dir(addRecipe(recipes,newRecipe), {depth:null});
//recipes = addRecipe;
//console.dir(recipes(recipes, newRecipe), {depth:null});
recipes = addRecipe(recipes,newRecipe);
//console.dir(recipes, {depth:null});
// Task: 2. delete a recipe that matches a given name

const deleteRecipe = (recipes, recipe) => {
    const filteredOut = recipes.filter((recipe) => { 
        return recipe.name != "salmon soup";
    })
    return filteredOut;
}
//console.dir(deleteRecipe(recipes), {depth:null});
recipes = deleteRecipe(recipes);
//console.dir(recipes, {depth:null});

// Task: 3. get only vegan recipes

const getVegan = recipes.filter((recipe) => {
    return recipe.vegan === true;
})

//console.dir(getVegan, {depth:null});

// Task: 4. get the names of the ingredients of a recipe
const getIngredientNames = (recipes, recipeName) => {
    const findName = recipes.find((recipe) => { if (recipe.name.includes(recipeName))
        return recipeName;
    })
    const ingredientsName = findName.map((recipe) => {
    let ingredients = [];
    ingredients = recipe.ingredients;
    return ingredients;
    });
    return ingredientsName;
} 

console.log(getIngredientNames(recipes, "carbonara"));

