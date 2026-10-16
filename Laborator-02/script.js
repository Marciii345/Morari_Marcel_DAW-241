// =====================================================================
// Laborator 02 – Crearea de obiecte, funcții și metode în JavaScript
// =====================================================================


// =====================================================================
// EXERCIȚIUL 1 – Funcție de calcul
// =====================================================================

// Funcția primește doi parametri și returnează suma lor
function calculateSum(a, b) {
  return a + b;
}

// Apelăm funcția cu două perechi diferite de valori (argumente)
const sum1 = calculateSum(5, 7);
const sum2 = calculateSum(12.5, 30);

console.log("=== Exercițiul 1 – calculateSum ===");
console.log("calculateSum(5, 7) =", sum1);
console.log("calculateSum(12.5, 30) =", sum2);


// =====================================================================
// EXERCIȚIUL 2 – Obiect cu metodă
// =====================================================================

const student = {
  // Proprietăți – datele obiectului
  name: "Andrei",
  age: 16,
  grade: 8,

  // Metodă – o funcție care aparține obiectului
  introduce: function () {
    const message = "Sunt " + this.name + " și am " + this.age + " ani.";
    console.log(message);
    return message;
  }
};

console.log("=== Exercițiul 2 – obiectul student ===");
const introduction = student.introduce();

console.log("Nota inițială:", student.grade);
student.grade = 10;
console.log("Nota nouă:", student.grade);


// Afișăm rezultatele exercițiilor 1 și 2 și în pagină
document.getElementById("ex1-result").textContent =
  "calculateSum(5, 7) = " + sum1 + "\n" +
  "calculateSum(12.5, 30) = " + sum2;

document.getElementById("ex2-result").textContent =
  "student.introduce() → " + introduction + "\n" +
  "Nota inițială: 8 → nota nouă: " + student.grade;


// =====================================================================
// EXERCIȚIUL 3 – Joc: Piatra, Hârtia, Foarfeca
// =====================================================================

// Variantele posibile (6.2)
const choices = ["piatra", "hartia", "foarfeca"];

// Denumirile și simbolurile afișate în pagină
const choiceLabels = {
  piatra: "✊ Piatra",
  hartia: "✋ Hârtia",
  foarfeca: "✌️ Foarfeca"
};

// Numărul de victorii necesar pentru a câștiga jocul (6.7)
const WINS_TO_FINISH = 5;

// Obiectul pentru scor (6.3) cu metodele sale (6.4)
const gameScore = {
  player: 0,
  computer: 0,
  draws: 0,

  // Numărul total de runde jucate
  totalRounds: function () {
    return this.player + this.computer + this.draws;
  },

  // Returnează scorul actual sub formă de text
  getScoreText: function () {
    return "Tu: " + this.player +
           " | Calculator: " + this.computer +
           " | Egalități: " + this.draws +
           " | Runde jucate: " + this.totalRounds();
  },

  // Metoda obligatorie: afișează scorul actual într-o alertă
  displayScore: function () {
    alert("Scorul actual\n\n" + this.getScoreText());
  },

  // Readuce toate valorile la 0
  reset: function () {
    this.player = 0;
    this.computer = 0;
    this.draws = 0;
  }
};

// Elementele din pagină
const buttons = document.querySelectorAll(".choice-btn");
const newGameButton = document.getElementById("new-game");
const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const roundResultEl = document.getElementById("round-result");
const playerScoreEl = document.getElementById("score-player");
const computerScoreEl = document.getElementById("score-computer");
const drawsScoreEl = document.getElementById("score-draws");
const roundsEl = document.getElementById("rounds");
const leaderEl = document.getElementById("leader-message");
const finalEl = document.getElementById("final-message");


// Alegerea aleatorie a calculatorului (6.2)
function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}


// Compară alegerile și stabilește rezultatul rundei (6.5)
// Returnează "player", "computer" sau "draw"
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === "piatra" && computerChoice === "foarfeca") ||
    (playerChoice === "foarfeca" && computerChoice === "hartia") ||
    (playerChoice === "hartia" && computerChoice === "piatra")
  ) {
    return "player";
  }

  return "computer";
}


// Actualizează proprietatea corespunzătoare din gameScore
function updateScore(winner) {
  if (winner === "player") {
    gameScore.player++;
  } else if (winner === "computer") {
    gameScore.computer++;
  } else {
    gameScore.draws++;
  }
}


// Mesajul care arată cine conduce scorul (6.7)
function getLeaderMessage() {
  if (gameScore.totalRounds() === 0) {
    return "Alege o variantă pentru a începe jocul.";
  }
  if (gameScore.player > gameScore.computer) {
    return "Conduci tu! Continuă așa. 💪";
  }
  if (gameScore.computer > gameScore.player) {
    return "Calculatorul conduce. Nu renunța! 🤖";
  }
  return "Scorul este egal. Totul se decide acum! ⚖️";
}


// Verifică dacă un jucător a ajuns la 5 victorii (6.7)
// Returnează mesajul final sau null dacă jocul continuă
function checkFinalWinner() {
  if (gameScore.player >= WINS_TO_FINISH) {
    return "🏆 Ai câștigat jocul cu " + gameScore.player + " victorii!";
  }
  if (gameScore.computer >= WINS_TO_FINISH) {
    return "🤖 Calculatorul a câștigat jocul cu " + gameScore.computer + " victorii!";
  }
  return null;
}


// Afișează în pagină scorul și mesajele
function renderScore() {
  playerScoreEl.textContent = gameScore.player;
  computerScoreEl.textContent = gameScore.computer;
  drawsScoreEl.textContent = gameScore.draws;
  roundsEl.textContent = gameScore.totalRounds();
  leaderEl.textContent = getLeaderMessage();
}


// Activează sau dezactivează butoanele de joc
function setButtonsEnabled(enabled) {
  buttons.forEach(function (button) {
    button.disabled = !enabled;
  });
}


// Funcția principală care gestionează o rundă (fluxul logic, pașii 1–8)
function playRound(playerChoice) {
  // 2. Se memorează alegerea utilizatorului
  // 3. Calculatorul generează o alegere
  const computerChoice = getComputerChoice();

  // 4–5. Se compară alegerile și se stabilește rezultatul
  const winner = determineWinner(playerChoice, computerChoice);
  updateScore(winner);

  // Afișăm alegerile
  playerChoiceEl.textContent = choiceLabels[playerChoice];
  computerChoiceEl.textContent = choiceLabels[computerChoice];

  // Afișăm rezultatul rundei
  roundResultEl.classList.remove("win", "lose", "draw");
  if (winner === "player") {
    roundResultEl.textContent = "Ai câștigat!";
    roundResultEl.classList.add("win");
  } else if (winner === "computer") {
    roundResultEl.textContent = "Calculatorul a câștigat!";
    roundResultEl.classList.add("lose");
  } else {
    roundResultEl.textContent = "Egalitate!";
    roundResultEl.classList.add("draw");
  }

  // 8. Rezultatul și scorul sunt afișate în pagină
  renderScore();

  // Verificăm dacă jocul s-a terminat
  const finalMessage = checkFinalWinner();
  if (finalMessage) {
    finalEl.textContent = finalMessage + " Apasă „Joc nou” pentru a juca din nou.";
    finalEl.hidden = false;
    setButtonsEnabled(false);
  }

  // 6. Scorul apare într-o alertă pop-up după fiecare rundă.
  // Întârzierea scurtă lasă pagina să se actualizeze înainte de alertă.
  setTimeout(function () {
    gameScore.displayScore();
    if (finalMessage) {
      alert(finalMessage);
    }
  }, 100);
}


// Resetează jocul (butonul „Joc nou”)
function startNewGame() {
  gameScore.reset();
  playerChoiceEl.textContent = "–";
  computerChoiceEl.textContent = "–";
  roundResultEl.textContent = "Alege Piatra, Hârtia sau Foarfeca";
  roundResultEl.classList.remove("win", "lose", "draw");
  finalEl.hidden = true;
  setButtonsEnabled(true);
  renderScore();
}


// Legăm butoanele de funcționalitate prin evenimente (6.6)
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playRound(button.dataset.choice);
  });
});

newGameButton.addEventListener("click", startNewGame);

// Starea inițială a paginii
renderScore();
