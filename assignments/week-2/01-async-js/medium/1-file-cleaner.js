const fs = require("fs");

const removeWhiteSpaces = (content) => {
  return content.replace(/\s+/g, " ");
};

let fileCleaner = () => {
  let updatedContent = "";
  fs.readFile("./temp.txt", (err, data) => {
    if (err) {
      throw err;
    }
    let content = data.toString();
    updatedContent = removeWhiteSpaces(content);
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
