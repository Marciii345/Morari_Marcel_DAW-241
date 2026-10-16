# Laborator 01 – Recapitulare HTML

🔗 **[Deschide pagina](https://marciii345.github.io/Morari_Marcel_DAW-241/Laborator-01/)** · [⬅️ Înapoi la lista laboratoarelor](../README.md)

## 🎯 Scopul lucrării

Realizarea unei pagini Web în HTML care prezintă informații despre **Republica Moldova**, **Norvegia** și **Suedia**.
Lucrarea verifică structura documentului HTML, utilizarea listelor, tabelelor, div-urilor și a referințelor interne și externe.

## ✅ Cerințe îndeplinite

| Nr. | Criteriu | Realizare |
|:---:|----------|-----------|
| 1 | Structura documentului HTML | `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`, `<title>`, `<h1>` |
| 2 | Organizarea paginii cu div-uri | peste 5 `<div>`: header, meniu, conținut, câte unul pentru fiecare țară, footer |
| 3 | Meniu cu linkuri interne | `#partea1`, `#partea2`, `#partea3` |
| 4 | Listă neordonată – Moldova | `<ul>` cu 6 obiective turistice |
| 5 | Listă ordonată – Norvegia | `<ol start="3">` cu 6 activități |
| 6 | Listă de definiții – Suedia | `<dl>`, `<dt>`, `<dd>` cu 6 termeni |
| 7 | Tabele | `<table>`, `<tr>`, `<th>`, `<td>` în steaguri și în tabelul comparativ |
| 8 | `colspan` | crucea steagurilor Norvegiei și Suediei, celule comune în tabelul comparativ |
| 9–11 | Steaguri realizate cu tabele | Moldova (tricolor), Norvegia și Suedia (cruce scandinavă), fără imagini |
| 12 | Linkuri externe | câte 2 pentru fiecare țară (Wikipedia + site oficial de turism) |
| 13 | Cod lizibil | indentare consecventă și comentarii pentru fiecare zonă |

### ⭐ Bonus

- elemente semantice: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- câte o imagine pentru fiecare țară (stema), cu atributul `alt`
- link „Înapoi sus” la finalul fiecărei secțiuni

## 🧱 Structura paginii

```
BODY
├── HEADER
├── NAV – Partea 1 · Partea 2 · Partea 3
├── DIV – Republica Moldova: text, listă UL, steag, linkuri
├── DIV – Norvegia: text, listă OL (start="3"), steag, linkuri
├── DIV – Suedia: text, listă DL, steag, linkuri
├── TABEL COMPARATIV
└── FOOTER
```
