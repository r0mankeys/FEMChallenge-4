// Variables
const score = document.getElementById("scored");
const cardContainer = document.querySelector("#stats");
const template = document.querySelector(".cards");

score.textContent = 76;

// Populate cardContainer
fetch("./data.json")
  .then((response) => response.json())
  .then((cards) => {
    cards.forEach((card) => {
      const mainCard = template.content.cloneNode(true).children[0];
      const cardIcon = mainCard.querySelector(".icon");
      const cardTitle = mainCard.querySelector(".card_title");
      const cardScore = mainCard.querySelector(".stats_score");
      mainCard.style.backgroundColor = card.bgColor;
      cardIcon.src = card.icon;
      cardTitle.textContent = card.category;
      cardTitle.style.color = card.textColor;
      cardScore.textContent = card.score;
      cardContainer.append(mainCard);
    });
  });
