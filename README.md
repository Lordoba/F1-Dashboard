# F1 Dashboard

## Beschreibung
F1 Dashboard ist eine Webapplikation zur Darstellung von Formel-1-Saisons. Benutzerinnen und Benutzer können verschiedene Seasons auswählen, die Fahrer- und Konstrukteurswertungen ansehen, Tabellen sortieren und nach Fahrern suchen.

## Funktionen
- Auswahl verschiedener Formel-1-Saisons auf der Startseite
- Anzeige der Driver Standings einer gewählten Saison
- Anzeige der Constructor Standings einer gewählten Saison
- Sortierung der Tabellen nach Punkten und Siegen
- Fahrersuche über mehrere Seasons hinweg

## Installation / Start
1. Repository herunterladen oder klonen.
2. Den Projektordner in Visual Studio Code öffnen.
3. Die Datei `index.html` mit einer Live-Server-Erweiterung oder im Browser starten.
4. Für die Nutzung ist eine Internetverbindung erforderlich, da die Daten über eine externe API geladen werden.

## Verwendete Technologien
- HTML
- CSS
- JavaScript
- Jolpica F1 API

## Projektstruktur
- `index.html` – Startseite mit Season-Auswahl und Fahrersuche
- `season.html` – Detailseite einer ausgewählten Saison
- `script.js` – JavaScript für die Startseite
- `season.js` – JavaScript für die Season-Seite
- `styles.css` – Gestaltung der Webseite
- `F1_Dashboard_Logo.png` – Logo / Favicon der Anwendung

## Datenquelle
Die Daten werden über die Jolpica F1 API geladen. Diese API stellt historische Formel-1-Daten wie Fahrer- und Konstrukteurswertungen im JSON-Format zur Verfügung.

## Hinweise
- Für das Laden der Daten ist eine Internetverbindung nötig.
- Die Anwendung ist als Schulprojekt im Bereich Web Development entstanden.
- Die Webseite ist für eine übersichtliche Darstellung von Saisoninformationen ausgelegt.
