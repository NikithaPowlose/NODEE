const fs = require("fs");

fs.writeFile("profile.txt", "Name: Riya\nAge: 22\nCity: Mumbai", (err) => {
  if (err) return;

  fs.readFile("profile.txt", "utf8", (err, data) => {
    if (err) return;

    const nameLine = data.split("\n")[0];
    const name = nameLine.split(": ")[1];

    function checkName(n) {
      return n === "Riya";
    }

    if (checkName(name)) {
      console.log("Profile verified");
    } else {
      console.log("Invalid profile");
    }

    fs.appendFile("profile.txt", "\nStatus: Active", (err) => {
      if (err) return;

      fs.rename("profile.txt", "verified_profile.txt", (err) => {
        if (err) return;
      });
    });
  });
});
