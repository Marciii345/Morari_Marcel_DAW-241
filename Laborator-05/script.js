// =====================================================================
// Laborator 05 – Gestionarea listei de studenți și aranjarea
//                cardurilor cu CSS Flexbox
// =====================================================================


// =====================================================================
// SARCINA 1 – Tabloul de obiecte
// Fiecare student este un obiect cu proprietățile:
// id, nume, grupa, varsta, specialitate, avatar
// =====================================================================

let studenti = [
  { id: 1, nume: "Ana Popescu",     grupa: "SI-231", varsta: 19, specialitate: "Securitate informațională", avatar: "👩‍💻" },
  { id: 2, nume: "Mihai Rusu",      grupa: "SI-231", varsta: 20, specialitate: "Securitate informațională", avatar: "👨‍💻" },
  { id: 3, nume: "Irina Ciobanu",   grupa: "PR-232", varsta: 18, specialitate: "Programare",                avatar: "👩‍🎓" },
  { id: 4, nume: "Andrei Munteanu", grupa: "PR-232", varsta: 21, specialitate: "Programare",                avatar: "👨‍🎓" },

  // Student adăugat în tabloul inițial (Sarcina 1)
  { id: 5, nume: "Elena Rotaru",    grupa: "DAW-241", varsta: 18, specialitate: "Dezvoltarea aplicațiilor web", avatar: "👩‍🔬" }
];


// Elementele din pagină
const containerCarduri = document.getElementById("carduri");
const numarStudenti = document.getElementById("numar-studenti");
const formular = document.getElementById("form-student");
const mesajFormular = document.getElementById("mesaj-formular");


// Generează un ID unic: cel mai mare ID existent + 1
function genereazaId() {
  let maxId = 0;
  studenti.forEach(function (student) {
    if (student.id > maxId) {
      maxId = student.id;
    }
  });
  return maxId + 1;
}


// Creează cardul HTML pentru un student
function creeazaCard(student) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML =
    '<div class="card-antet">' +
      '<div class="avatar"></div>' +
      '<div>' +
        '<h3 class="nume"></h3>' +
        '<p class="grupa"></p>' +
      '</div>' +
    '</div>' +
    '<dl class="detalii">' +
      '<div class="rand"><dt>Vârsta</dt><dd class="varsta"></dd></div>' +
      '<div class="rand"><dt>Specialitatea</dt><dd class="specialitate"></dd></div>' +
      '<div class="rand"><dt>Statut</dt><dd><span class="statut">Înmatriculat</span></dd></div>' +
    '</dl>' +
    '<button class="btn-sterge" type="button">Șterge</button>';

  // Textul este pus cu textContent, ca datele din formular să nu fie interpretate ca HTML
  card.querySelector(".avatar").textContent = student.avatar;
  card.querySelector(".nume").textContent = student.nume;
  card.querySelector(".grupa").textContent = "Grupa: " + student.grupa;
  card.querySelector(".varsta").textContent = student.varsta + " ani";
  card.querySelector(".specialitate").textContent = student.specialitate;

  // Butonul „Șterge” știe ID-ul studentului de pe card
  const butonSterge = card.querySelector(".btn-sterge");
  butonSterge.addEventListener("click", function () {
    stergeStudent(student.id);
  });

  return card;
}


// Afișează toți studenții din tablou
function afiseazaStudenti() {
  containerCarduri.innerHTML = "";
  numarStudenti.textContent = studenti.length;

  // Sarcina 3 – mesaj când lista este goală
  if (studenti.length === 0) {
    containerCarduri.innerHTML =
      '<p class="lista-goala">Nu mai există niciun student în listă. Adaugă unul folosind formularul.</p>';
    return;
  }

  studenti.forEach(function (student) {
    containerCarduri.appendChild(creeazaCard(student));
  });
}


// Afișează un mesaj sub formular
function afiseazaMesaj(text, succes) {
  mesajFormular.textContent = text;
  mesajFormular.className = "mesaj " + (succes ? "succes" : "eroare");
}


// =====================================================================
// SARCINA 2 – Adăugarea unui student prin formular
// =====================================================================

function adaugaStudent() {
  const nume = document.getElementById("nume").value.trim();
  const grupa = document.getElementById("grupa").value.trim();
  const varstaText = document.getElementById("varsta").value.trim();
  const specialitate = document.getElementById("specialitate").value.trim();
  const avatar = document.getElementById("avatar").value;

  // Toate câmpurile trebuie completate
  if (nume === "" || grupa === "" || varstaText === "" || specialitate === "") {
    afiseazaMesaj("Completează toate câmpurile.", false);
    return;
  }

  // Vârsta trebuie să fie un număr întreg între 14 și 100
  const varsta = Number(varstaText);
  if (!Number.isInteger(varsta) || varsta < 14 || varsta > 100) {
    afiseazaMesaj("Vârsta trebuie să fie un număr întreg între 14 și 100.", false);
    return;
  }

  const studentNou = {
    id: genereazaId(),
    nume: nume,
    grupa: grupa.toUpperCase(),
    varsta: varsta,
    specialitate: specialitate,
    avatar: avatar
  };

  studenti.push(studentNou);
  afiseazaStudenti();

  formular.reset();
  document.getElementById("nume").focus();
  afiseazaMesaj("Studentul " + nume + " a fost adăugat (ID " + studentNou.id + ").", true);
}

formular.addEventListener("submit", function (event) {
  event.preventDefault();
  adaugaStudent();
});


// =====================================================================
// SARCINA 3 – Ștergerea unui student după ID
// =====================================================================

function stergeStudent(id) {
  const pozitie = studenti.findIndex(function (student) {
    return student.id === id;
  });

  if (pozitie === -1) {
    return;
  }

  const sters = studenti.splice(pozitie, 1)[0];
  console.log("Șters studentul cu ID " + sters.id + ": " + sters.nume);

  afiseazaStudenti();
  afiseazaMesaj("Studentul " + sters.nume + " a fost șters.", true);
}


// =====================================================================
// SARCINA 4 – Schimbarea perspectivei cardurilor cu Flexbox
// =====================================================================

const codCss = document.getElementById("cod-css");

// Valorile curente ale proprietăților Flexbox
const setariFlex = {
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexWrap: "wrap",
  gap: 16
};

// Aplică setările pe containerul cardurilor și arată codul CSS rezultat
function aplicaSetariFlex() {
  containerCarduri.style.justifyContent = setariFlex.justifyContent;
  containerCarduri.style.alignItems = setariFlex.alignItems;
  containerCarduri.style.flexWrap = setariFlex.flexWrap;
  containerCarduri.style.gap = setariFlex.gap + "px";

  // Cu nowrap cardurile rămân pe un singur rând și containerul se derulează orizontal
  containerCarduri.classList.toggle("fara-wrap", setariFlex.flexWrap === "nowrap");

  codCss.textContent =
    "#carduri {\n" +
    "  display: flex;\n" +
    "  justify-content: " + setariFlex.justifyContent + ";\n" +
    "  align-items: " + setariFlex.alignItems + ";\n" +
    "  flex-wrap: " + setariFlex.flexWrap + ";\n" +
    "  gap: " + setariFlex.gap + "px;\n" +
    "}";
}

// Leagă un grup de butoane de o proprietate din setariFlex
function legaGrupButoane(idGrup, proprietate) {
  const butoane = document.querySelectorAll("#" + idGrup + " button");

  butoane.forEach(function (buton) {
    buton.addEventListener("click", function () {
      setariFlex[proprietate] = buton.dataset.valoare;

      // Marcăm butonul activ
      butoane.forEach(function (b) {
        b.classList.remove("activ");
      });
      buton.classList.add("activ");

      aplicaSetariFlex();
    });
  });
}

legaGrupButoane("grup-justify", "justifyContent");
legaGrupButoane("grup-align", "alignItems");
legaGrupButoane("grup-wrap", "flexWrap");

// Controlul pentru gap
const inputGap = document.getElementById("gap");
const valoareGap = document.getElementById("valoare-gap");

inputGap.addEventListener("input", function () {
  setariFlex.gap = Number(inputGap.value);
  valoareGap.textContent = inputGap.value + "px";
  aplicaSetariFlex();
});


// La încărcarea paginii
afiseazaStudenti();
aplicaSetariFlex();
