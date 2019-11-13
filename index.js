// ===== Dependencies ===== //
const express = require("express");

// ===== Set up express app ===== //
const app = express();
const PORT = 3000;

// ----- Enable data parsing ----- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ----- Used for Static Pages -----//
app.use(express.static("public"));

// ===== Data ===== //

const reservations = [
  {
    name: "Kaiisha Oliver",
    phone: "555-123-4567",
    email: "email@email.com",
    id: "0"
  },
  {
    name: "Donald Duck",
    phone: "555-123-4567",
    email: "email@email.com",
    id: "1"
  }
];

// ===== Set up routes ===== //

app.get("/api/reservations", function(request, response) {
  response.json(reservations);
});

// ===== Start the server ===== //
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
