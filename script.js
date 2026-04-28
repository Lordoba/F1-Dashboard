

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

  // Issue 3: Navigation zur Season-Seite
  seasonBtn.addEventListener("click", function () {
    window.location.href = "season.html?season=" + year;
  });

  seasonsGrid.appendChild(seasonBtn);
}
document.getElementById("search-btn").addEventListener("click", function () {
  const fahrer = document.getElementById("driver-search").value.trim().toLowerCase();
  if (!fahrer) return;
  console.log("Suche nach:", fahrer);
});
