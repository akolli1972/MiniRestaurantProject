// ===== Dependencies ===== //
const express = require("express");

// ===== Set up express app ===== //
const app = express();
const PORT = 3000;

// ----- Enable data parsing ----- //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ===== Set up routs ===== //

app.get("/test", function(request, response) {
  response.end(
    "This is a test page. If you hit it, things are sort of working."
  );
});

// ===== Start the server ===== //
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
