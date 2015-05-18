// define JSON variables

var bio = {
	"name" : "Alex Moaveni",
	"role" : "Computer Graphics Guru",
	"contacts" : {
		"mobile" : "310 733 0474",
		"email" : "almoav@gmail.com",
		"github" : "github.com/almoav",
		"twitter" : "n/a",
		"location" : "Los Angeles, CA"
		},
	"welcomessage" : "This is my resume, there are many like it but this is my own",
	"skills" : ["programming", "animation", "buoyancy control"],
	"biopic" : "https://scontent-atl.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/1001473_997889150339_776701461_n.jpg?oh=430b789b598948e8a255943a4c7914d3&oe=55DF95D3"
	
	}

bio.display = function(){
	// header
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	// top contacts
	for (contact in bio.contacts){
		var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
		formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);
	}

	// bio pic
	var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPic)

	// welcome msg
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomessage);
	$("#header").append(formattedWelcome);

	// skills
	$("#header").append(HTMLskillsStart);		
	for (skill in bio.skills){
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}


var education = {
	"schools" : 
	[
		{
			"name" : "Chapman University",
			"location" : "Orange, CA",
			"degree" : "BFA",
			"majors" : ["Digital Art"],
			"dates" : 2009,
			"url" : "http://www.chapman.edu/"

		}
	],
	"online courses" :
	[
		{
			"title" : "Front-End Web Devoloper Nanodegree",
			"school" : "Udacity",
			"date" : 2015,
			"url" : "https://www.udacity.com/"
		}
	]
}

education.display = function(){
	// undergrad
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		var entry = education.schools[school];
		var formattedSchoolName = HTMLschoolName.replace("%data%", entry.name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", entry.location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", entry.degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", entry.majors);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", entry.dates);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolDegree);		
	}

	// online classes
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education["online courses"]){
		$("#education").append(HTMLschoolStart);
		var entry = education["online courses"][onlineCourse];
		var formattedTitle = HTMLonlineTitle.replace("%data%", entry.title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", entry.school);
		var formattedDate = HTMLonlineDates.replace("%data%", entry.date);
		var formattedUrl = HTMLonlineURL.replace("%data%", entry.url);

		$(".education-entry:last").append(formattedTitle);
		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedDate);
		$(".education-entry:last").append(formattedUrl);
	}
}	


var work = {
	"jobs" : [
		{
			"employer" : "Sony Pictures Imageworks",
			"title" : "Fx Technical Director",
			"location" : "Culver City, CA",
			"dates" : "January 2015 - July 2015",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		},
		{
			"employer" : "Stereo D, LLC.",
			"title" : "VFX Technical Director",
			"location" : "Burbank, CA",
			"dates" : "March 2014 - January 2015",
			"description" : "Technical/artist position, responsible for VFX pipeline development, template scene generation, asset management + task tracking and some shot work."

		},
		{
			"employer" : "Sony Pictures Imageworks",
			"title" : "Fx Technical Director",
			"location" : "Culver City, CA",
			"dates" : "January 2012 - February 2014",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		},
		{
			"employer" : "The Mill",
			"title" : "Fx Artist",
			"location" : "Los Angeles, CA",
			"dates" : "February 2010 - February 2012",
			"description" : "Artist position, responsible for the creation of stylized natural phenomena using simulated and procedural animation methods."
		}		
	]
}

work.display = function(){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var entry = work.jobs[job];
		var formattedEmployer = HTMLworkEmployer.replace("%data%", entry.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", entry.title);
		var formattedLocation = HTMLworkLocation.replace("%data%", entry.location);
		var formattedDates = HTMLworkDates.replace("%data%", entry.dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", entry.description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		//$(".work-entry:last").append(formattedTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}


var projects = [
	{
		"title" : "Hotel Transylvania 2",
		"dates" : "January 2015 - July 2015",
		"description" : "My highlights were large scale FLIP sims, vast ocean texture mapping, and tile artifact reduction dev.",
		"images": []
	},
	{
		"title" : "Mad Max",
		"dates" : "July 2014 - October 2014",
		"description" : "I created tire dust kickup and dust wash template which were then propagated to almost 800 shots via render scripting.",
		"images": []
	},
	{
		"title" : "The Amazing Spiderman 2",
		"dates" : "September 2013 - February 2014",
		"description" : "Various electricity effects using procedural animation and realistic tear gas simulation.",
		"images": []
	},
	{
		"title" : "Cloudy with a Chance of Meatballs 2",
		"dates" : "August 2012 - August 2013",
		"description" : "I did a little bit of everything from FLIP fluids, pyroclastics clouds, Rigid Body Dynamics, procedural animation, etc.",
		"images": []
	},
	{
		"title" : "Hotel Transylvania",
		"dates" : "February 2012 - August 2012",
		"description" : "Procedural electricity, large FLIP simulation and volumetric smoke sims",
		"images": []
	}
]

projects.display = function(){
	for (project in projects){
		var entry = projects[project];
		if (typeof entry.title != "undefined"){

			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", entry.title);
			var formattedDates = HTMLprojectDates.replace("%data%", entry.dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", entry.description);
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			for (image in entry.images){
				var formattedImage = HTMLprojectImage.replace("%data%", entry.images[image]);	
			}
		}
	}
}

// execute the display functions
bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append('<div id="map"></div>');
