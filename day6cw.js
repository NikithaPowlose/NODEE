const fs = require("fs");

fs.readFile("user.txt", "utf8", (err, data) => {
  if (err) return;
  const name = data.trim().split(" ")[1];
  if (name === "John") {
    console.log("Valid User");
  } else {
    console.log("Unknown User");
  }
});
