// GET ELEMENTS
const studentSelect = document.getElementById("studentSelect");
const studentNameInput = document.getElementById("studentName");
const courseInput = document.getElementById("courseName");
const dateInput = document.getElementById("completionDate");

// PREVIEW ELEMENTS
const previewName = document.getElementById("previewName");
const previewCourse = document.getElementById("previewCourse");
const previewDate = document.getElementById("previewDate");

let students = Sumayya Tijjani Muhammad ,Full Stack Development ,2026-01-15 [0]
                Ibrahim Musa,JavaScript Foundations,2026-01-20 [1]
                Fatima Yusuf,Web Design Basics,2026-01-25 [2]
                Sadiq Ahmed,Front-End Development ,2026-01-28 [3]
                Abimbola Adedoja, UI/UX design, 2026-02-01 [4]
                Winnie Macbonne, AI and Machine Learning, 2026-02-4 [5]
                Aisha Bello,Frontend Development,2026-01-15 [6]
                Ibrahim Musa,JavaScript Foundations,2026-01-20 [7]
                Fatima Yusuf,Web Design Basics,2026-01-25 [8]
                Sadiq Ahmed,Full Stack Introduction,2026-02-01 [9]
                Maryam Abdullahi,HTML & CSS Mastery,2026-02-05 [10]
                Yusuf Garba,Advanced JavaScript,2026-02-07 [11]
                Zainab Lawal,Responsive Web Design,2026-02-10 [12]
                Usman Aliyu,React Basics,2026-02-12 [13]
                Hauwa Sule,UI/UX Fundamentals,2026-02-15 [14]
                Abdulrahman Idris,Backend Development Intro,2026-02-18 [15]
                Khadija Mohammed,Full Stack Bootcamp,2026-02-20 [16]
                Muhammad Bashir,Web Application Deployment,2026-02-22 [17]
                Aminat Sani,JavaScript DOM Projects,2026-02-24 [18]
                Bilal Ahmed,Git & GitHub Essentials,2026-02-26 [19]
                Safiya Ibrahim,Modern Web APIs,2026-02-28      [20]      
}

// LOAD CSV FILE
fetch("students.csv")
  .then(response => response.text())
  .then(data => {

    const rows = data.split("\n").slice(1);

    rows.forEach(row => {

      const cols = row.split(",");

      if(cols.length >= 3){

        const student = {
          name: cols[0].trim(),
          course: cols[1].trim(),
          date: cols[2].trim()
        };

        students.push(student);

        const option = document.createElement("option");
        option.value = student.name;
        option.textContent = student.name;

        studentSelect.appendChild(option);

      }

    });

  });


// WHEN A STUDENT IS SELECTED
studentSelect.addEventListener("change", function(){

  const selectedName = this.value;

  const student = students.find(s => s.name === selectedName);

  if(student){

    studentNameInput.value = student.name;
    courseInput.value = student.course;
    dateInput.value = student.date;

  }

});


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
    link.download = "certificate.png";
    link.href = canvas.toDataURL();

    link.click();

  });

  }
