// Task 2: Saison-Liste generieren (1950 bis aktuelles Jahr)

const seasonsContainer = document.getElementById("seasons-container");

const firstSeason = 1950;
const currentYear = new Date().getFullYear();

// evtl überschrift für auswahl der saison
const title = document.createElement("h2");
title.textContent = "Season auswählen";
seasonsContainer.appendChild(title);

// Container für Buttons/Cards
const seasonsGrid = document.createElement("div");
seasonsGrid.id = "seasons-grid";
seasonsContainer.appendChild(seasonsGrid);

// Jahre absteigend anzeigen (neueste zuerst)
for (let year = currentYear; year >= firstSeason; year--) {
  const seasonBtn = document.createElement("button");
  seasonBtn.className = "season-button";
  seasonBtn.textContent = year;

  // Klick-Event für Navigation kommt noch... (Task 3)


  seasonsGrid.appendChild(seasonBtn);
}