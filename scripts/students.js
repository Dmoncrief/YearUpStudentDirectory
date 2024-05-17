"use strict"

window.onload = () =>{
    console.log("onload");

for(let student of students){
    let studentColumnElement = createStudentColumnElement(student);
    studentListRow.appendChild(studentColumnElement);

}


};


 function createStudentColumnElement(student){
    let studentCardDiv = document.createElement("div");
    studentCardDiv.innerHTMl = student.name;
    studentCardDiv.class.Name = "col";



let studentCardDiv = document.createElement("div");
studentCardDiv.className = "card studentcard";
studentCardDiv.innerHTML = student.name;




studentColumnDiv.appendChild(studentCardDiv);


let studentImage = document.createElement('img');
studentImage.src = student.imageur1;
studentImage.className = "card-img-top";
studentImage.alt = student.name;

studentCardDiv.appendChild(studentImage);




let cardBodyDiv = document.createElement("div");
cardBodyDiv.className = "card-body";



cardBodyDiv.innerHTML = student.name;









    return studentCardDiv;
 }