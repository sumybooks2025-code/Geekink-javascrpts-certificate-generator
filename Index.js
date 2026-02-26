// GET ELEMENTS
const studentSelect = document.getElementById("studentSelect");
const studentNameInput = document.getElementById("studentName");
const courseInput = document.getElementById("courseName");
const dateInput = document.getElementById("completionDate");

// PREVIEW ELEMENTS
const previewName = document.getElementById("previewName");
const previewCourse = document.getElementById("previewCourse");
const previewDate = document.getElementById("previewDate");

// STUDENT STORAGE
let students = [];


// LOAD CSV FILE
fetch("students.csv")
.then(response => response.text())
.then(data => {

const rows = data.split("\n").slice(1);

rows.forEach((row, index) => {

const cols = row.split(",");

if(cols.length >= 3){

const student = {
name: cols[0].trim(),
course: cols[1].trim(),
date: cols[2].trim()
};

students.push(student);

// CREATE DROPDOWN OPTION
const option = document.createElement("option");

option.value = index;
option.textContent = student.name;

studentSelect.appendChild(option);

}

});

});


// FILL FORM WHEN CHOOSE BUTTON IS CLICKED
function fillStudentData(){

const selectedIndex = studentSelect.value;

if(selectedIndex === "") return;

const student = students[selectedIndex];

studentNameInput.value = student.name;
courseInput.value = student.course;
dateInput.value = student.date;

}


// GENERATE CERTIFICATE
function generateCertificate(){

previewName.textContent = studentNameInput.value || "Student Name";
previewCourse.textContent = courseInput.value || "Course Name";
previewDate.textContent = dateInput.value || "Completion Date";

}


// DOWNLOAD CERTIFICATE
function downloadCertificate(){

const certificate = document.getElementById("certificate");

html2canvas(certificate).then(canvas => {

const link = document.createElement("a");

link.download = "certificate.png";

link.href = canvas.toDataURL();

link.click();

});

}
