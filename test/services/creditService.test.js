const Reader = require("./../../lib/utils/Reader");
const creditService = require("./../../lib/services/creditService");

describe("Test to see if Im getting students credits", () =>{
    test("if it is getting < 500 credits students", () => {
        const students = Reader.readJsonFile("./students.json");
        const studentsWithValidation = creditService.getStudentsWithCredits(students,);
        expect(studentsWithValidation.length).toBe(27);
    });

});