const Reader = require("./../../lib/utils/Reader")

const { TestScheduler } = require("jest")

describe("Test to see if my Reader is working", () =>{
    test("if the reader gets elements in the json", () => {
        const students = Reader.readJsonFile("./students.json")
        expect(students.length).toBe(51)
    })
})

