console.log("Season is loaded...");

const currentSeason = new URLSearchParams(window.location.search).get("season");
const seasonTitle = document.getElementById("season-title");
seasonTitle.textContent = "Season " + currentSeason;

// Variablen
let driverData = [];
let constructorData = [];

// Funktion zum Rendern der Constructor-Daten
function renderConstructors(data) {
    const tableBody = document.getElementById("constructorBody");
    tableBody.innerHTML = "";

    for (const team of data) {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.textContent = team.position;

        const teamCell = document.createElement("td");
        teamCell.textContent = team.Constructor.name;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = team.points;

        const winsCell = document.createElement("td");
        winsCell.textContent = team.wins;

        row.appendChild(positionCell);
        row.appendChild(teamCell);
        row.appendChild(winsCell);
        row.appendChild(pointsCell);
        

        tableBody.appendChild(row);
    }
}

// Funktion zum Rendern der Fahrer-Daten
function renderDrivers(data) {
    const tableBody = document.getElementById("driverBody");
    tableBody.innerHTML = "";

    for (const driver of data) {
        const row = document.createElement("tr");

        const positionCell = document.createElement("td");
        positionCell.textContent = driver.position;

        const nameCell = document.createElement("td");
        nameCell.textContent = driver.Driver.givenName + " " + driver.Driver.familyName;

        const pointsCell = document.createElement("td");
        pointsCell.textContent = driver.points;

        const winsCell = document.createElement("td");
        winsCell.textContent = driver.wins;

        row.appendChild(positionCell);
        row.appendChild(nameCell);
        row.appendChild(winsCell);
        row.appendChild(pointsCell);
        

        tableBody.appendChild(row);
    }
}

// Constructor Standings
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

        constructorData = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings; // Daten in globale Variable speichern, damit sie später sortiert werden können
        renderConstructors(constructorData); // Eigene Funktion zum Rendern der Constructor-Daten aufrufen damit sie auch später wiederverwendet werden kann, wenn die Daten sortiert werden
        document.getElementById("constructorPoints").textContent = "Punkte ↓";
    })
    .catch(error => {
        console.error("Error fetching season data:", error);
    });

// Fahrerstandings 
    fetch(`https://api.jolpi.ca/ergast/f1/${currentSeason}/driverstandings/`)
    .then(response => response.json())
    .then(data => {
        const lists = data.MRData.StandingsTable.StandingsLists;

        // Check ob Daten existieren
        if (lists.length === 0) {
            console.log("Keine Constructor-Daten für diese Saison");

            const tableBody = document.getElementById("driverBody");
            tableBody.innerHTML = "<tr><td colspan='3'>Keine Daten verfügbar</td></tr>";

            return;
        }
        driverData = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        renderDrivers(driverData); 
        document.getElementById("driverPoints").textContent = "Punkte ↓";

    })
    .catch(error => {
        console.error("Error fetching driver data:", error);
    });

//Button-EventListener für die Sortierung nach Siegen
document.getElementById("driverWins").addEventListener("click", function () {
    driverData.sort((a, b) => b.wins - a.wins);
    renderDrivers(driverData);
    document.getElementById("driverWins").textContent = "Siege ↓";
    document.getElementById("driverPoints").textContent = "Punkte";
});

document.getElementById("constructorWins").addEventListener("click", function () {
    constructorData.sort((a, b) => b.wins - a.wins);
    renderConstructors(constructorData);
    document.getElementById("constructorWins").textContent = "Siege ↓";
    document.getElementById("constructorPoints").textContent = "Punkte";
    
});

//Button-EventListener für die Sortierung nach Punkten
document.getElementById("driverPoints").addEventListener("click", function () {
    driverData.sort((a, b) => b.points - a.points);
    renderDrivers(driverData);
    document.getElementById("driverPoints").textContent = "Punkte ↓";
    document.getElementById("driverWins").textContent = "Siege";
});

document.getElementById("constructorPoints").addEventListener("click", function () {
    constructorData.sort((a, b) => b.points - a.points);
    renderConstructors(constructorData);
    document.getElementById("constructorPoints").textContent = "Punkte ↓";
    document.getElementById("constructorWins").textContent = "Siege";
});
