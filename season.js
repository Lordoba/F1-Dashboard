console.log("Season is loaded...");

const currentSeason = new URLSearchParams(window.location.search).get("season");
const seasonTitle = document.getElementById("season-title");
seasonTitle.textContent = "Season " + currentSeason;

fetch(`https://api.jolpi.ca/ergast/f1/${currentSeason}/constructorstandings/`)
    .then(response => response.json())
    .then(data => {
        const lists = data.MRData.StandingsTable.StandingsLists;

        // Check ob Daten existieren
        if (lists.length === 0) {
            console.log("Keine Constructor-Daten für diese Saison");

            const tableBody = document.getElementById("constructorBody");
            tableBody.innerHTML = "<tr><td colspan='3'>Keine Daten verfügbar</td></tr>";

            return;
        }

        const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        const tableBody = document.getElementById("constructorBody");
        tableBody.innerHTML = ""; // Tabele leeren bevor neue Daten hinzugefügt werden

        for (const team of standings) {

            // Zeile erstellen
            const row = document.createElement("tr");

            // Position
            const positionCell = document.createElement("td");
            positionCell.textContent = team.position;

            // Team Name
            const teamCell = document.createElement("td");
            teamCell.textContent = team.Constructor.name;

            // Punkte
            const pointsCell = document.createElement("td");
            pointsCell.textContent = team.points;

            // hinzufügen
            row.appendChild(positionCell);
            row.appendChild(teamCell);
            row.appendChild(pointsCell);

            // Zeile zur Tabelle hinzufügen
            tableBody.appendChild(row);
        }
    })
    .catch(error => {
        console.error("Error fetching season data:", error);
    });

