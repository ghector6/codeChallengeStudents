const studentService = require("../../lib/services/studentService")
const studentController = require("./../../lib/controllers/studentController")

describe("Tests for the controller", () => {
    
    test("To see if im getting the whole list", () => {
        const students = studentController.getWholeListStudents()
        expect(students.length).toBe(51)
    })

    test("to see if im getting the true certs", () => {
        const students = studentController.getStudsWithCert(false)
        expect(students.length).toBe(29)
    })
})