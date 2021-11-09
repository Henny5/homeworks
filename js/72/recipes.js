(function () {
  'use strict';

  const recipeSelect = $('#recipes');
  const recipeNameElem = $('#recipe h2');
  const recipePictureElem = $('#recipe img');
  const recipeIngredientsList = $('#recipe ul');
  const errorElem = $('#error');

  async function loadJson(url) {
    //can use async or .then now they reall yus async
    //loads wahtever url u want and if it fails itll put an errror
    //put whole try catch in this function
    try {
      const response = await fetch(url);
      //await instead of .then
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      return result;
    }
    catch (e) {
      errorElem.text(e.message);
    }
  }

  async function recipeSelected(recipeToLoad) {
    const recipe = await loadJson(`${recipeToLoad}.json`);
    //thsi try catch was doing same hing as above so jsut added the func name here
    if (recipe) {
      console.log(recipe);

      recipeNameElem.text(recipe.name);
      recipePictureElem.attr('src', recipe.picture);

      recipeIngredientsList.empty();
      //clears out the old ingredients beofre adding the new ones
      recipe.ingredients.forEach(i => {
        recipeIngredientsList.append(`<li>${i}</li>`);
      });
    }
  }

  async function loadRecipes() {
    const recipes = await loadJson('recipes.json');
    if (recipes) {
      recipes.forEach(recipe => {
        recipeSelect.append(`<option value="${recipe.id}">${recipe.name}</option>`);
        //populates the select with the opts
        //did recipe .name adn id bec those r the two catagories on the json also y u put value 
        //want ti to save to the id not the databasae
      });
    }

    recipeSelect.change(function () {
      //dont really need this bec already hv what was selected on recipeselect
      //here were trying to make something change based on what we picked
      //.change same idea as .click..
      console.log(this.value);//*e.target.value=would be if usinga arrow func instead of reg func where cx use this);
      recipeSelected(this.value);
    });
  }

  loadRecipes();
}());