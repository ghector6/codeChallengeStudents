class studentService {
    
    static printElements(students){
        const studentsInJson = students.map((student) => student)
        return studentsInJson
    }

    static studentsWithCertification(students, status){
        const studentsCertified = students.filter((student) => student.haveCertification === status)
        const studentsWithTrue = studentsCertified.map((student) => student.name )
        return studentsWithTrue
    }    
}

module.exports = studentService