console.log("Season is loaded...");

const currentSeason = new URLSearchParams(window.location.search).get("season");
const seasonTitle = document.getElementById("season-title");
seasonTitle.textContent = "Season " + currentSeason;

fetch(`https://api.jolpi.ca/ergast/f1/${currentSeason}/constructorstandings/`)
    .then(response => response.json())
    .then(data => {
        console.log("Season data:", data);
        const standings = data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        console.log("Season standings:", standings);

        for (const team of standings) {
            console.log("Team:", team);
            console.log("Points:", team.points);
        }
    })
    .catch(error => {
        console.error("Error fetching season data:", error);
        // const standingsContainer = document.getElementById("standings-container");
        // standingsContainer.textContent = "Fehler beim Laden der Daten.";
    });

    //Test Robin