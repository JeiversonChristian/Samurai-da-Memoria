const board = document.getElementById("gameBoard");
const modeSelect = document.getElementById("modeSelect");

// Pares para Hiragana
const hiraganaPairs = [
  { id: 1, display: "あ", match: "a" },
  { id: 2, display: "い", match: "i" },
  { id: 3, display: "う", match: "u" },
  { id: 4, display: "え", match: "e" },
  { id: 5, display: "お", match: "o" }
];

// Pares para Katakana
const katakanaPairs = [
  { id: 1, display: "ア", match: "a" },
  { id: 2, display: "イ", match: "i" },
  { id: 3, display: "ウ", match: "u" },
  { id: 4, display: "エ", match: "e" },
  { id: 5, display: "オ", match: "o" }
];

// Função que inicia o jogo com o conjunto de pares fornecido
function iniciarJogo(pairs) {
  modeSelect.style.display = "none";
  board.classList.add("active");
  board.innerHTML = "";

  let cards = [];
  pairs.forEach((pair) => {
    cards.push({ id: pair.id, content: pair.display });
    cards.push({ id: pair.id, content: pair.match });
  });

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
          // Match correto
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
}

// Eventos de clique para os botões de modo
document.querySelectorAll(".mode-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modo = btn.dataset.mode;
    if (modo === "hiragana") iniciarJogo(hiraganaPairs);
    else if (modo === "katakana") iniciarJogo(katakanaPairs);
  });
});
