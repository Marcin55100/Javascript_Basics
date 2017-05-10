/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#header").append();
 $("#main").append(["Marcin <p>"]);
 	var awesomeThoughts="I am Marcin";
	console.log(awesomeThoughts)
	var newThoughts=awesomeThoughts.replace("Marcin", "Smartin");
 $("#main").append(newThoughts);
  */
 var skills=["C# WPF Apps", "Websites"];
 var name="Marcin Kozłowski";
 var job="Web developer";
 var number="883-330-969";
 var emailAdress="marcin55100@gmail.com";
 var mobile=HTMLmobile.replace("%data%",number);
 var email=HTMLemail.replace("%data%",emailAdress);
 var formattedName=HTMLheaderName.replace("%data%",name);
 var formattedRole=HTMLheaderRole.replace("%data%",job);
 $("#header").prepend(formattedRole, formattedName);
 $("#header").append(mobile,email);
 //var array=["first","second"];
 //$("#header").append(array);

 var bio={
 "name" : "Marcin",
 "role":"Web Developer",
 "age" : 22,
 "contacts": {
 "mobile": "883-330-969",
 "email":"marcin55100@gmail.com",
 "github": "Marcin55100",
 "location": "Gdańsk"
 },
 "skills" : skills,
 "bioPic" : "images/fry.jpg"
};
var work={
"jobs":[{
"employer":"Via Medica",
"title":"Tech Specialist",
"dates":"2014- Future",
"description":"I maintained some computers.",
"location" : "Gdańsk"
},
{
"employer":"Pomorska TV",
"title":"Camera operator",
"dates":"2015-Future",
"description":"Operating the camera.",
"location":"Gdańsk"
}
]
};
var projects={
"projects":[
{
"title":"Android App",
"dates":"2015",
"description":"Measuring the strength of signal",
"images":"http://www.androidcentral.com/sites/androidcentral.com/files/styles/w800h450crop/public/article_images/2015/03/podcast-ac-new_2.jpg?itok=0wcOMHZD"
}
]
};
/*var education={
"Name" : "II LO"
};
education["Years"]="2008-2012";
education["City"]="Gdańsk";
*/
var education= {
"schools":[
{
"name": "University of Technology",
"city": "Gdańsk",
"degree": "Engineer",
"dates": "2016",
"major": "Telecommunication",
"location":"Wrocław"
},
{
"name": "II LO",
"city": "Wrocław",
"degree":"Secondary Education",
"dates": "2012",
"major" : "Mathematics and physics",
"location":"Wrocław"
}
],
"onlineCourses":[
{
"title": "Javascript Basics",
"school":"Udacity",
"dates": "2016",
"url":"http://www.udacity.com/course/ud804"
}
]
};
if(bio.skills!=null)
{
$("#header").append(HTMLskillsStart);
var firstSkill=HTMLheaderName.replace("%data%",bio.skills[0]);
var secondSkill=HTMLheaderName.replace("%data%",bio.skills[1]);
$("#skills").append(firstSkill);
$("#skills").append(secondSkill);
//$("skills").append(HTMLSkills);
}
work.display =function() {
for(item in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var Employer=HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
	var Title=HTMLworkTitle.replace("%data%",work.jobs[item].title);
	var Both=Employer+" "+Title;
	var Date=HTMLworkDates.replace("%data%", work.jobs[item].dates);
	var Description=HTMLworkDescription.replace("%data%",work.jobs[item].description)
	$(".work-entry:last").append(Both,Date,Description);
}
}
work.display();

education.display=function(){
for(item in education.schools)
{
$("#education").append(HTMLschoolStart);
var name= HTMLschoolName.replace("%data%",education.schools[item].name);
var degree= HTMLschoolDegree.replace("%data%",education.schools[item].degree);
var both=name+""+degree;
var city= HTMLschoolLocation.replace("%data%",education.schools[item].city);
var dates= HTMLschoolDates.replace("%data%",education.schools[item].dates);
var major= HTMLschoolMajor.replace("%data%",education.schools[item].major);
$(".education-entry:last").append(both,dates,city,major);
}
}
education.display();
$(".education-entry:last").append(HTMLonlineClasses);


education.displayOnline= function(){
for(item in education.onlineCourses)
{
var name= HTMLonlineTitle.replace("%data%",education.onlineCourses[item].title);
var school= HTMLonlineSchool.replace("%data%",education.onlineCourses[item].school);
var both=name+""+school;
var dates= HTMLonlineDates.replace("%data%",education.onlineCourses[item].dates);
var url= HTMLonlineURL.replace("%data%",education.onlineCourses[item].url);
$(".education-entry:last").append(both,dates,url);
}
}
education.displayOnline();




// CLICK FUNCTION
$(document).click(function(loc) {  
var x=loc.pageX;
var y=loc.pageY;
logClicks(x,y);
});
var person= "marcin kozlowski";
$("#workExperience").prepend("<button onclick=\"inName(person)\">Change size</button>");
function inName(person){
 person=person.split(" ");
 var name=person[0].slice(0,1).toUpperCase()+""+person[0].slice(1);
 var surname=person[1].toUpperCase();
 //console.log(name,surname);
 var personChanged=name+" "+surname; 
 return personChanged;
 }
 
  projects.display = function(){
  for(project in projects.projects){
 $("#projects").append(HTMLprojectStart);
 $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
 $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
 $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
 
 if(projects.projects[project].images.length>0){
 //for(image in projects.projects[project].images){
 //$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[image]));
 //}
 $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images));
 }
 }
 }
 projects.display();

 $("#mapDiv").append(googleMap);
 $("#lets-connect").append(mobile,email);



 
