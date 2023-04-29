import data from "./data.json" assert { type: "json" };

const SCORE = data[0].overallScore;
const REACTION = data[1];
const MEMORY = data[2];
const VERBAL = data[3];
const VISUAL = data[4];

// Dynamically load users score from JSON file
let userScore = document.getElementById("scored");
userScore.textContent = SCORE;

function createCard(object) {
  // Making main card element =>  <div></div>
  let card = document.createElement("div");
  // Adding class of card => <div class="card"></div>
  card.classList.add("card");
  // Adding background color to card through inline styling
  card.style.backgroundColor = object.bgColor;
  // Making info section of card
  let cardInfo = document.createElement("div");
  // Adding class of card_info
  cardInfo.classList.add("card_info");
  // Making icon section of info section
  let icon = document.createElement("img");
  icon.src = object.icon;
  icon.alt = `icon for ${object.category.toLowerCase()} chip`;
  // Adding class of icon to image
  icon.classList.add("icon");
  // Making score section of card
  let text = document.createElement("h3");
  text.style.color = object.textColor;
  let textContent = document.createTextNode(object.category);
  text.appendChild(textContent);
  let fraction = document.createElement("p");
  fraction.innerHTML = `<span class="stats_score">${object.score}</span>/<span class="stats_total">100</span>`;
  cardInfo.append(icon, text);
  card.append(cardInfo, fraction);
  let container = document.getElementById("stats");
  container.appendChild(card);
}

createCard(REACTION);
createCard(MEMORY);
createCard(VERBAL);
createCard(VISUAL);
