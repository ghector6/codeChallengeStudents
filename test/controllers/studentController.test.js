const studentController = require("./../../lib/controllers/studentController")

describe("Tests for the controller", () => {
    
    test("To see if im getting the whole list", () => {
        const students = studentController.getWholeListStudents()
        expect(students.length).toBe(51)
    })
})