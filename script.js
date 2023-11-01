const FoodData = require('./food.json');

// Task 1

function listAllFoodItems(){
    return FoodData;
}
console.log(listAllFoodItems())

// Task 2

function listVegetableFoodItem(){
    return FoodData.filter((food) => food.category === 'vegetable');
}
console.log(listVegetableFoodItem())

// Task 3

function listFruitFoodItems(){
    return FoodData.filter((food) => food.category === 'fruit');
}
console.log(listFruitFoodItems())

// Task 4

function listProteinFoodItems(){
    return FoodData.filter((food) => food.category === 'protein');
}
console.log(listProteinFoodItems())

// Task 5

function listNutsFoodItems(){
        return FoodData.filter((food) => food.category === 'nuts');
    }
    console.log(listNutsFoodItems())

    // Task 6

function listGrainsFoodItems(){
    return FoodData.filter((food) => food.category === 'grains');
}
console.log(listGrainsFoodItems())

// Task 7

function listDairyFoodItems(){
        return FoodData.filter((food) => food.category === 'dairy');
    }
    console.log(listDairyFoodItems())

    // Task 8 

function listFoodItemsAboveCalorie(calorie){
    return FoodData.filter((food) => food.calorie > calorie);
}
console.log(listFoodItemsAboveCalorie(100))

// Task 9

function listFoodItemsBelowCalorie(calorie){
    return FoodData.filter((food) => food.calorie < calorie); 
}
console.log(listFoodItemsBelowCalorie(100))

// Task 10

function listFoodItemsByProtienContent(){
    return FoodData.sort((a, b) => b.protiens - a.protiens);
}
console.log(listFoodItemsByProtienContent())

// Task 11

function listFoodItemsByCarbContent(){
    return FoodData.sort((a, b) => a.carb - b.carb);
}
console.log(listFoodItemsByCarbContent())
