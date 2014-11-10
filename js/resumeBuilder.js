
// var name = "Hesham Al-Zaemey";
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);

// var role = "<br/><br/>Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole);



// bio.hobbies = "Quranic and Shria Studies, History, Tennis, chess.";
// bio.skype = "hzaemey";
// bio["showcase"] = "www.unityemployment.com";

// var employment = {};
// employment.currentPosition = "Freelancer - Web Developer";
// employment.employer = "Myself";
// employment.yearsWorked = 2;
// employment.city = "Global (web-base work)";

// var qualification = {};
// qualification["schoolName"] = "University of Western Sydney";
// qualification["schoolYears"] = 3;
// qualification["schoolCity"] = "Sydney (AUS)";

// $("#header").append(bio.fName);
// $("#header").append(bio.lName);
// $("#header").append(bio.role);
// $("#header").append(bio.contact.mobile);
// $("#header").append(bio.picURL);
// $("#header").append(bio.message);
// $("#skillsChart").append(bio.skills);
// $("#header").append(bio.hobbies);
// $("#header").append(bio["showcase"]);
// $("#workExperience").append(employment.currentPosition);
// $("#education").append(qualification["schoolYears"]);



var bio = {
	"name": "Hesham Al-Zaemey",
	"role": "Web Developer",
	"welcomeMessage": "Hello, thank you for visiting my Resume/CV. Please do not hisitate to drop a message if you like.",
	"contact": {
		"mobile": "+61403860545",
		"email": "hzaemey@gmail.com",
		"github": "hzaemey",
		"twitter": "@hzaemey",
		"location": "Sydney (AUS) - Sana'a (YEM)"
	},
	"skills": ["HTML", "CSS", "Web Developer", "PHP", "UX", "Cloud Computing", "Git", "Website Deployment"],
	"bloPic": "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

var formattedmobile = HTMLmobile.replace("%data%", bio.contact.mobile);
$("#topContacts").append(formattedmobile);

var formattedemail = HTMLemail.replace("%data%", bio.contact.email);
$("#topContacts").append(formattedemail);

var formattedgithub = HTMLgithub.replace("%data%", bio.contact.github);
$("#topContacts").append(formattedgithub);

var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
$("#topContacts").append(formattedtwitter);

var formattedlocation = HTMLlocation.replace("%data%", bio.contact.location);
$("#topContacts").append(formattedlocation);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);	
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);		

	formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkills);
	
	formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkills);		

	formattedSkills = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkills);
};	

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bloPic);
$("#header").append(formattedBioPic);

var education = {
	"schools": [ 
		{
			"name": "Bachelor of ICT",
			"location": "University of Western Sydney (UWS) - Cambelltown, Sydney",
			"degree": "Bachelor",
			"majors": ["Mathematics", "Networking"],
			"dates": 2011,
			"url": "www.uws.edu.au"
		},
		{
			"name": "Advanced Diploma in Network Security",
			"location": "Lidcombe College, South Western TAFE - Lidcombe, Sydney",
			"degree": "Advanced Diploma",
			"majors": ["Network Security", "Networking"],
			"dates": 0.5,
			"url": "www.tafe.edu.au"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 0.1,
			"url": "www.udacity.com/course/ud804"
		}
	]	
};


var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);
$("#education").append(formattedSchoolName);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[0].location);
$("#education").append(formattedSchoolLocation);

var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[0].degree);
$("#education").append(formattedSchoolDegree);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[1].name);
$("#education").append(formattedSchoolName);

var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[1].location);
$("#education").append(formattedSchoolLocation);



var work = {
	"jobs": [ 
		{
			"employer": "Hesham Al-Zaemey (Myself)",
			"title": "Founder",
			"location": "Sydney",
			"dates": 2013,
			"description": "maintaining www.unityemployment.com"
		},
		{
			"employer": "Hesham Al-Zaemey (Myself)",
			"title": "Freelancer - Developer",
			"location": "Sydney",
			"dates": 2013,
			"description": "maintaining www.unityemployment.com"
		}
	]	
};


for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	// var formattedWorkStart = HTMLworkStart.replace("%data%", work.jobs.dates[index]);
	// $("#workExperience").append(formattedWorkStart);

	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	// $("#workExperience").append(formattedWorkEmployer);

	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	// $("#workExperience").append(formattedWorkTitle);

	var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

	$(".work-entry:last").append(formattedEmployerTitle);	
};

var projects = {
	"projects": [ 
		{
			"title": "Software Engineering",
			"dates": "2013",
			"description": "Test and deploy site unityemployment.com",
			"images": ["www.unityemployment.com"]
		},
		{
			"title": "Developer",
			"dates": "2014",
			"description": "Develop and deploy a site containing my Resume/CV",
			"images": ["www.HeshamAlZaemey.com/images/1.jpg"]
		}
	]
};


