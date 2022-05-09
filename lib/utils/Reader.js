const fs = require("fs");

class Reader {
    
    static readJsonFile(path) {
        const rawData =fs.readFileSync(path);
        const students = JSON.parse(rawData);
        return students;
    }

}

module.exports = Reader;