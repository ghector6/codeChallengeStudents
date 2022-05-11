const studentController = require("./controllers/studentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
    res.json({message: "Visual Partnership students API"});
});

app.get("/v1/students/:list", (req, res) => {
    const list = req.params.list;
    const studsList = studentController.getWholeListStudents(list);
    res.json(studsList);
});

app.get("/v1/students/certification/:status", (req, res) => {
    const status = req.params.status === "true" ? true : false;
    const studsCert = studentController.getStudsWithCert(status);
    res.json(studsCert);
});

app.get("/v1/students/credits/:credits", (req, res) => {
    const credits = req.params.credits;
    const studsCreds = studentController.getStudsCreds(credits);
    res.json(studsCreds);
});

app.listen(port, () => {
    console.log(`Visual Partnership listening in:${port}`);
});