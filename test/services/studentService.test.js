const Reader = require("./../../lib/utils/Reader")
const studentService = require("./../../lib/services/studentService")

describe("Test to se if static method gets all elementes from the json" , () => {
    
    test("if my method prints the whole students list with all elements", () => {
        const students = Reader.readJsonFile("./students.json")
        const wholeList = studentService.printElements(students)
        expect(wholeList.length).toBe(51)
    })

    test("2) if im getting the list of students with certification", () => {
        const students = Reader.readJsonFile("./students.json")
        const studentsValidated = studentService.studentsWithCertification(students, true)
        expect(studentsValidated[1]).toBe("Lucinda")
    })
})