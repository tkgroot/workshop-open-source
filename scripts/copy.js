const fs = require("fs-extra");

// Async with promises:
fs.copy(`${process.cwd()}/.htaccess`, `${process.cwd()}/dist/.htaccess`)
  .then(() => console.log("success!"))
  .catch((err) => console.error(err));

fs.copy(`${process.cwd()}/.htpasswd`, `${process.cwd()}/dist/.htpasswd`)
  .then(() => console.log("success!"))
  .catch((err) => console.error(err));
