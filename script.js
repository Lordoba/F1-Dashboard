

const seasonsContainer = document.getElementById("seasons-container");

const firstSeason = 1950;
const currentYear = new Date().getFullYear();


const title = document.createElement("h2");
title.textContent = "Season auswählen";
seasonsContainer.appendChild(title);

// Container für die Buttons
const seasonsGrid = document.createElement("div");
seasonsGrid.id = "seasons-grid";
seasonsContainer.appendChild(seasonsGrid);

// Jahre absteigend anzeigen (neueste zuerst)
for (let year = currentYear; year >= firstSeason; year--) {

  const seasonBtn = document.createElement("button");
  seasonBtn.className = "season-button";
  seasonBtn.textContent = year;

  //Navigation zur Season-Seite
  seasonBtn.addEventListener("click", function () {
    window.location.href = "season.html?season=" + year;
  });

  seasonsGrid.appendChild(seasonBtn);
}
document.getElementById("search-btn").addEventListener("click", function () {
  const fahrer = document.getElementById("driver-search").value.trim().toLowerCase();
  if (!fahrer) return;
  fahrerSuchen(fahrer);
});

async function fahrerSuchen(fahrer) {
  const ergebnisse = [];
  document.getElementById("search-results").innerHTML = "<p class='loading'>Suche läuft...</p>";
  for (let jahr = currentYear; jahr >= firstSeason; jahr--) {
    try {
      const antwort = await fetch(`https://api.jolpi.ca/ergast/f1/${jahr}/driverstandings/`);
      const daten = await antwort.json();
      const listen = daten.MRData.StandingsTable.StandingsLists;
      if (listen.length === 0) continue;

      const fahrerliste = listen[0].DriverStandings;
      const gefunden = fahrerliste.find(d =>
        (d.Driver.givenName + " " + d.Driver.familyName).toLowerCase().includes(fahrer)
      );

      if (gefunden) {
        ergebnisse.push({ jahr, position: gefunden.position, siege: gefunden.wins, punkte: gefunden.points });
      }
    } catch (e) {
      continue;
    }
  }
const anzeige = document.getElementById("search-results");

// Wenn keine Ergebnisse gefunden wurden
if (ergebnisse.length === 0) {
  anzeige.innerHTML = "<p class='error'>Kein Fahrer gefunden.</p>";
  return;
}

// Tabelle aufbauen
let tabelle = "<table><thead><tr><th>Season</th><th>Position</th><th>Siege</th><th>Punkte</th></tr></thead><tbody>";
// Für jedes Ergebnis eine Zeile hinzufügen
for (const e of ergebnisse) {
 tabelle += `<tr style="cursor:pointer" onclick="window.location.href='season.html?season=${e.jahr}'">
  <td>${e.jahr}</td>
  <td>${e.position}</td>
  <td>${e.siege}</td>
  <td>${e.punkte}</td>
  </tr>`;
}

// Tabelle schliessen und anzeigen
tabelle += "</tbody></table>";
anzeige.innerHTML = tabelle;
}
