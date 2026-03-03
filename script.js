//Saison-Liste generieren (1950 bis aktuelles Jahr)

const seasonsContainer = document.getElementById("seasons-container");

const firstSeason = 1950;
const currentYear = new Date().getFullYear();

// überschrift für auswahl der saison
const title = document.createElement("h2");
title.textContent = "Season auswählen";
seasonsContainer.appendChild(title);

// Container für Buttons/Cards
const seasonsGrid = document.createElement("div");
seasonsGrid.id = "seasons-grid";
seasonsContainer.appendChild(seasonsGrid);

// Jahre absteigend anzeigen 
for (let year = currentYear; year >= firstSeason; year--) {
  const seasonBtn = document.createElement("button");
  seasonBtn.className = "season-button";
  seasonBtn.textContent = year;

  // Klick event muss noch hinzugefügt werden Robin

  seasonsGrid.appendChild(seasonBtn);
}