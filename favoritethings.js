const parole = [
  { testo: "ENTER<br>THE VOID", coloreTesto: "#000000", sfondo: "#ffffff", font: "'Futura-CondensedExtraBold', sans-serif" },
  { testo: "Anna", coloreTesto: "#564299", sfondo: "#BDE0FE", font: "'Snell Roundhand', serif" },
  { testo: "Monsters inc.", coloreTesto: "#006ED0", sfondo: "#ffffff", font: "'Monster AG', sans-serif" },
  { testo: "Marseille", coloreTesto: "#ffffff", sfondo: "#59A4D3", font: "'Monsieur La Doulaise', cursive" },
  { testo: "ARANCINE", coloreTesto: "#FFBE3D", sfondo: "#D58000", font: "'Bungee Shade', sans-serif" },
  { testo: "Annie Hall", coloreTesto: "#ffffff", sfondo: "#000000", font: "'Windsor W01 Light Condensed', sans-serif" },
  { testo: "眠れる美女", coloreTesto: "#91042C", sfondo: "#06014D", font: "'Noto Serif JP', serif" },
  { testo: 'P E T S<br><span class="sottotitolo">(TV Series)</span>', coloreTesto: "#3E3E3E", sfondo: "#ffffff", font: "'Oswald', sans-serif", immagineSfondo: "url(images/Pets.png)"},
  { testo: "The Muppet<br>Show", coloreTesto: "#91042C", sfondo: "#06014D", font: "'Noto Serif JP', serif", immagineSfondo: "url(images/the_muppet_show.png)" },
  { testo: "鍵", coloreTesto: "#8C9A98", sfondo: "#824444", font: "'Noto Serif JP', serif" },
  { testo: "DOCTOR WHO", coloreTesto: "#F0F0F0", sfondo: "#003B6F", font: "'Futura', serif" },
  { testo: 'Sonata op.111<br><span class="sottotitolo">L. v. Beethoven</span>', coloreTesto: "#001CD1", sfondo: "#A8DA1F", font: "'Crimson Text', serif" }
];

const parolaSpeciale = {
  testo: "🎉 Sorpresa! 🎉",
  coloreTesto: "#ffffff",
  sfondo: "#e74c3c",
  font: "'Indie Flower', cursive"
};

// Opzione: true = parole in ordine, false = casuali
const paroleInOrdine = false;

let clickCounter = 0;
let indiceParola = 0;

const display = document.getElementById('word-display');
const homeBtn = document.getElementById('home-btn');
homeBtn.onclick = () => window.location.href = 'index.html';

// Funzione per aggiornare lo stile del bottone Home
function aggiornaHomeBtn(parola) {
  homeBtn.style.border = `2px solid ${parola.coloreTesto}`;
  homeBtn.style.color = parola.coloreTesto;
  homeBtn.style.fontFamily = parola.font;
  homeBtn.style.fontWeight = "bold";
  homeBtn.style.background = "transparent";
}

// Mostra una freccia destra all'avvio
display.textContent = "➔";
display.style.color = "#000";
display.style.fontFamily = "'Noto Sans Symbols 2', sans-serif";
display.style.fontWeight = "bold";
document.body.style.backgroundColor = "#fff";
aggiornaHomeBtn({
  coloreTesto: "#000",
  sfondo: "#fff",
  font: "'Noto Sans Symbols 2', sans-serif"
});

// Funzione per mostrare una nuova parola
function mostraNuovaParola() {
  clickCounter++;

  let parola;
  if (paroleInOrdine) {
    parola = parole[indiceParola];
    indiceParola = (indiceParola + 1) % parole.length;
  } else {
    const randomIndex = Math.floor(Math.random() * parole.length);
    parola = parole[randomIndex];
  }

  // Gestione sfondo: immagine o colore
  if (parola.immagineSfondo) {
    document.body.style.backgroundImage = parola.immagineSfondo;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundColor = ""; // resetta colore
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = parola.sfondo;
  }

  display.innerHTML = parola.testo;
  display.style.color = parola.coloreTesto;
  display.style.fontFamily = parola.font;
  aggiornaHomeBtn(parola);
}

// Gestione tastiera
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    mostraNuovaParola();
  }
  if (event.key === ' ') {
    // Torna alla schermata iniziale con la freccia
    display.textContent = "➔";
    display.style.color = "#000";
    display.style.fontFamily = "'Noto Sans Symbols 2', sans-serif";
    display.style.fontWeight = "bold";
    document.body.style.backgroundColor = "#fff";
    aggiornaHomeBtn({
      coloreTesto: "#000",
      sfondo: "#fff",
      font: "'Noto Sans Symbols 2', sans-serif"
    });
    indiceParola = 0; // resetta l'indice se vuoi ripartire dall'inizio
  }
});