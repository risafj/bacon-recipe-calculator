function init () {
  const ingredientList = {
    salt: 'Kosher salt',
    pepper: 'Coarsely ground black pepper',
    sugar: 'Brown sugar',
    water: 'Distilled water',
    cure: 'Pink curing salt (Prague Powder)'
  }
  const meatWeightInput = document.getElementById('meat-weight')

  meatWeightInput.addEventListener('keyup', function (keyboardEvent) {
    if (keyboardEvent.keyCode === 13) {
      meatWeightInput.blur()
      onInputCompletion()
    }
  })

  meatWeightInput.addEventListener('blur', onInputCompletion)

  function onInputCompletion () {
    const meatWeight = meatWeightInput.value
    Object.keys(ingredientList).forEach(ingredientId => {
      displayIngredientWeight(ingredientId, meatWeight)
    })
  }

  function displayIngredientWeight (ingredientId, meatWeight) {
    const ingredientInGrams = calculateIngredientWeight(ingredientId, meatWeight)
    document.getElementById(ingredientId).textContent = `${ingredientList[ingredientId]}: ${ingredientInGrams}g`
  }

  function calculateIngredientWeight (ingredientId, meatWeight) {
    // The original recipe's meat weight is 3 lbs, which is 1,360 grams
    const meatWeightModifier = (meatWeight / 1360)

    let ingredientWeight
    switch (ingredientId) {
      case 'salt':
        ingredientWeight = (meatWeightModifier * 27)
        break
      case 'pepper':
        ingredientWeight = (meatWeightModifier * 10.5)
        break
      case 'sugar':
        ingredientWeight = (meatWeightModifier * 75)
        break
      case 'water':
        ingredientWeight = (meatWeightModifier * 177.5)
        break
      case 'cure': {
        const waterInLiters = (meatWeightModifier * 177) / 1000
        const meatInKilos = meatWeight / 1000
        const totalVolume = waterInLiters + meatInKilos
        ingredientWeight = totalVolume * 1000 * 150 / 1000000 / 0.0625
        break
      }
    }
    return (ingredientWeight.toFixed(1))
  }
}
init()