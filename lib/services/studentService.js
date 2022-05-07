class studentService {
    
    static printElements(students){
        const studentsInJson = students.map((student) => student)
        return studentsInJson
    }
    
}

module.exports = studentService