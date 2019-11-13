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

const waitlist = [];

// ===== Set up routes ===== //

app.get("/api/resview", function(request, response) {
  response.json(reservations);
});

app.post("/api/reservation", function(request, response) {
  reservations.push({
    id: reservations.length + 1,
    name: request.body.name,
    phone: request.body.phone,
    email: request.body.email
  });
  response.json(reservations);
});

// ===== Start the server ===== //
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
