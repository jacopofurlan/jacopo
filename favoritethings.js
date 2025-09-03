const parole = [
  { testo: "ENTER<br>THE VOID", coloreTesto: "#000000", sfondo: "#ffffff", font: "'Futura-CondensedExtraBold', sans-serif", fontWeight: "bold" },
  { testo: "Anna", coloreTesto: "#564299", sfondo: "#BDE0FE", font: "'Snell Roundhand', serif", fontWeight: "500" },
  { testo: "Monsters inc.", coloreTesto: "#006ED0", sfondo: "#ffffff", font: "'Monster AG', sans-serif", fontWeight: "bold" },
  { testo: "Marseille", coloreTesto: "#ffffff", sfondo: "#59A4D3", font: "'Monsieur La Doulaise', cursive", fontWeight: "normal" },
  { testo: "ARANCINE", coloreTesto: "#FFBE3D", sfondo: "#D58000", font: "'Bungee Shade', sans-serif", fontWeight: "bold" },
  { testo: "Annie Hall", coloreTesto: "#ffffff", sfondo: "#000000", font: "'Windsor W01 Light Condensed', sans-serif", fontWeight: "bold" },
  { testo: '眠れる美女<br><span class="sottotitolo">川端 康成</span>', coloreTesto: "#91042C", sfondo: "#06014D", font: "'Noto Serif JP', serif", fontWeight: "normal" },
  { testo: 'P  E  T  S<br><span class="sottotitolo">(TV Series)</span>', coloreTesto: "#3E3E3E", sfondo: "#ffffff", font: "'Oswald', sans-serif", immagineSfondo: "url(images/Pets.png)", fontWeight: "bold" },
  { testo: "The Muppet<br>Show", coloreTesto: "#91042C", sfondo: "#06014D", font: "'Noto Serif JP', serif", immagineSfondo: "url(images/the_muppet_show.png)", fontWeight: "bold" },
  { testo: '鍵<br><span class="sottotitolo">谷崎 潤一郎</span>', coloreTesto: "#8C9A98", sfondo: "#824444", font: "'Noto Serif JP', serif", fontWeight: "normal" },
  { testo: "DOCTOR WHO", coloreTesto: "#F0F0F0", sfondo: "#003B6F", font: "'Futura', serif", fontWeight: "bold" },
  { testo: 'Sonata op.111<br><span class="sottotitolo">L. v. Beethoven</span>', coloreTesto: "#001CD1", sfondo: "#A8DA1F", font: "'Crimson Text', serif", fontWeight: "bold" },
  { testo: 'Liebestraum n° 3<br><span class="sottotitolo">F. Liszt</span>', coloreTesto: "#7416A7", sfondo: "#FFD043", font: "'Crimson Text', serif", fontWeight: "normal" },
  { testo: 'Abbey Road<br><span class="sottotitolo">The Beatles</span>', coloreTesto: "#FFF700", sfondo: "#20CCE2", font: "'Boldonse', system-ui", fontWeight: "bold" },
  { testo: 'The Art of Fugue<br><span class="sottotitolo">J. S. Bach</span>', coloreTesto: "#165376", sfondo: "#90DAA5", font: "'Crimson Text', serif", fontWeight: "normal" },
  { testo: "Daft Punk", coloreTesto: "#EB5656", sfondo: "#000000", font: "'Synchro W01', sans-serif", fontWeight: "bold" },
  { testo: 'Atom Heart Mother<br><span class="sottotitolo"> Pink Floyd</span>', coloreTesto: "#DAF0F9", sfondo: "#779D5C", font: "'Rye', serif", fontWeight: "bold" },
  { testo: "Peanuts", coloreTesto: "#000000", sfondo: "#FEDF1B", font: "'Ultra', serif", fontWeight: "bold" },
  { testo: "Magritte", coloreTesto: "#9AE3E7", sfondo:"#000511", font: "'Sarina', cursive", fontWeight: "normal" },
  { testo: 'Мастер и Маргарита<br><span class="sottotitolo">Михаил Афанасьевич Булгаков</span>', coloreTesto: "#FFE45D", sfondo: "#FF0000", font: "'Metadannye', sans-serif", fontWeight: "bold" },
  { testo: "Pietro Aretino", coloreTesto: "#C0C0C0", sfondo: "#8641CB", font: "'Snell Roundhand', serif", fontWeight: "normal" },
  { testo: 'Lezioni Americane<br><span class="sottotitolo">Italo Calvino</span>', coloreTesto: "#2A91D6", sfondo:"#D8D6D8", font: "'Garamond', serif", fontWeight: "normal" },
  { testo: 'Historias de cronopios y de famas<br><span class="sottotitolo">Julio Cortazar</span>', coloreTesto: "#06620B", sfondo: "#EC5630", font:"'Hedvig Letters Serif', serif", fontWeight: "normal" },
  { testo: 'Abstract<br><span class="sottotitolo">(Tv Series)</span>', coloreTesto: "#ffffff", sfondo: "#000000", font: "'Montserrat', sans-serif", immagineSfondo: "url(images/abstract.png)", fontWeight: "bold" },
  { testo: 'Spanish Rapsody<br><span class="sottotitolo">F. Liszt</span>', coloreTesto: "#C22020", sfondo: "#DAB627", font: "'Crimson Text', serif", fontWeight: "normal" },
  { testo: "Favignana", coloreTesto: "#FFB699", sfondo: "#5EC0B8", font: "'Chemre', sans-serif", fontWeight: "normal" },
  { testo: 'Spezzatino<br><span class="sottotitolo">con patate<br>e polenta</span>', coloreTesto: "#622A2A", sfondo: "#F5DE32", font: "'cakezombie', system-ui", fontWeight: "bold" },
  { testo: 'Parole Crociate<sup>®</sup><br><span class="sottotitolo">(La Settimana Enigmistica)</span>', coloreTesto: "#B6262F", sfondo: "#3E8C78", font: "'Garamond', serif", fontWeight: "normal" },
  { testo: 'LOVE<span class="sottotitolo">Gaspar Noe</span>', coloreTesto: "#e2612e", sfondo: "#961e15", font: "'Futura', sans-serif", fontWeight: "bold" },
  { testo: 'MATRIX', coloreTesto: "#000000", sfondo: "#008F11", font: "'Matrix', sans-serif", fontWeight: "bold" },
  { testo: 'EYES WIDE SHUT', coloreTesto: "#b2d3aa", sfondo: "#2C102E", font: "'Futura', sans-serif", fontWeight: "bold" },
  { testo: 'ΚΥΝΟΔΟΝΤΑΣ', coloreTesto: "#b7a942", sfondo: "#f4f3de", font: "'Cardo', serif", fontWeight: "normal" },
  { testo: 'Lolita', coloreTesto: "#D52828", sfondo: "#8dacb5", font: "'Kapakana', cursive", fontWeight: "normal" },
  { testo: "Non al denaro<br>non all'amore<br>né al cielo", coloreTesto: "#F57F10", sfondo: "#B5F0FF", font: "'NCL Kerih Moady', sans-serif", fontWeight: "normal" },
  { testo: '<span class="sottotitolo">THE</span>NEON DEMON', coloreTesto: "#e6172f", sfondo: "#5eb4e6", font: "'Vanitas-Extrabold', sans-serif", fontWeight: "bold" },
  { testo: 'Das Schloss<br><span class="sottotitolo">Franz Kafka</span>', coloreTesto: "#DBE3E6", sfondo: "#8A0000", font: "'UnifrakturMaguntia', cursive", fontWeight: "bold" },
  { testo: 'Der Prozess<br><span class="sottotitolo">Franz Kafka</span>', coloreTesto: "#68AFBA", sfondo: "#17343B", font: "'Viaoda Libre', serif", fontWeight: "normal" },
  { testo: 'TWIN PEAKS', coloreTesto: "#ffffff", sfondo: "#", font: "'ITC Avant Garde Gothic', sans-serif", immagineSfondo: "url(images/twinpeaks.png)", fontWeight: "bold" },
  { testo: 'MULHOLLAND DR.', coloreTesto: "#ffffff", sfondo: "#191970", font: "'SF Hollywood Hills', sans-serif", fontWeight: "bold" },
  { testo: 'CIEN ANOS DE SOLEDAD', coloreTesto: "#1F3E19", sfondo: "#CE1E1E", font: "'ZuberStone', sans-serif", fontWeight: "normal" },
  { testo: 'JORGE LUIS BORGES', coloreTesto: "#C19C16", sfondo: "#C7F4FF", font: "'Mazeline', sans-serif", fontWeight: "normal" },
  { testo: 'Cannelés', coloreTesto: "#F8E9B2", sfondo: "#C16E25", font: "'Pacifico', cursive", fontWeight: "normal" },
  { testo: '<span class="sottotitolo">Amaro</span>Montenegro', coloreTesto: "#0D690D", sfondo: "#401E0F", font: "'Nova Round', system-ui", fontWeight: "normal" },
  { testo: 'Fiori di zucca<br><span class="sottotitolo">(ripieni)</span>', coloreTesto: "#328028", sfondo: "#FF9500", font: "'Slimeha', sans-serif", fontWeight: "bold" },
  { testo: 'Passatelli<br><span class="sottotitolo">(in brodo)</span>', coloreTesto: "#9A4949", sfondo: "#F3E9C8", font: "'Groovy Maniac', sans-serif", fontWeight: "bold" },
  { testo: 'Alfred Jarry', coloreTesto: "#D6B335", sfondo: "#1600BD", font: "'Bicycle', sans-serif", fontWeight: "bold" },
  { testo: '新世紀<br>エヴァンゲリオン', coloreTesto: "#ffffff", sfondo: "#", font: "'Matisse EB', serif", immagineSfondo: "url(images/eva.png)", fontWeight: "900" },
  { testo: 'Monty<br>Python', coloreTesto: "#000000", sfondo: "#4149B3", font: "'Circus', serif", fontWeight: "bold" },
  { testo: 'The Third<br>Policeman', coloreTesto: "#090839", sfondo: "#545036", font: "'Bicycle', sans-serif", fontWeight: "bold" },
  { testo: 'Hungarian Dance no. 4<span class="sottotitolo">J. Brahms</span>', coloreTesto: "#3D1B4E", sfondo: "#FFBAD0", font: "'Crimson Text', serif", fontWeight: "normal" }
];

const parolaSpeciale = {
  testo: "🎉 Sorpresa! 🎉",
  coloreTesto: "#ffffff",
  sfondo: "#e74c3c",
  font: "'Indie Flower', cursive",
  fontWeight: "bold"
};

// Opzione: true = parole in ordine, false = casuali
const paroleInOrdine = false;

let clickCounter = 0;
let indiceParola = 0;

const display = document.getElementById('word-display');
const homeBtn = document.getElementById('home-btn');

// Aggiungi il contatore delle cose che ti piacciono
const likeCounter = document.getElementById('like-counter');
likeCounter.textContent = `I currently like ${parole.length} things`;
likeCounter.style.fontFamily = "'Futura', sans-serif";
likeCounter.style.fontWeight = "bold";

// Funzione per aggiornare lo stile del bottone Home
function aggiornaHomeBtn(parola) {
  homeBtn.style.border = `2px solid ${parola.coloreTesto}`;
  homeBtn.style.color = parola.coloreTesto;
  homeBtn.style.fontFamily = parola.font;
  homeBtn.style.fontWeight = parola.fontWeight || "bold";
  homeBtn.style.background = "transparent";
}

// Funzione per aggiornare il contatore in basso
function aggiornaLikeCounter(parola) {
  likeCounter.style.color = parola.coloreTesto;
  likeCounter.style.fontFamily = "'Futura', sans-serif";
  likeCounter.style.fontWeight = "bold";
}

// Allinea la scritta in basso, centrata
likeCounter.style.position = "fixed";
likeCounter.style.bottom = "20px";
likeCounter.style.left = "50%";
likeCounter.style.top = "";
likeCounter.style.transform = "translateX(-50%)";
likeCounter.style.zIndex = "1000";
likeCounter.style.background = "transparent";

// Mostra la freccia iniziale e la scritta centrale all'avvio
function mostraPaginaIniziale() {
  display.textContent = "➔";
  display.style.color = "#000";
  display.style.fontFamily = "'Futura', sans-serif";
  display.style.fontWeight = "bold";
  document.body.style.backgroundColor = "#fff";
  document.body.style.backgroundImage = "";
  aggiornaHomeBtn({
    coloreTesto: "#000",
    sfondo: "#fff",
    font: "'Noto Sans Symbols 2', sans-serif",
    fontWeight: "bold"
  });
  aggiornaLikeCounter({
    coloreTesto: "#000",
    font: "'Noto Sans Symbols 2', sans-serif",
    fontWeight: "bold"
  });
  likeCounter.style.display = "block";
  indiceParola = 0;
}

// All'avvio
mostraPaginaIniziale();

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
    document.body.style.backgroundColor = "";
  } else {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = parola.sfondo;
  }

  display.innerHTML = parola.testo;
  display.style.color = parola.coloreTesto;
  display.style.fontFamily = parola.font;
  display.style.fontWeight = parola.fontWeight || "normal";
  aggiornaHomeBtn(parola);
  aggiornaLikeCounter(parola);
  likeCounter.style.display = "none";
}

// Gestione tastiera
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    mostraNuovaParola();
  }
  if (event.key === ' ') {
    mostraPaginaIniziale();
  }
});

// Cambia comportamento del bottone Home: reindirizza a index.html
homeBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});

// Cambia parola al tocco su dispositivi touchscreen
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.addEventListener('touchstart', function(event) {
    // Evita il click sul bottone home
    if (event.target.id !== 'home-btn') {
      mostraNuovaParola();
    }
  });
}
