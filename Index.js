// GET ELEMENTS
const studentList = document.getElementById("studentList");
const searchStudent = document.getElementById("searchStudent");

const studentNameInput = document.getElementById("studentName");
const courseInput = document.getElementById("courseName");
const dateInput = document.getElementById("completionDate");

const previewName = document.getElementById("previewName");
const previewCourse = document.getElementById("previewCourse");
const previewDate = document.getElementById("previewDate");

let students = [];

// LOAD CSV
fetch("students.csv")
.then(res => res.text())
.then(data => {

const rows = data.split("\n").slice(1);

rows.forEach((row,index)=>{

const cols = row.split(",");

if(cols.length >=3){

const student = {
name: cols[0].trim(),
course: cols[1].trim(),
date: cols[2].trim()
};

students.push(student);

createStudentItem(student,index);

}

});

});

// CREATE STUDENT LIST ITEM
function createStudentItem(student,index){

const label = document.createElement("label");

label.className =
"flex justify-between items-center border-b p-3 cursor-pointer hover:bg-gray-100";

label.innerHTML = `
<span>${student.name}</span>
<input type="radio" name="studentRadio" value="${index}">
`;

studentList.appendChild(label);

}

// SEARCH STUDENT
searchStudent.addEventListener("input", function(){

const keyword = this.value.toLowerCase();

studentList.innerHTML = "";

students.forEach((student,index)=>{

if(student.name.toLowerCase().includes(keyword)){

createStudentItem(student,index);

}

});

});

// FILL FORM
function fillStudentData(){

const selected =
document.querySelector('input[name="studentRadio"]:checked');

if(!selected){
alert("Select a student");
return;
}

const student = students[selected.value];

studentNameInput.value = student.name;
courseInput.value = student.course;
dateInput.value = student.date;

generateCertificate();

}

// GENERATE CERTIFICATE
function generateCertificate(){

previewName.textContent = studentNameInput.value;
previewCourse.textContent = courseInput.value;
previewDate.textContent = dateInput.value;

}

// DOWNLOAD CERTIFICATE
function downloadCertificate(){

const certificate = document.getElementById("certificate");

html2canvas(certificate).then(canvas => {

const link = document.createElement("a");

link.download = studentNameInput.value + "_certificate.png";

link.href = canvas.toDataURL();

link.click();

});

}
