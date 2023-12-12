const fs = require("fs");

const removeWhiteSpaces = async (content) => {
  return content.replace(/\s+/g, " ");
};

let fileCleaner = async () => {
  let updatedContent = "";
  fs.readFile("./temp.txt", async (err, data) => {
    if (err) {
      throw err;
    }
    let content = data.toString();
    updatedContent = await removeWhiteSpaces(content);
  });
  setTimeout(() => {
    fs.writeFile("./temp.txt", updatedContent, (err) => {
      if (err) {
        throw err;
      }
      console.log("File Cleaned");
    });
  }, 1000);
};

fileCleaner();
