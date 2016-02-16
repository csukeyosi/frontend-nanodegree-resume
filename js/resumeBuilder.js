var bio = {
	"name": "Philip Fry",
	"role": "Delivery boy",
	"welcomeMessage": "Go ahead. I deserve it.",
	"contacts": {
		"mobile": "999999999",
		"email": "pjfry@gmail.com",
		"github": "what?!",
		"location": "Universe"
	},
	"skills": ["immune to all psychic forms of attack", "awesomeness", "very caring and kind-hearted person", "remarkable video games player"],
	"bioPic": "images/fry.jpg"
};

var work = {
	"jobs": [{
		"employer": "Planet Express",
		"title": "Delivery boy",
		"location": "New York City",
		"dates": "January, 3000 - future",
		"description": "Planet Express, Inc. is the delivery compаny started by Professor Hubert J. Farnsworth to help fund his research and employs a range of individuals to help deliver packages to clients."
	}, {
		"employer": "Panucci's Pizza",
		"title": "Pizza delivery boy",
		"location": "New York City",
		"dates": "1998 - December, 1999",
		"description": "Pizza delivery is a service in which a pizzeria or pizza chain delivers a pizza to a customer. An order is typically made either by telephone or over the internet to the pizza chain, in which the customer can request pizza type, size and other products alongside the pizza, commonly including soft drinks. Pizzas may be delivered in pizza boxes or delivery bags, and deliveries are made with either an automobile, motor scooter, or bicycle. Customers can, depending on the pizza chain, choose to pay online, or in person, with cash, credit or a debit card. A delivery fee is usually charged with what the customer has bought."
	}]
};

var project = [{
	"title" : "Pizza Project",
	"dates" : "2000 - 2001",
	"description" : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex.",
	"img" : "images/proj1.jpg"
	}, {
	"title" : "Pro 2",
	"dates" : "2015 - 2016",
	"description" : "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
	"img" : "images/proj2.jpg"
	}
];

var edu = {
	"schools": [{
		"name": "Federal University of Campina Grande",
		"location": "Campina Grande, Brazil",
		"degree": "bachelor",
		"majors": ["major 1"],
		"dates": "2011 - 2015",
		"url": "ufcg.com.br"
	}, {
		"name": "University of Dresdren",
		"location": "Dresdren, Germany",
		"degree": "master",
		"majors": ["major 2"],
		"dates": "2016",
		"url": "ud.com"
	}],
	"onlineCourses": [{
		"title": "Front-end developer",
		"school": "Udacity",
		"dates": "2016",
		"url": "udacity.com"
	}]
};

var hasElements = function(_array) {
	return _array != undefined && _array != null && _array.length > 0;
};

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

if (hasElements(bio.skills)) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) { 
    	$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
   	} 
}

workExperience.display = function() {
	for (job in work.jobs) { 
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));

		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}
};

workExperience.display();

projects.display = function() {
	for (proj in project) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project[proj].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project[proj].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project[proj].description));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project[proj].img));
	}
};

projects.display();

education.display = function() {
	for (school in edu.schools) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolName.replace("%data%", edu.schools[school].name) + HTMLschoolDegree.replace("%data%", edu.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", edu.schools[school].dates)); 
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", edu.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", edu.schools[school].majors));
	}

	for (onlineClass in edu.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLonlineClasses);
		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", edu.onlineCourses[onlineClass].title) + HTMLonlineSchool.replace("%data%", edu.onlineCourses[onlineClass].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", edu.onlineCourses[onlineClass].dates)); 
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", edu.onlineCourses[onlineClass].url));
	}
};

education.display();

$("#mapDiv").append(googleMap);