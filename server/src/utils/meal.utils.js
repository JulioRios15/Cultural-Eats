function getMealData(meal){
    let mealData = [];

    for (let i = 0; i < 20; i++) {
        const ingredient = meal[`strIngredient${i + 1}`]
        const measure = meal[`strMeasure${i + 1}`]
        if(ingredient !== "" && measure !== ""){
            mealData.push({
                ingredient,
                measure
            });
        }       
    }

    return mealData;
}

function getMealInstrunctions(meal){
    const instructions = meal.strInstructions.split('\r\n');
    return instructions;
}

module.exports = { getMealData, getMealInstrunctions}