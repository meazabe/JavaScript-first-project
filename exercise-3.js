/*  
function getRecipes() {
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
 
console.dir(getRecipes(), {depth:null});
 */

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


//Task: 1. Add a new recipe

const addRecipe = (func, recipe) => {
    return func.push(recipe); 
}

let newRecipe = {
        name: "couscous verde bowl",
        vegan: true,
        ingredients: [
            { name: "salsa verde", quantity: 1, },
            { name: "whole-wheat couscous", quantity: 2},
            { name: "corn", quantity: 2, },
            { name: "black beans", quantity: 1, },
        ]
    };

let allRecipes = getRecipes();
console.dir(addRecipe(allRecipes, newRecipe), {depth:null});