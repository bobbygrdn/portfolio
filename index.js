/* The below code is using JavaScript to select the header element on a webpage and store it in a
variable called "header". It is also initializing a variable called "prevScrollPos" to the current
vertical scroll position of the window. */
const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;
let isMouseAtTop = false;

// Add event listeners to track mouse position
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseleave', handleMouseMove);

/**
 * The function handles the mouse movement and toggles the visibility of the header based on the
 * position of the mouse.
 * @param event - The event parameter is an object that contains information about the mouse move
 * event, such as the position of the mouse cursor. It is passed as an argument to the handleMouseMove
 * function.
 */
function handleMouseMove(event) {
    isMouseAtTop = event.clientY <= 80;
    if (isMouseAtTop) {
        header.style.transform = 'translateY(0)';
    } else {
        // Scrolling down
        header.style.transform = 'translateY(-100vh)';
        header.style.zIndex = '1000';
    }
}

/* The beelow code is adding an event listener to the window object that listens for scroll events. When
the user scrolls up, the header element is displayed by setting its transform property to
'translateY(0)'. When the user scrolls down, the header element is hidden by setting its transform
property to 'translateY(-100vh)' and its z-index property to '1000'. The code also keeps track of
the previous scroll position to determine the direction of the scroll. */
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (isMouseAtTop || (currentScrollPos !== 0 && prevScrollPos > currentScrollPos)) {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    } else {
        // Scrolling down
        header.style.transform = 'translateY(-100vh)';
        header.style.zIndex = '1000';
    }

    prevScrollPos = currentScrollPos;
};

/* The below code is defining an array of objects called `navItems`. Each object has two properties:
`text` and `link`. These objects represent the navigation items of a website and their corresponding
links. */
const navItems = [
    { text: "Home", link: 'index.html' },
    { text: "Projects", link: 'projects.html' },
    { text: "Tech Stack", link: 'stack.html' },
    { text: "My Journey", link: 'journey.html' },
    { text: "Contact", link: 'contact.html' },
];

/* The below code is selecting the HTML element with the class "navbar" and assigning it to the
variable "navList" using the `querySelector` method in JavaScript. */
const navList = document.querySelector('.navbar');

/* The below code is declaring a constant variable `currentPage` and assigning it the value of the
current page's pathname using the `window.location.pathname` property in JavaScript. This code is
typically used in web development to get the current URL path of the page. */
const currentPage = window.location.pathname;

/* The below code is creating a navigation menu by iterating through an array of navigation items and
creating a list item for each item in the array. It excludes the current page from the navigation
menu. For each item, it creates a list item element and an anchor element, sets the text content and
href attribute of the anchor element, and appends the anchor element to the list item element.
Finally, it appends the list item element to the navigation menu. */
navItems.forEach(item => {
    // Exclude the current page from the navigation menu
    if (!currentPage.includes(item.link)) {
        const li = document.createElement('li');
        li.classList.add('nav-item');

        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.textContent = item.text;
        a.href = item.link;

        li.appendChild(a);
        navList.appendChild(li);
    }
});

/**
 * This function sends an email using EmailJS and includes a captcha challenge to prevent spam.
 * @param event - The event parameter is an object that represents the event that triggered the
 * function. In this case, it is the form submission event.
 * @returns The function does not have a return statement, so it will return undefined by default.
 */
function sendEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const message = document.getElementById('form-message').value;

    const response = document.querySelector('.h-captcha');
    if (!response || response.value === '') {
        alert('Please complete the captcha challenge.');
        return;
    }

    // Send the email using EmailJS
    emailjs.send('service_rzeq1ou', 'template_jf1c536', {
        from_name: name,
        from_email: email,
        message: message
    }).then(function () {
        // Handle the success case
        alert('Your message has been sent!');
        document.getElementById('form-name').value = '';
        document.getElementById('form-email').value = '';
        document.getElementById('form-message').value = '';
        window.scrollTo(0, 0);
        window.location.reload();

    }, function (error) {
        // Handle the error case
        console.log('Error:', error);
        alert('An error occurred. Please try again later.');
    });

}

/* The below code is selecting the HTML `title` element using the `querySelector` method and assigning
it to the `title` variable in JavaScript. */
let title = document.querySelector('title');

/* The code is checking if the value of the variable `title` is equal to the string "Bobbygrdn". If it
is, then it selects the HTML element with the ID "homeMain" and assigns it to the variable
`mainElement`. It then defines a function called `removeAnimationClass` which removes the CSS class
"loadAnimation" from the `mainElement`. Finally, it adds an event listener to the `mainElement`
which listens for the "animationend" event and calls the `removeAnimationClass` function when the
event is triggered. */
if (title === 'Bobbygrdn') {
    let mainElement = document.getElementById("homeMain");
    function removeAnimationClass() {
        mainElement.classList.remove("loadAnimation");
    }

    mainElement.addEventListener("animationend", removeAnimationClass);
}

/* The below code is creating a timeline using the TimelineJS library and populating it with events when the user goes to the My Journey page */
if (title.innerText === 'Bobbygrdn - My Journey') {
    /* The below code is defining a JavaScript object called "timelineData" which contains an array of
    events with information about the author's career and personal development journey. Each event
    has a start date, and some events also have an end date, a headline, and a text description. */
    var timelineData = {
        events: [
            {
                start_date: {
                    year: "2009",
                    month: "10",
                    day: "20"
                },
                text: {
                    headline: "Enlisted in the United State Marine Corps",
                    text: "Attended Marine Corps boot camp at the Marine Corps Recruit Depot, attended Marine Combat Training at Camp Pendleton and attended Field Artillery Radar Operators Course in Fort Sill, Oklahoma."
                }
            },
            {
                start_date: {
                    year: "2010",
                    month: "07",
                    day: "09"
                },
                text: {
                    headline: "My First Duty Station, 12th Marine Regiment",
                    text: "Arrived at my first duty station in the middle of 2010. Became apart of the Target Acquisition Platoon for 12th Marine Regiment in Okinawa, Japan. Promoted to the rank of Lance Corporal. Participated in training events across Asia in Seoul, South Korea, Fuji, Japan, and Ojojihara, Japan."
                }
            },
            {
                start_date: {
                    year: "2012",
                    month: "08",
                    day: "12"
                },
                text: {
                    headline: "My Second Duty Station, 11th Marine Regiment",
                    text: "Arrived at my second duty station at the end of 2012. Became apart of the Target Acquisition Platoon for 11th Marine Regiment in Camp Pendleton, California. Promoted to the rank of Corporal. Given the new job of Radar Team Leader. "
                }
            },
            {
                start_date: {
                    year: "2013",
                    month: "07",
                    day: "14"
                },
                end_date: {
                    year: "2014",
                    month: "02",
                    day: "18"
                },
                text: {
                    headline: "Combat Deployment Operation Enduring Freedom",
                    text: "Arrived in Afghanistan in the middle of 2013. Promoted to the rank of Sergeant. Lead the fight in Forward Operating Base Shukvani as the security specialist in Eastern Helamn Province. Arrived back in Camp Pendleton in the beginning of 2014. Led the Target Processing Center for the Regiment that coordinates artillery fire to support the regiments movements and its friendly units during live fire exercises."
                }
            },
            {
                start_date: {
                    year: "2014",
                    month: "6",
                    day: "22"
                },
                end_date: {
                    year: "2014",
                    month: "9",
                    day: "27"
                },
                text: {
                    headline: "Deployment to Wellington New Zealand",
                    text: "Participated in the multi-national military exercise as the Marine Corps military liason to the New Zealand Army. Arrived back in Camp Pendleton in the end of 2014 after a successful deployment."
                }
            },
            {
                start_date: {
                    year: "2015",
                    month: "12",
                    day: "15"
                },
                end_date: {
                    year: "2016",
                    month: "03",
                    day: "17"
                },
                text: {
                    headline: "Attended Marine Security Guard School in Quantico, Virginia",
                    text: "Learned the security measures, technology and equipment used in embassies and consulates worldwide by Marine Security Guards. Learned the Department of State Defensive Tactics and security training to properly defend embassies, consulates and dignitaries from attack or harm. Graduated mid march of the following year."
                }
            },
            {
                start_date: {
                    year: "2016",
                    month: "03",
                    day: "19"
                },
                text: {
                    headline: "First Marine Security Guard Duty Station",
                    text: "Arrived at the U.S. Embassy in Bamako, Mali and assumed the billet of Operations NCO. Promoted to the rank of Staff Sergeant. Given the billet of Assistant Senior Manager. Worked side by side with the Department of State Regional Security Office, the Central Intelligence Agency, the Federal Bureau of Investigation, the Special Program for Embassy Augmentation and Response (S.P.E.A.R.) Team and the Malian National Guard."
                }
            },
            {
                start_date: {
                    year: "2017",
                    month: "03",
                    day: "22"
                },
                text: {
                    headline: "Second Marine Security Guard Duty Station",
                    text: "Arrived at the U.S. Embassy in Gaborone, Botswana, Mali. Worked side by side with the Department of State Regional Security Office to protect the embassy and enhance the security posture for U.S. dignitaries."
                }
            },
            {
                start_date: {
                    year: "2018",
                    month: "04",
                    day: "26"
                },
                text: {
                    headline: "Third Marine Security Guard Duty Station",
                    text: "Arrived at the U.S. Consulate in Frankfurt, Germany. Worked side by side with the Department of State Regional Security Office to protect the embassy and enhance the security posture for U.S. dignitaries. Orchastrated the annual Marine Corps Birthday Ball celebration."
                }
            },
            {
                start_date: {
                    year: "2019",
                    month: "05",
                    day: "03"
                },
                text: {
                    headline: "My Third Duty Station, 11th Marine Regiment",
                    text: "Led the Radar Platoon and provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership; initiated appropriate courses of action, priorities, resource requirements, and equipment and personnel allocations necessary to accomplish organizational objectives."
                }
            },
            {
                start_date: {
                    year: "2019",
                    month: "06",
                    day: "12"
                },
                text: {
                    headline: "Attended Operations Manager Course in Fort Sill, Oklahoma",
                    text: "Attended the Operations Manager Course and was given the certification of Operations Manager."
                }
            },
            {
                start_date: {
                    year: "2019",
                    month: "11",
                    day: "01"
                },
                text: {
                    headline: "My Fourth Marine Corp Duty Station, 1st Battalion, 11th Marine Regiment",
                    text: "Maintained and supervised the accountability, training, mentoring, and holistic professional development of over 60 Marines with different Marine Occupation Specialties to ensure a heightened state of readiness of the company personnel. Supervised and instructed over 90 hours of training for the Fire Direction Control Center to enhance the capabilities of the company for live fire exercises."
                }
            },
            {
                start_date: {
                    year: "2020",
                    month: "09",
                    day: "08"
                },
                text: {
                    headline: "Moved to be the Assistant Battalion Operations Manager for 1st Battalion, 11th Marine Regiment",
                    text: "Hand selected to become the Assistant Battalion Operations Manager for 1st Battalion, 11th Marine Regiment. Coordinated and supervised technical, administrative, and training requirements for the Battalion ensuring a 100% compliance rating. Provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership."
                }
            },
            {
                start_date: {
                    year: "2021",
                    month: "03",
                    day: "14"
                },
                text: {
                    headline: "Moved to be the Operations Manager for Bravo Battery, 1st Battalion, 11th Marine Regiment",
                    text: "Hand selected to become the Charlie Battery Operations Manager. Maintained and supervised the accountability, training, mentoring, and holistic professional development of over 60 Marines with different Marine Occupation Specialties to ensure a heightened state of readiness of the company personnel. Supervised and instructed over 90 hours of training for the Fire Direction Control Center to enhance the capabilities of the company for live fire exercises."
                }
            },
            {
                start_date: {
                    year: "2021",
                    month: "08",
                    day: "15"
                },
                text: {
                    headline: "My Fifth Duty Station, 11th Marine Regiment",
                    text: "Hand selected to become the Radar Platoon Operations Manager for Target Acquisition Platoon. Provided technical oversight for programs associated with business processes, resource management, organizational analysis, systems management, strategic planning, and leadership; initiated appropriate courses of action, priorities, resource requirements, and equipment and personnel allocations necessary to accomplish organizational objectives. Provided oversight and aggressive guidance on all aspects of the Radar section training schedule; enhancing the overall readiness of the platoon. Instituted the Target Acquisition Platoon information infrastructure on Microsoft Teams to enhance the platoon leadership's productivity, communication, and efficiency."
                }
            },
            {
                start_date: {
                    year: "2021",
                    month: "10",
                    day: "19"
                },
                text: {
                    headline: "When my Development Journey Began",
                    text: "Learned basic Front-End Web Development through various courses on Udemy, Coursera, Code Academy, and The Odin Project."
                }
            },
            {
                start_date: {
                    year: "2022",
                    month: "04",
                    day: "05"
                },
                text: {
                    headline: "Started Galvanize Inc. Operation Level Up Course",
                    text: "Learned basic Front-End Web Development through various courses on Udemy, Coursera, Code Academy, and Odin."
                }
            },
            {
                start_date: {
                    year: "2022",
                    month: "08",
                    day: "15"
                },
                text: {
                    headline: "Galvanize Operation Level Up Graduation",
                    text: "Graduated from Operation Level Up as a certified Full Stack Software Developer"
                }
            },
            {
                start_date: {
                    year: "2022",
                    month: "08",
                    day: "17"
                },
                end_date: {
                    year: "2022",
                    month: "10",
                    day: "28"
                },
                text: {
                    headline: "Landed a job with Galvanize as an Assistant Instructor Intern at Galvanize Inc.",
                    text: "Instructed Software Development fundamentals to 60 transitioning service members to prepare them for a role as a Software Engineer in the technical community. Mentored students on a one-on-one basis to build on skills and understanding to help them in their future growth as Full Stack Software Engineers. Championed the new Onboarding module for the Learn Software that streamlines the onboarding of oncoming Assistant Instructor Intern personnel so they will be prepared to hit the ground running."
                }
            },
            {
                start_date: {
                    year: "2022",
                    month: "09",
                    day: "07"
                },
                text: {
                    headline: "Separation From the United States Marine Corps",
                    text: "Seperated from the Marine Corps after a 13 year career."
                }
            },
            {
                start_date: {
                    year: "2023",
                    month: "03",
                    day: "07"
                },
                end_date: {
                    year: "2023",
                    month: "07",
                    day: "18"
                },
                text: {
                    headline: "Attended the Per Scholas Full Stack Java Developer Program",
                    text: "Instructor-led, Java remote training through Per Scholas with over 1000 hours in a “classroom setting” for 18 weeks and a 13 weeks session with a professional development coach. Professional development utilizes the application of past experiences to develop learners in areas of their resume, behavioral interviewing, professional leadership, and technical interview skills. Learning focuses on the ability to build a full-stack web application with front-end and back-end components. Technologies learned to include Agile-Scrum, SQL, Relational Databases, Version Control, OOPL, HTML, CSS, JavaScript, Java SE, Java EE, Multithreading and Concurrency, Spring MVC, Spring Boot, Web Services, Jenkins CI, JDBC, ORM, Unit Testing, JPA, Web Application Frameworks, Eclipse and Maven"
                }
            }
        ]
    };

    /* The below code is creating a JavaScript object called `options` with a property `start_at_slide`
    set to the value of 15. This object can be used to configure some functionality in a JavaScript
    library or application. */
    var options = {
        start_at_slide: 15
    }

    /* The below code is selecting an HTML element with the ID "timeline-container" and assigning it to
    a variable called "timelineContainer" using JavaScript. */
    var timelineContainer = document.getElementById('timeline-container');

    /* The below code is creating a new timeline using the TimelineJS library in JavaScript. It takes
    in three parameters: 
    1. `timelineContainer` - the HTML element where the timeline will be displayed
    2. `timelineData` - an object containing the data for the timeline, such as events and their
    dates
    3. `options` - an object containing various options for customizing the appearance and behavior
    of the timeline. */
    var timeline = new TL.Timeline(timelineContainer, timelineData, options);
}
