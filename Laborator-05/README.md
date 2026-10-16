# Laborator 05 – Lista de studenți și cardurile cu CSS Flexbox

🔗 **[Deschide pagina](https://marciii345.github.io/Morari_Marcel_DAW-241/Laborator-05/)** · [⬅️ Înapoi la lista laboratoarelor](../README.md)

## 🎯 Scopul lucrării

Gestionarea unei liste de studenți păstrate într-un tablou de obiecte (afișare, adăugare, ștergere) și aranjarea cardurilor cu proprietățile CSS Flexbox.

## 📁 Fișiere

| Fișier | Conținut |
|--------|----------|
| `index.html` | formularul, panoul Flexbox și containerul cardurilor |
| `script.js` | tabloul `studenti` și toată logica aplicației |
| `style.css` | tema întunecată și aspectul cardurilor |

## ✅ Sarcini realizate

### Sarcina 1 – Tabloul de obiecte
Studenții sunt păstrați în tabloul `studenti`. Fiecare obiect are proprietățile `id`, `nume`, `grupa`, `varsta`, `specialitate`, `avatar`.
Am adăugat în tabloul inițial un student nou (ID 5, Elena Rotaru). Apare automat în pagină, pentru că `afiseazaStudenti()` parcurge tot tabloul cu `forEach()`.

### Sarcina 2 – Adăugarea prin formular
- funcția `adaugaStudent()` verifică dacă toate câmpurile sunt completate și dacă vârsta e un număr întreg între 14 și 100
- studentul nou primește un ID unic (cel mai mare ID + 1) și se adaugă cu `push()`
- după adăugare, formularul se resetează (`form.reset()`), numărul de studenți se actualizează și apare cardul nou

### Sarcina 3 – Ștergerea după ID
- fiecare card are butonul „Șterge”, legat de ID-ul studentului
- `stergeStudent(id)` găsește poziția cu `findIndex()` și elimină obiectul cu `splice()`, apoi afișează lista din nou
- când nu mai rămâne niciun student, apare mesajul „Nu mai există niciun student în listă.”

### Sarcina 4 – Perspectiva cardurilor cu Flexbox

| Control | Proprietate | Ce se observă |
|---------|-------------|---------------|
| 6 butoane | `justify-content` | cum se distribuie cardurile pe orizontală (axa principală) |
| 5 butoane | `align-items` | cum se aliniază pe verticală cardurile de înălțimi diferite (axa secundară) |
| 2 butoane | `flex-wrap` | `wrap` mută cardurile pe rândul următor; `nowrap` le ține pe un singur rând, iar containerul se derulează orizontal |
| glisor 0–60px | `gap` | distanța dintre carduri |

Sub controale se afișează în timp real codul CSS aplicat containerului.

## 📝 Observații despre Flexbox

- **`flex-start` / `center` / `flex-end`** grupează cardurile la stânga, la mijloc sau la dreapta rândului.
- **`space-between`** pune primul și ultimul card la margini și împarte spațiul rămas între ele.
- **`space-around`** dă fiecărui card spațiu egal în ambele părți, deci marginile au jumătate din spațiul dintre carduri.
- **`space-evenly`** face toate spațiile egale, inclusiv cele de la margini.
- **`align-items: stretch`** (implicit) face toate cardurile de pe un rând la fel de înalte. Cu celelalte valori, cardurile își păstrează înălțimea proprie. Diferența se vede la cardurile cu „Securitate informațională”, care sunt mai înalte.
- **`nowrap`** nu micșorează cardurile, pentru că au lățimea fixă (`flex: 0 0 260px`), așa că ies din container și apare derularea orizontală.
