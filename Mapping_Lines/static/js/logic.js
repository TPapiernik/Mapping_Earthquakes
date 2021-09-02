// logic.js

// Add console.log to check to see if our code is working.
console.log("Working...");


// Create the map object with a center at the San Francisco airport.
//let map = L.map('mapid').setView([37.3213, -122.3790], 5);
let map = L.map('mapid').setView([40.0000, -100.0000], 5);

// Coordinates for each point to be used in the polyline
// Original:
//let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790],
//    [40.7899, -111.9791],
//    [47.4502, -122.3088]
//];

// Skill Drill:
// Airline Route from San Francisco to John F. Kennedy Int'l Airport
// via Denver, Austin-Bergstrom, & Toronto Pearson International
// (Blue Dashed Line, weight of 4 and opacity of 0.5 on the light map)
let line = [
    // SFO
    [33.9416, -118.4085],
    // DEN
    [39.8617, -104.6731],
    // AUS
    [30.1944, -97.6700],
    // YYZ
    [43.6767, -79.6306],
    // JFK
    [40.6340, -73.7789]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  //color: "red"
  //color: "yellow"
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '7,7',
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //id: 'mapbox/streets-v11',
    //id: 'mapbox/dark-v10',
    //id: 'mapbox/satellite-streets-v11',
    // Skill Drill:
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
