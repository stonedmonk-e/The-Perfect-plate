# The-Perfect-Plate
A dynamic recipe search platform that fetches customized recipes using the Edamam API.

## Key Features:
✅ Interactive Web Interface – Built with HTML, CSS, and JavaScript for a seamless user experience.
✅ Real-Time Recipe Search – Users can input ingredients or dish names, and the app fetches relevant recipes.
✅ API Integration – Uses the Edamam API to retrieve recipe details, including calories, diet labels, and health labels.
✅ Asynchronous Data Fetching – Utilizes fetch() and async/await for smooth API calls.
✅ Dynamic Content Generation – JavaScript dynamically updates the page with fetched recipe data.
✅ User-Friendly Design – Responsive UI with easy navigation and visually appealing recipe cards.

## Edamam API Overview
The Edamam API is a powerful food and nutrition API that provides access to recipe data, ingredient analysis, and nutrition information. It allows developers to fetch recipe details, calorie counts, diet labels, and health classifications based on user queries.

**Types of Edamam APIs:**
Recipe Search API – Fetches recipes based on ingredients or dish names.
Nutrition Analysis API – Analyzes ingredients and returns detailed nutritional information.
Food Database API – Provides food data, nutrients, and diet compatibility.

A successful API request returns a JSON object like this:

{
  "q": "pasta",
  "hits": [
    {
      "recipe": {
        "label": "Creamy Tomato Pasta",
        "image": "https://example.com/pasta.jpg",
        "url": "https://recipe-site.com/creamy-tomato-pasta",
        "calories": 450.5,
        "dietLabels": ["Low-Carb"],
        "healthLabels": ["Vegetarian", "Gluten-Free"]
      }
    }
  ]
}

How It's Used in "The Perfect Plate" Project
The search query is captured from the user and sent to the Edamam API.
The API fetches matching recipes based on the input.
JavaScript dynamically updates the webpage with recipe results.
Users can view detailed recipes via external links.

## UI
**Search Page**

![image](https://github.com/user-attachments/assets/4c19a0df-189c-4eca-912c-d408cceda5e1)


**Results Page**

![image](https://github.com/user-attachments/assets/72b13107-d8bf-416c-bc70-bcc25d28ed77)

