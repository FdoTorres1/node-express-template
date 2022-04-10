require("dotenv").config()
const db = require("./db/models/index");
const app = require("./app");

async function main() {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(process.env.PORT);
  console.log(`App listening on port ${process.env.PORT}.`);
}

main()