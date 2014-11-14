function displayWork() {

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
			"location": "Sydney (AUS)"
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

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bloPic);
	$("#header").append(formattedBioPic);

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


	for (school in education.schools) {

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry").append(formattedSchoolDegree);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry").append(formattedSchoolName);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry").append(formattedSchoolLocation);
	}

	var work = {
		"jobs": [ 
			{
				"employer": "Hesham Al-Zaemey (Myself)",
				"title": "Founder",
				"location": "Sydney",
				"dates": 2013,
				"description": "maintaining www.example.com"
			},
			{
				"employer": "Hesham Al-Zaemey (Myself)",
				"title": "Freelancer - Developer",
				"location": "Sydney",
				"dates": 2013,
				"description": "develop, test, deploy, maintain websites."
			}
		]	
	};


	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$(".work-entry:last").append(formattedEmployerTitle);	

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedWorkDescription);
	};

	var projects = {
		"projects": [ 
			{
				"title": "Software Engineering",
				"dates": "2013",
				"description": "Test and deploy site example.com",
				"images": ["www.unityemployment.com"]
			},
			{
				"title": "Developer",
				"dates": "2014",
				"description": "Develop and deploy a site containing my Resume/CV",
				"images": ["www.Hesham.com/images/1.jpg"]
			}
		]
	};

	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

displayWork();

function locationizer (work_obj) {
	var locationArray = [];

	for (job in work.jobs) {
		var locationCount = work.jobs[job].location;
		var locationArray.push (locationCount);
	}
	return locationArray;
}
