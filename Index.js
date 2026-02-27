<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SumyTech School</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script src="https://cdn.tailwindcss.com"></script>
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

<link rel="stylesheet" href="style.css">

<style>
.watermark{
position:absolute;
opacity:0.08;
width:300px;
top:50%;
left:50%;
transform:translate(-50%,-50%);
pointer-events:none;
}
</style>

</head>

<body class="bg-gray-100 p-6">

<div class="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">

<h1 class="text-3xl font-bold text-center mb-6">
🎓 SumyTech School
</h1>

<!-- CSV DOWNLOAD -->
<div class="mb-4 text-right">
<a href="students.csv" download
class="text-blue-600 underline hover:text-blue-800">
📥 Download Students CSV
</a>
</div>

<!-- STUDENT SEARCH -->
<div class="mb-4">
<input
id="searchStudent"
type="text"
placeholder="Search student..."
class="border p-2 rounded w-full">
</div>

<!-- STUDENT LIST -->
<div id="studentList"
class="border rounded max-h-72 overflow-y-auto bg-white">

<!-- Students from CSV will appear here -->

</div>

<button onclick="fillStudentData()"
class="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
Choose Student
</button>

<!-- FORM -->
<div class="grid md:grid-cols-3 gap-4 mt-6 mb-6">

<input id="studentName" type="text"
placeholder="Student Name"
class="border p-2 rounded w-full">

<input id="courseName" type="text"
placeholder="Course Name"
class="border p-2 rounded w-full">

<input id="completionDate" type="date"
class="border p-2 rounded w-full">

</div>

<div class="flex gap-4 mb-6">

<button onclick="generateCertificate()"
class="bg-blue-600 text-white px-4 py-2 rounded">
Generate Certificate
</button>

<button onclick="downloadCertificate()"
class="bg-green-600 text-white px-4 py-2 rounded">
Download Certificate
</button>

</div>

<!-- CERTIFICATE -->
<div id="certificate"
class="relative bg-white border-8 border-blue-800 p-10 text-center overflow-hidden">

<img src="logo.png" class="watermark">

<h2 class="text-4xl font-bold mb-4">
Certificate of Completion
</h2>

<p class="text-lg mb-4">
This is to certify that
</p>

<h3 id="previewName"
class="text-3xl font-semibold text-blue-700">
Student Name
</h3>

<p class="mt-4">
has successfully completed
</p>

<h3 id="previewCourse"
class="text-2xl font-semibold mt-2">
Course Name
</h3>

<p class="mt-4">
Date: <span id="previewDate">Completion Date</span>
</p>

<p class="mt-8 font-bold">
Instructor: SumyTech School
</p>

</div>

</div>

<script src="index.js"></script>

</body>
</html>
