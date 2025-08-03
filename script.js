const board = document.getElementById("gameBoard");

// Lista de pares: cada um tem hiragana e romanização
const pairs = [
  { id: 1, display: "あ", match: "a" },
  { id: 2, display: "い", match: "i" },
  { id: 3, display: "う", match: "u" },
  { id: 4, display: "え", match: "e" },
  { id: 5, display: "お", match: "o" }
];

// Cria dois cards para cada par: um com hiragana, outro com romanização
let cards = [];
pairs.forEach((pair) => {
  cards.push({ id: pair.id, content: pair.display }); // hiragana
  cards.push({ id: pair.id, content: pair.match });   // romaji
});

// Embaralha os cards
cards = cards.sort(() => 0.5 - Math.random());

let firstCard = null;
let lock = false;

cards.forEach(({ id, content }) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = id;
  card.innerText = "";

  card.addEventListener("click", () => {
    if (lock || card.classList.contains("revealed")) return;

    card.classList.add("revealed");
    card.innerText = content;

    if (!firstCard) {
      firstCard = card;
    } else {
      lock = true;
      if (card.dataset.id === firstCard.dataset.id && card !== firstCard) {
        // Match encontrado!
        firstCard = null;
        lock = false;
      } else {
        // Não é par
        setTimeout(() => {
          card.classList.remove("revealed");
          firstCard.classList.remove("revealed");
          card.innerText = "";
          firstCard.innerText = "";
          firstCard = null;
          lock = false;
        }, 1000);
      }
    }
  });

  board.appendChild(card);
});
