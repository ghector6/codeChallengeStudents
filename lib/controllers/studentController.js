const Reader = require("./../utils/Reader")
const studentService = require("./../services/studentService")
const creditService = require("./../services/creditService")

class studentController {

    static getWholeListStudents(){
        const wholeStudents = Reader.readJsonFile("./students.json");
        return studentService.printElements(wholeStudents,)
    }

    static getStudsWithCert(status){
        const certStuds = Reader.readJsonFile("./students.json");
        return studentService.studentsWithCertification(certStuds, status)
    }

    
    }




module.exports = studentController