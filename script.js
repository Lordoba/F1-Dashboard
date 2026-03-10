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

//Click event hinzufügen, um zur entsprechenden Saison-Seite zu navigieren
  seasonBtn.addEventListener("click", function () {
    window.location.href = "season.html?season=" + year; //Hier wird die Saison als URL-Parameter übergeben, damit die season.html Seite weiss, welche Saison angezeigt werden soll
  });

  seasonsGrid.appendChild(seasonBtn);
}