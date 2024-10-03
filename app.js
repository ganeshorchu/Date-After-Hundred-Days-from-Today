const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  let today = new Date();
  const result = addDays(
    new Date(today.getFullYear(), today.getMonth(), today.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
