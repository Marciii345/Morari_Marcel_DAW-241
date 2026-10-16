// =====================================================================
// Laborator 04 – Liste și metodele Array în JavaScript
// =====================================================================


// =====================================================================
// EXERCIȚIUL 1 – Creează prima listă
// =====================================================================

let fructe = ["Măr", "Pară", "Banana", "Portocală", "Kiwi"];

console.log("=== Exercițiul 1 ===");
console.log("Lista întreagă:", fructe);
console.log("Primul element:", fructe[0]);
console.log("Ultimul element:", fructe[fructe.length - 1]);
console.log("Numărul de elemente:", fructe.length);

document.getElementById("ex1-result").textContent =
  "Lista întreagă: " + fructe.join(", ") + "\n" +
  "Primul element: " + fructe[0] + "\n" +
  "Ultimul element: " + fructe[fructe.length - 1] + "\n" +
  "Numărul de elemente: " + fructe.length;


// =====================================================================
// EXERCIȚIUL 2 – Adaugă și elimină
// =====================================================================

let orase = ["Chișinău", "Bălți", "Cahul"];
const pasiOrase = ["Lista inițială: " + orase.join(", ")];

orase.push("Orhei");                 // adaugă la sfârșit
pasiOrase.push('push("Orhei"): ' + orase.join(", "));

orase.unshift("Soroca");             // adaugă la început
pasiOrase.push('unshift("Soroca"): ' + orase.join(", "));

orase.pop();                         // elimină ultimul
pasiOrase.push("pop(): " + orase.join(", "));

orase.shift();                       // elimină primul
pasiOrase.push("shift(): " + orase.join(", "));

console.log("=== Exercițiul 2 ===");
console.log("Lista finală:", orase);

document.getElementById("ex2-result").textContent =
  pasiOrase.join("\n") + "\n\nLista finală: " + orase.join(", ");


// =====================================================================
// EXERCIȚIILE 3 ȘI 4 – Lista de cumpărături
// =====================================================================

let produse = ["Pâine", "Lapte", "Ouă"];

const inputProdus = document.getElementById("produs");
const zonaProduse = document.getElementById("lista-produse");
const mesajProduse = document.getElementById("mesaj-produse");

// Afișează lista de produse pe pagină
function afiseazaProduse() {
  zonaProduse.innerHTML = "";

  if (produse.length === 0) {
    zonaProduse.innerHTML = '<p class="gol">Lista este goală!</p>';
    return;
  }

  produse.forEach(function (produs) {
    const element = document.createElement("span");
    element.className = "chip";
    element.textContent = produs;
    zonaProduse.appendChild(element);
  });
}

// Citește produsul din input; returnează null dacă e gol
function citesteProdus() {
  const produs = inputProdus.value.trim();
  if (produs === "") {
    mesajProduse.textContent = "Introdu mai întâi numele produsului.";
    inputProdus.focus();
    return null;
  }
  mesajProduse.textContent = "";
  inputProdus.value = "";
  inputProdus.focus();
  return produs;
}

// Exercițiul 3 – adăugare cu push() și unshift()
function adaugaLaSfarsit() {
  const produs = citesteProdus();
  if (produs !== null) {
    produse.push(produs);
    afiseazaProduse();
  }
}

function adaugaLaInceput() {
  const produs = citesteProdus();
  if (produs !== null) {
    produse.unshift(produs);
    afiseazaProduse();
  }
}

// Exercițiul 4 – ștergere cu shift() și pop()
function stergePrimul() {
  if (produse.length === 0) {
    mesajProduse.textContent = "Nu mai sunt produse de șters.";
    return;
  }
  const sters = produse.shift();
  mesajProduse.textContent = "Ai șters primul produs: " + sters;
  afiseazaProduse();
}

function stergeUltimul() {
  if (produse.length === 0) {
    mesajProduse.textContent = "Nu mai sunt produse de șters.";
    return;
  }
  const sters = produse.pop();
  mesajProduse.textContent = "Ai șters ultimul produs: " + sters;
  afiseazaProduse();
}

document.getElementById("btn-sfarsit").addEventListener("click", adaugaLaSfarsit);
document.getElementById("btn-inceput").addEventListener("click", adaugaLaInceput);
document.getElementById("btn-sterge-primul").addEventListener("click", stergePrimul);
document.getElementById("btn-sterge-ultimul").addEventListener("click", stergeUltimul);

// Enter în input = „Adaugă la sfârșit”
inputProdus.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adaugaLaSfarsit();
  }
});

afiseazaProduse();


// =====================================================================
// EXERCIȚIUL 5 – Catalog electronic al elevilor
// =====================================================================

let elevi = [
  { nume: "Popescu Ana", varsta: 17, nota: 9 },
  { nume: "Rusu Mihai", varsta: 18, nota: 8 },
  { nume: "Ciobanu Maria", varsta: 17, nota: 10 }
];

const zonaCatalog = document.getElementById("catalog");
const numarElevi = document.getElementById("numar-elevi");
const mesajAdaugare = document.getElementById("mesaj-adaugare");
const mesajStergere = document.getElementById("mesaj-stergere");
const rezultatCautare = document.getElementById("rezultat-cautare");

// Compară numele fără a ține cont de majuscule și spații în plus
function acelasiNume(nume1, nume2) {
  return nume1.trim().toLowerCase() === nume2.trim().toLowerCase();
}

// Afișează un mesaj colorat (succes sau eroare)
function afiseazaMesaj(element, text, succes) {
  element.textContent = text;
  element.className = "mesaj " + (succes ? "succes" : "eroare");
}


// 1. Afișarea catalogului – forEach() și length
function afiseazaElevi() {
  // 5. Numărul de elevi
  numarElevi.textContent = elevi.length;

  zonaCatalog.innerHTML = "";

  if (elevi.length === 0) {
    zonaCatalog.innerHTML = '<p class="gol">Catalogul este gol.</p>';
    return;
  }

  elevi.forEach(function (elev, index) {
    const card = document.createElement("div");
    card.className = "elev";

    const titlu = document.createElement("div");
    titlu.className = "elev-nume";
    titlu.textContent = (index + 1) + ". " + elev.nume;

    const varsta = document.createElement("div");
    varsta.className = "elev-detalii";
    varsta.textContent = "Vârsta: " + elev.varsta;

    const nota = document.createElement("div");
    nota.className = "elev-detalii";
    nota.textContent = "Nota: " + elev.nota;

    card.appendChild(titlu);
    card.appendChild(varsta);
    card.appendChild(nota);
    zonaCatalog.appendChild(card);
  });
}


// 2. Adăugarea unui elev – push()
function adaugaElev() {
  const inputNume = document.getElementById("nume");
  const inputVarsta = document.getElementById("varsta");
  const inputNota = document.getElementById("nota");

  const nume = inputNume.value.trim();
  const varsta = Number(inputVarsta.value);
  const nota = Number(inputNota.value);

  // Validarea datelor introduse
  if (nume === "" || inputVarsta.value === "" || inputNota.value === "") {
    afiseazaMesaj(mesajAdaugare, "Completează toate câmpurile.", false);
    return;
  }
  if (!Number.isInteger(varsta) || varsta < 5 || varsta > 100) {
    afiseazaMesaj(mesajAdaugare, "Vârsta trebuie să fie un număr întreg între 5 și 100.", false);
    return;
  }
  if (nota < 1 || nota > 10) {
    afiseazaMesaj(mesajAdaugare, "Nota trebuie să fie între 1 și 10.", false);
    return;
  }

  // Datele sunt transformate într-un obiect
  let elevNou = {
    nume: nume,
    varsta: varsta,
    nota: nota
  };

  elevi.push(elevNou);
  afiseazaElevi();

  afiseazaMesaj(mesajAdaugare, "Elevul " + nume + " a fost adăugat.", true);
  inputNume.value = "";
  inputVarsta.value = "";
  inputNota.value = "";
  inputNume.focus();
}


// 3. Ștergerea unui elev – find() pentru căutare, splice() pentru eliminare
function stergeElev() {
  const inputSterge = document.getElementById("nume-sterge");
  const numeCautat = inputSterge.value;

  if (numeCautat.trim() === "") {
    afiseazaMesaj(mesajStergere, "Introdu numele elevului.", false);
    return;
  }

  const elevGasit = elevi.find(function (elev) {
    return acelasiNume(elev.nume, numeCautat);
  });

  if (elevGasit === undefined) {
    afiseazaMesaj(mesajStergere, "Elevul nu a fost găsit!", false);
    return;
  }

  const pozitie = elevi.indexOf(elevGasit);
  elevi.splice(pozitie, 1);
  afiseazaElevi();

  afiseazaMesaj(mesajStergere, "Elevul " + elevGasit.nume + " a fost șters.", true);
  inputSterge.value = "";
}


// 4. Căutarea unui elev – find()
function cautaElev() {
  const numeCautat = document.getElementById("nume-cauta").value;

  if (numeCautat.trim() === "") {
    rezultatCautare.className = "rezultat eroare";
    rezultatCautare.textContent = "Introdu numele elevului.";
    return;
  }

  const elevGasit = elevi.find(function (elev) {
    return acelasiNume(elev.nume, numeCautat);
  });

  if (elevGasit) {
    rezultatCautare.className = "rezultat succes";
    rezultatCautare.textContent =
      "Elev găsit!\n\n" +
      "Nume: " + elevGasit.nume + "\n" +
      "Vârsta: " + elevGasit.varsta + "\n" +
      "Nota: " + elevGasit.nota;
  } else {
    rezultatCautare.className = "rezultat eroare";
    rezultatCautare.textContent = "Elevul nu a fost găsit!";
  }
}


// Legăm formularele de funcții (butonul sau tasta Enter)
document.getElementById("form-adauga").addEventListener("submit", function (event) {
  event.preventDefault();
  adaugaElev();
});

document.getElementById("form-sterge").addEventListener("submit", function (event) {
  event.preventDefault();
  stergeElev();
});

document.getElementById("form-cauta").addEventListener("submit", function (event) {
  event.preventDefault();
  cautaElev();
});

// La încărcarea paginii, elevii sunt afișați
afiseazaElevi();
