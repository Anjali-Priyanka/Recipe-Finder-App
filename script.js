const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("resultsContainer");
const recipeView = document.getElementById("recipeView");
const introSection = document.getElementById("introSection");

searchBtn.addEventListener("click", searchRecipes);

async function searchRecipes() {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();

    if (data.meals) {
      displayRecipes(data.meals);
    } else {
      resultsContainer.innerHTML = "<p>No results found.</p>";
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    resultsContainer.innerHTML = "<p>Something went wrong.</p>";
  }
}

function displayRecipes(meals) {
  resultsContainer.innerHTML = "";
  resultsContainer.style.display = "grid";
  recipeView.style.display = "none";
  introSection.style.display = "block";

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const card = document.createElement("div");
    card.className = "meal-card";

    card.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <button class="view-btn" data-id="${meal.idMeal}">View Recipe</button>
    `;

    resultsContainer.appendChild(card);
  }

  const viewButtons = document.getElementsByClassName("view-btn");
  for (let j = 0; j < viewButtons.length; j++) {
    viewButtons[j].addEventListener("click", function (e) {
      const id = e.target.getAttribute("data-id");
      showRecipeDetail(id);
    });
  }
}

async function showRecipeDetail(mealId) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    const meal = data.meals[0];

    resultsContainer.style.display = "none";
    introSection.style.display = "none";
    recipeView.style.display = "block";
    recipeView.innerHTML = `
      <a href="#" id="backBtn" style="display:inline-block;margin-bottom:20px;font-size:16px;color:#333;">← Back to results</a>
      <div class="recipe-detail">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="text">
          <h2>${meal.strMeal}</h2>
          <div class="tags">
            <span class="tag">${meal.strCategory}</span>
            <span class="tag">${meal.strArea}</span>
          </div>
          <a href="${meal.strYoutube}" target="_blank" class="video-btn">Watch Video Tutorial</a>
        </div>
      </div>
      <div class="grid">
        <div class="ingredients">
          <h3>Ingredients</h3>
          <ul>${getIngredients(meal)}</ul>
        </div>
        <div class="instructions">
          <h3>Instructions</h3>
          <p>${meal.strInstructions}</p>
        </div>
      </div>
    `;

    document.getElementById("backBtn").addEventListener("click", function (e) {
      e.preventDefault();
      recipeView.style.display = "none";
      introSection.style.display = "block";
      resultsContainer.style.display = "grid";
    });
  } catch (error) {
    console.error("Error fetching recipe detail:", error);
    recipeView.innerHTML = "<p>Failed to load recipe.</p>";
  }
}

function getIngredients(meal) {
  let ingredientsHTML = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredientsHTML += `<li>${ingredient} - ${measure}</li>`;
    }
  }
  return ingredientsHTML;
}
// Handle suggestion buttons like search
const suggestionButtons = document.querySelectorAll(".suggestions button");

for (let i = 0; i < suggestionButtons.length; i++) {
  suggestionButtons[i].addEventListener("click", function () {
    const value = this.textContent;
    searchInput.value = value;
    searchRecipes();
  });
}