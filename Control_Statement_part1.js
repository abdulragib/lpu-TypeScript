function displayFoodInfo(calories, fatGrams) {
  const caloriesFromFat = fatGrams * 9;
  const fatPercentage = (caloriesFromFat / calories) * 100;
  if(caloriesFromFat > calories)
  {
     console.log(`This food has ${calories} calories greater ${caloriesFromFat} calories from fat.`)
  }
  else{
       console.log(`This food has ${calories} calories and ${fatPercentage}% of its calories come from fat.`);
      if (fatPercentage < 30) {
        console.log("This food is low in fat.");
      }
       else{
           console.log("This food is high in fat.");
       }
  }
}

displayFoodInfo(100,10)