# Recipe-Finder-App

# 🍽️ Recipe Search App

An interactive **Recipe Finder** built using **HTML**, **CSS**, and **JavaScript**, allowing users to search for delicious recipes by ingredients or dish name. It fetches real-time data from **TheMealDB API** and displays recipes with images, ingredients, and cooking instructions.

---

## 🎯 Objective

Create a responsive and dynamic recipe search application that:
- Accepts user input for ingredients or recipe name
- Fetches recipe data using a public API
- Displays a list of matching recipes with images
- Allows users to view detailed instructions and ingredients

---

## 📷 Output Preview

- 🔍 Search bar for entering ingredient or dish name
- 🍛 Recipe cards with thumbnails and brief info
- 📝 Click to reveal full recipe instructions and ingredients
- ❌ Clear search results and input
- 📱 Responsive layout for mobile & desktop

---

## ✅ Features

### 🔹 Core Features

1. **Search Input**
   - Enter a keyword (e.g., "chicken", "pasta")
   - Click search icon or press enter to begin search

2. **Fetch Recipes**
   - Uses **TheMealDB API**  
     API Endpoint:  
     `https://www.themealdb.com/api/json/v1/1/search.php?s=SEARCH_TERM`
   - Retrieves recipes that match the user query

3. **Display Results**
   - Shows recipe **name**, **thumbnail image**, and **category**
   - Clicking on a recipe expands a card or modal with:
     - Full ingredients list
     - Instructions
     - Optional YouTube tutorial link

4. **Clear Search**
   - Button to clear input field and search results

5. **Public Assets**
   - Optionally includes chef image and search icon from public sources

---

### 🌟 Bonus Features

- **🍴 Filter Recipes**
  - Filter by category (e.g., Dessert, Seafood) or cuisine (e.g., Indian, Italian)

- **💾 Save Favorites**
  - Store favorite recipes in `localStorage` for easy access

- **📱 Responsive Design**
  - Mobile-first layout with CSS Grid/Flexbox

---

## 💻 Tech Stack

- **HTML** – For structure and form elements
- **CSS** – For layout, responsiveness, and visuals
- **JavaScript** – For data fetching, DOM manipulation, and interaction
- **[TheMealDB API](https://www.themealdb.com/api.php)** – For recipe data (free, no API key required)

---

## 🛠 Development Guidelines

- Use `fetch()` to call API and process results
- Use `addEventListener()` for search and click events
- Dynamically create recipe cards using `document.createElement()`
- Manage state for selected recipe details
- Store and retrieve favorites using `localStorage`
- Use media queries or responsive units for mobile compatibility

---

## 📦 How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/recipe-search-app.git
   cd recipe-search-app
2. Open index.html in a Web Browser

3. Start Searching for Recipes!

   Try terms like beef, salad, or rice



