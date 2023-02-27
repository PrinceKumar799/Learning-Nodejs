const { randomUUID } = require("crypto");

const fsPrmoises = require("fs").promises;
const fs = require("fs");
const { format } = require("date-fns");
const path = require("path");
const logEvent = async (msg) => {
  try {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${randomUUID()}\t${msg}`;
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPrmoises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPrmoises.appendFile(
      path.join(__dirname, "logs", "logTable.txt"),
      logItem
    );
    const savedLogs = await fsPrmoises.readFile(
      path.join(__dirname, "logs", "logTable.txt"),
      "utf-8"
    );
    console.log(savedLogs);
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvent;
