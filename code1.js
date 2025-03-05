const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const APP_ID = "413b0846";
const APP_key = "507ed9661667d8440912b8f8fa9b71b2";
// console.log(container)
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
});

/* To fetch the API response */

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=100`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

/* JavaScript for generating and displaying results */

function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
        generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-btn" target="_blank" href="${result.recipe.url
            }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${result.recipe.dietLabels.length > 0
                ? result.recipe.dietLabels
                : "No Data Found"
            }
        </p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
    });
    searchResultDiv.innerHTML = generatedHTML;
}

/* JavaScript for switching between light and dark mode */
const toggleSwitch = document.querySelector('#theme-toggle');
const themeStyle = document.createElement('link');
themeStyle.rel = 'stylesheet';

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        themeStyle.href = 'dark.css';
    } else {
        themeStyle.href = 'light.css';
    }

    document.querySelector('head').appendChild(themeStyle);
});
