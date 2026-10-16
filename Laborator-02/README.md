# Laborator 02 – Obiecte, funcții și metode în JavaScript

🔗 **[Deschide pagina](https://marciii345.github.io/Morari_Marcel_DAW-241/Laborator-02/)** · [⬅️ Înapoi la lista laboratoarelor](../README.md)

## 🎯 Scopul lucrării

Exersarea utilizării funcțiilor, obiectelor, proprietăților și metodelor în JavaScript prin realizarea unor aplicații interactive în pagini Web.

## 📁 Fișiere

| Fișier | Conținut |
|--------|----------|
| `index.html` | structura paginii: jocul și rezultatele exercițiilor 1 și 2 |
| `script.js` | tot codul JavaScript, conectat extern la pagină |
| `style.css` | aspectul paginii |

## ✅ Exerciții realizate

### Exercițiul 1 – Funcție de calcul
- funcția `calculateSum(a, b)` primește doi parametri și returnează suma cu `return`
- apelată cu două perechi de valori: `(5, 7)` → `12` și `(12.5, 30)` → `42.5`
- rezultatele sunt afișate cu `console.log()` și în pagină

### Exercițiul 2 – Obiect cu metodă
- obiectul `student` cu proprietățile `name`, `age`, `grade`
- metoda `introduce()` afișează „Sunt Andrei și am 16 ani.”
- proprietatea `grade` este modificată din 8 în 10, iar noua valoare apare în consolă

### Exercițiul 3 – Piatra, Hârtia, Foarfeca

| Cerință | Realizare |
|---------|-----------|
| 6.1 Interfața | 3 butoane, zona cu alegerile, rezultatul rundei, scorul |
| 6.2 Alegerea calculatorului | tabloul `["piatra", "hartia", "foarfeca"]` și `Math.random()` în `getComputerChoice()` |
| 6.3 Obiectul pentru scor | `gameScore` cu `player`, `computer`, `draws`, actualizate după fiecare rundă |
| 6.4 Metoda obiectului | `gameScore.displayScore()` afișează scorul cu `alert()` după fiecare rundă |
| 6.5 Stabilirea câștigătorului | funcția `determineWinner(playerChoice, computerChoice)` |
| 6.6 Evenimente | `addEventListener("click", …)` pe fiecare buton |

**Cerințe suplimentare (6.7), toate realizate:**
- butonul „Joc nou” resetează scorul la 0 prin metoda `gameScore.reset()`
- numărul total de runde jucate, prin metoda `gameScore.totalRounds()`
- mesaj diferit în funcție de cine conduce scorul
- funcția `checkFinalWinner()` anunță câștigătorul final la 5 victorii și blochează butoanele
- aspect îmbunătățit cu CSS, adaptat și pentru telefon

## ❓ Întrebări de verificare

**Ce este o funcție și de ce este utilă?**
Un bloc de cod cu nume, care execută o sarcină și poate fi apelat de câte ori e nevoie. Evită repetarea codului și îl împarte în părți mici, ușor de înțeles.

**Care este diferența dintre un parametru și un argument?**
Parametrul este numele din definiția funcției (`a`, `b` în `calculateSum(a, b)`). Argumentul este valoarea transmisă la apel (`5` și `7` în `calculateSum(5, 7)`).

**Ce este un obiect în JavaScript?**
O colecție de perechi cheie–valoare care grupează datele și comportamentul ce aparțin aceluiași lucru, de exemplu un elev sau scorul unui joc.

**Care este diferența dintre o proprietate și o metodă?**
Proprietatea păstrează o valoare (`student.age`). Metoda este o funcție a obiectului care execută o acțiune (`student.introduce()`).

**Cum se apelează o metodă a unui obiect?**
Cu numele obiectului, punct, numele metodei și paranteze: `gameScore.displayScore();`

**Ce returnează `Math.random()`?**
Un număr zecimal aleatoriu, mai mare sau egal cu 0 și mai mic decât 1. Înmulțit cu 3 și rotunjit în jos cu `Math.floor()`, dă un indice 0, 1 sau 2.

**De ce este util să păstrăm scorul într-un obiect?**
Toate datele scorului stau împreună, într-un singur loc, alături de metodele care lucrează cu ele (afișare, resetare, total). Codul e mai ordonat și mai ușor de modificat.

**Ce rol are `addEventListener()` într-o pagină Web?**
Leagă o funcție de un eveniment al unui element, de exemplu un click pe buton. Astfel pagina reacționează la acțiunile utilizatorului.
