# Laborator 04 – Liste și metodele Array în JavaScript

🔗 **[Deschide pagina](https://marciii345.github.io/Morari_Marcel_DAW-241/Laborator-04/)** · [⬅️ Înapoi la lista laboratoarelor](../README.md)

## 🎯 Obiective

- crearea și modificarea listelor (Array) în JavaScript
- utilizarea proprietății `length`
- adăugarea și eliminarea elementelor cu `push()`, `pop()`, `unshift()`, `shift()`
- prelucrarea datelor introduse prin input și butoane
- utilizarea metodelor `find()`, `splice()`, `forEach()`
- o aplicație Web interactivă care gestionează o listă de obiecte

## 📁 Fișiere

| Fișier | Conținut |
|--------|----------|
| `index.html` | structura paginii cu toate cele 5 exerciții |
| `script.js` | codul JavaScript, conectat extern |
| `style.css` | aspectul paginii |

## ✅ Exerciții realizate

### Exercițiul 1 – Prima listă
Array-ul `fructe` cu 5 elemente. În consolă și în pagină apar lista întreagă, primul element (`fructe[0]`), ultimul element (`fructe[fructe.length - 1]`) și numărul de elemente (`fructe.length`).

### Exercițiul 2 – Adaugă și elimină
Pe lista `orase` se aplică, în ordine, `push("Orhei")`, `unshift("Soroca")`, `pop()`, `shift()`. Pagina arată lista după fiecare pas. Lista finală: `Chișinău, Bălți, Cahul`.

### Exercițiile 3 și 4 – Lista de cumpărături
| Buton | Metodă |
|-------|--------|
| Adaugă la sfârșit | `produse.push()` |
| Adaugă la început | `produse.unshift()` |
| Șterge primul | `produse.shift()` |
| Șterge ultimul | `produse.pop()` |

Lista se actualizează pe pagină după fiecare operație. Când e goală, apare mesajul „Lista este goală!”. Un produs gol nu se adaugă, iar tasta Enter adaugă produsul la sfârșit.

### Exercițiul 5 – Catalog electronic al elevilor

| Cerință | Funcție | Metodă / proprietate |
|---------|---------|----------------------|
| Afișarea catalogului | `afiseazaElevi()` | `forEach()` |
| Adăugarea unui elev | `adaugaElev()` | `push()` |
| Ștergerea unui elev | `stergeElev()` | `find()` + `splice()` |
| Căutarea unui elev | `cautaElev()` | `find()` |
| Numărul de elevi | `afiseazaElevi()` | `elevi.length` |

În plus:
- căutarea și ștergerea nu țin cont de majuscule („popescu ana” îl găsește pe „Popescu Ana”)
- datele sunt verificate la adăugare: toate câmpurile completate, vârsta între 5 și 100, nota între 1 și 10
- mesaje de confirmare sau eroare după fiecare acțiune
- pagina se adaptează și pentru telefon
