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

console.log(getRecipes());