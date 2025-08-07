const board = document.getElementById("gameBoard");
const modeSelect = document.getElementById("modeSelect");
const restartButton = document.getElementById("restartButton");
const backButton = document.getElementById("backButton");
const gameControls = document.getElementById("gameControls");

// Pares para Hiragana
const hiraganaPairs = [

  // Vogais

  { id: 1, display: "あ", match: "a" },
  { id: 2, display: "い", match: "i" },
  { id: 3, display: "う", match: "u" },
  { id: 4, display: "え", match: "e" },
  { id: 5, display: "お", match: "o" },

  // Não vogais

  // K
  { id: 6, display: "か", match: "ka" },
  { id: 7, display: "き", match: "ki" },
  { id: 8, display: "く", match: "ku" },
  { id: 9, display: "け", match: "ke" },
  { id: 10, display: "こ", match: "ko" },

  // S
  { id: 11, display: "さ", match: "sa" },
  { id: 12, display: "し", match: "shi" },
  { id: 13, display: "す", match: "su" },
  { id: 14, display: "せ", match: "se" },
  { id: 15, display: "そ", match: "so" },

  // T
  { id: 16, display: "た", match: "ta" },
  { id: 17, display: "ち", match: "chi" },
  { id: 18, display: "つ", match: "tsu" },
  { id: 19, display: "て", match: "te" },
  { id: 20, display: "と", match: "to" },

  // N
  { id: 21, display: "な", match: "na" },
  { id: 22, display: "に", match: "ni" },
  { id: 23, display: "ぬ", match: "nu" },
  { id: 24, display: "ね", match: "ne" },
  { id: 25, display: "の", match: "no" },

  // H
  { id: 26, display: "は", match: "ha" },
  { id: 27, display: "ひ", match: "hi" },
  { id: 28, display: "ふ", match: "fu" },
  { id: 29, display: "へ", match: "he" },
  { id: 30, display: "ほ", match: "ho" },

  // M
  { id: 31, display: "ま", match: "ma" },
  { id: 32, display: "み", match: "mi" },
  { id: 33, display: "む", match: "mu" },
  { id: 34, display: "め", match: "me" },
  { id: 35, display: "も", match: "mo" },

  // Y
  { id: 36, display: "や", match: "ya" },
  { id: 37, display: "ゆ", match: "yu" },
  { id: 38, display: "よ", match: "yo" },

  // R
  { id: 39, display: "ら", match: "ra" },
  { id: 40, display: "り", match: "ri" },
  { id: 41, display: "る", match: "ru" },
  { id: 42, display: "れ", match: "re" },
  { id: 43, display: "ろ", match: "ro" },

  // W
  { id: 44, display: "わ", match: "wa" },
  { id: 45, display: "を", match: "wo" },

  // n
  { id: 46, display: "ん", match: "n" },

  // Dakuon

  // G
  { id: 47, display: "が", match: "ga" },
  { id: 48, display: "ぎ", match: "gi" },
  { id: 49, display: "ぐ", match: "gu" },
  { id: 50, display: "げ", match: "ge" },
  { id: 51, display: "ご", match: "go" },

  // Z
  { id: 52, display: "ざ", match: "za" },
  { id: 53, display: "じ", match: "ji" },
  { id: 54, display: "ず", match: "zu" },
  { id: 55, display: "ぜ", match: "ze" },
  { id: 56, display: "ぞ", match: "zo" },

  // D
  { id: 57, display: "だ", match: "da" },
  { id: 58, display: "ぢ", match: "ji" },
  { id: 59, display: "づ", match: "zu" },
  { id: 60, display: "で", match: "de" },
  { id: 61, display: "ど", match: "do" },

  // B
  { id: 62, display: "ば", match: "ba" },
  { id: 63, display: "び", match: "bi" },
  { id: 64, display: "ぶ", match: "bu" },
  { id: 65, display: "べ", match: "be" },
  { id: 66, display: "ぼ", match: "bo" },

  // Handakuon

  // P
  { id: 67, display: "ぱ", match: "pa" },
  { id: 68, display: "ぴ", match: "pi" },
  { id: 69, display: "ぷ", match: "pu" },
  { id: 70, display: "ぺ", match: "pe" },
  { id: 71, display: "ぽ", match: "po" },

  // Compostos

  // K
  { id: 72, display: "きゃ", match: "kya" },
  { id: 73, display: "きゅ", match: "kyu" },
  { id: 74, display: "きょ", match: "kyo" },

  // S
  { id: 75, display: "しゃ", match: "sha" },
  { id: 76, display: "しゅ", match: "shu" },
  { id: 77, display: "しょ", match: "sho" },

  // T
  { id: 78, display: "ちゃ", match: "cha" },
  { id: 79, display: "ちゅ", match: "chu" },
  { id: 80, display: "ちょ", match: "cho" },

  // N
  { id: 81, display: "にゃ", match: "nya" },
  { id: 82, display: "にゅ", match: "nyu" },
  { id: 83, display: "にょ", match: "nyo" },

  // H
  { id: 84, display: "ひゃ", match: "hya" },
  { id: 85, display: "ひゅ", match: "hyu" },
  { id: 86, display: "ひょ", match: "hyo" },

  // M
  { id: 87, display: "みゃ", match: "mya" },
  { id: 88, display: "みゅ", match: "myu" },
  { id: 89, display: "みょ", match: "myo" },

  // R
  { id: 90, display: "りゃ", match: "rya" },
  { id: 91, display: "りゅ", match: "ryu" },
  { id: 92, display: "りょ", match: "ryo" },

  // Compostos vozeados

  //G
  { id: 93, display: "ぎゃ", match: "gya" },
  { id: 94, display: "ぎゅ", match: "gyu" },
  { id: 95, display: "ぎょ", match: "gyo" },

  // J
  { id: 96, display: "じゃ", match: "ja" },
  { id: 97, display: "じゅ", match: "ju" },
  { id: 98, display: "じょ", match: "jo" },

  // B
  { id: 99, display: "びゃ", match: "bya" },
  { id: 100, display: "びゅ", match: "byu" },
  { id: 101, display: "びょ", match: "byo" },

  // P
  { id: 102, display: "ぴゃ", match: "pya" },
  { id: 103, display: "ぴゅ", match: "pyu" },
  { id: 104, display: "ぴょ", match: "pyo" },

  // Sons prolongados

  { id: 105, display: "っ+k", match: "kk" },
  { id: 106, display: "っ+s", match: "ss" },
  { id: 107, display: "っ+t", match: "tt" },
  { id: 108, display: "っ+p", match: "pp" },

  // Vogais prolongadas

  { id: 109, display: "ああ", match: "aa" },
  { id: 110, display: "いい", match: "ii" },
  { id: 111, display: "うう", match: "uu" },
  { id: 112, display: "ええ", match: "ee" },
  { id: 113, display: "おお", match: "oo" },
  { id: 114, display: "えい", match: "ei" },
  { id: 115, display: "おう", match: "ou" }

];

// Pares para Katakana
const katakanaPairs = [

  // Vogais

  { id: 1, display: "ア", match: "a" },
  { id: 2, display: "イ", match: "i" },
  { id: 3, display: "ウ", match: "u" },
  { id: 4, display: "エ", match: "e" },
  { id: 5, display: "オ", match: "o" },

  // Não vogais

  // K
  { id: 6, display: "カ", match: "ka" },
  { id: 7, display: "キ", match: "ki" },
  { id: 8, display: "ク", match: "ku" },
  { id: 9, display: "ケ", match: "ke" },
  { id: 10, display: "コ", match: "ko" },

  // S
  { id: 11, display: "サ", match: "sa" },
  { id: 12, display: "シ", match: "shi" },
  { id: 13, display: "ス", match: "su" },
  { id: 14, display: "セ", match: "se" },
  { id: 15, display: "ソ", match: "so" },

  // T
  { id: 16, display: "タ", match: "ta" },
  { id: 17, display: "チ", match: "chi" },
  { id: 18, display: "ツ", match: "tsu" },
  { id: 19, display: "テ", match: "te" },
  { id: 20, display: "ト", match: "to" },

  // N
  { id: 21, display: "ナ", match: "na" },
  { id: 22, display: "ニ", match: "ni" },
  { id: 23, display: "ヌ", match: "nu" },
  { id: 24, display: "ネ", match: "ne" },
  { id: 25, display: "ノ", match: "no" },

  // H
  { id: 26, display: "ハ", match: "ha" },
  { id: 27, display: "ヒ", match: "hi" },
  { id: 28, display: "フ", match: "fu" },
  { id: 29, display: "ヘ", match: "he" },
  { id: 30, display: "ホ", match: "ho" },

  // M
  { id: 31, display: "マ", match: "ma" },
  { id: 32, display: "ミ", match: "mi" },
  { id: 33, display: "ム", match: "mu" },
  { id: 34, display: "メ", match: "me" },
  { id: 35, display: "モ", match: "mo" },

  // Y
  { id: 36, display: "ヤ", match: "ya" },
  { id: 37, display: "ユ", match: "yu" },
  { id: 38, display: "ヨ", match: "yo" },

  // R
  { id: 39, display: "ラ", match: "ra" },
  { id: 40, display: "リ", match: "ri" },
  { id: 41, display: "ル", match: "ru" },
  { id: 42, display: "レ", match: "re" },
  { id: 43, display: "ロ", match: "ro" },

  // W
  { id: 44, display: "ワ", match: "wa" },
  { id: 45, display: "ヲ", match: "wo" },

  // n
  { id: 46, display: "ン", match: "n" },

  // Dakuon

  // G
  { id: 47, display: "ガ", match: "ga" },
  { id: 48, display: "ギ", match: "gi" },
  { id: 49, display: "グ", match: "gu" },
  { id: 50, display: "ゲ", match: "ge" },
  { id: 51, display: "ゴ", match: "go" },

  // Z
  { id: 52, display: "ザ", match: "za" },
  { id: 53, display: "ジ", match: "ji" },
  { id: 54, display: "ズ", match: "zu" },
  { id: 55, display: "ゼ", match: "ze" },
  { id: 56, display: "ゾ", match: "zo" },

  // D
  { id: 57, display: "ダ", match: "da" },
  { id: 58, display: "ヂ", match: "ji" },
  { id: 59, display: "ヅ", match: "zu" },
  { id: 60, display: "デ", match: "de" },
  { id: 61, display: "ド", match: "do" },

  // B
  { id: 62, display: "バ", match: "ba" },
  { id: 63, display: "ビ", match: "bi" },
  { id: 64, display: "ブ", match: "bu" },
  { id: 65, display: "ベ", match: "be" },
  { id: 66, display: "ボ", match: "bo" },

  // Handakuon

  // P
  { id: 67, display: "パ", match: "pa" },
  { id: 68, display: "ピ", match: "pi" },
  { id: 69, display: "プ", match: "pu" },
  { id: 70, display: "ペ", match: "pe" },
  { id: 71, display: "ポ", match: "po" },

  // Compostos

  // K
  { id: 72, display: "キャ", match: "kya" },
  { id: 73, display: "キュ", match: "kyu" },
  { id: 74, display: "キョ", match: "kyo" },

  // S
  { id: 75, display: "シャ", match: "sha" },
  { id: 76, display: "シュ", match: "shu" },
  { id: 77, display: "ショ", match: "sho" },

  // T
  { id: 78, display: "チャ", match: "cha" },
  { id: 79, display: "チュ", match: "chu" },
  { id: 80, display: "チョ", match: "cho" },

  // N
  { id: 81, display: "ニャ", match: "nya" },
  { id: 82, display: "ニュ", match: "nyu" },
  { id: 83, display: "ニョ", match: "nyo" },

  // H
  { id: 84, display: "ヒャ", match: "hya" },
  { id: 85, display: "ヒュ", match: "hyu" },
  { id: 86, display: "ヒョ", match: "hyo" },

  // M
  { id: 87, display: "ミャ", match: "mya" },
  { id: 88, display: "ミュ", match: "myu" },
  { id: 89, display: "ミョ", match: "myo" },

  // R
  { id: 90, display: "リャ", match: "rya" },
  { id: 91, display: "リュ", match: "ryu" },
  { id: 92, display: "リョ", match: "ryo" },

  // Compostos vozeados

  // G
  { id: 93, display: "ギャ", match: "gya" },
  { id: 94, display: "ギュ", match: "gyu" },
  { id: 95, display: "ギョ", match: "gyo" },

  // J
  { id: 96, display: "ジャ", match: "ja" },
  { id: 97, display: "ジュ", match: "ju" },
  { id: 98, display: "ジョ", match: "jo" },

  // B
  { id: 99, display: "ビャ", match: "bya" },
  { id: 100, display: "ビュ", match: "byu" },
  { id: 101, display: "ビョ", match: "byo" },

  // P
  { id: 102, display: "ピャ", match: "pya" },
  { id: 103, display: "ピュ", match: "pyu" },
  { id: 104, display: "ピョ", match: "pyo" },

  // Sons prolongados

  { id: 105, display: "ッ+k", match: "kk" },
  { id: 106, display: "ッ+s", match: "ss" },
  { id: 107, display: "ッ+t", match: "tt" },
  { id: 108, display: "ッ+p", match: "pp" },

  // Vogais prolongadas

  { id: 109, display: "アー", match: "aa" },
  { id: 110, display: "イー", match: "ii" },
  { id: 111, display: "ウー", match: "uu" },
  { id: 112, display: "エー", match: "ee" },
  { id: 113, display: "オー", match: "oo" },
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
    modoAtual = modo;

    // Esconde os botões de modo
    document.getElementById("modeSelect").style.display = "none";

    // Mostra os botões de nível
    document.getElementById("levelSelect").style.display = "flex";
  });
});

// Eventos de clique para os botões de nível
document.querySelectorAll(".level-button").forEach((btn) => {
  btn.addEventListener("click", () => {

    const nivel = btn.dataset.level;
    if (nivel === "bebe") quantidade_cartas = 4;
    else if(nivel === "facil") quantidade_cartas = 8;
    else if(nivel === "normal") quantidade_cartas = 16;
    else if(nivel === "dificil") quantidade_cartas = 32;
    else if(nivel === "pimenta") quantidade_cartas = 64;

    if (modoAtual === "hiragana") cartas = (hiraganaPairs.sort(() => Math.random() - 0.5)).slice(0, quantidade_cartas);

    else if (modoAtual === "katakana") cartas = (katakanaPairs.sort(() => Math.random() - 0.5)).slice(0, quantidade_cartas);

    iniciarJogo(cartas);

    // Mostra os controles do jogo
    gameControls.style.display = "flex";

    // Esconde os botões de nível
    document.getElementById("levelSelect").style.display = "none";
  });
});

// Botão "Jogar novamente"
restartButton.addEventListener("click", () => {
  if (modoAtual === "hiragana") iniciarJogo(cartas);
  else if (modoAtual === "katakana") iniciarJogo(cartas);
});

// Botão "Voltar ao menu"
backButton.addEventListener("click", () => {
  board.innerHTML = "";
  board.classList.remove("active");
  modeSelect.style.display = "flex";
  gameControls.style.display = "none";
  modoAtual = null;
});
