class creditService {

    static getStudentsWithCredits(students, credits = 500){
        const studentsBigCredit = students.filter((student) => student.credits >= credits);
        const listOfStudentsBigCredits = studentsBigCredit.map((student) => student.name );
        return listOfStudentsBigCredits;
    }
}

module.exports = creditService;