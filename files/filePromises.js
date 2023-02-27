const fsPrmoises = require("fs").promises;
const path = require("path");

const fileOps = async function () {
  try {
    const data = await fsPrmoises.readFile(
      path.join(__dirname, "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPrmoises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
    await fsPrmoises.appendFile(
      path.join(__dirname, "promiseWrite.txt"),
      "\n\nNice to meet you too"
    );
    const newData = await fsPrmoises.readFile(
      path.join(__dirname, "promiseWrite.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

fileOps();
