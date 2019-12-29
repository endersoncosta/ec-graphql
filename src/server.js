const app = require("./app");

app.listen(3000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});