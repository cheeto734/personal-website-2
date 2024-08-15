const logotext = "Chiho Sung";
const meta = {
  title: "Chiho Sung's Portfolio",
  description:
    "I'm Chiho, a Data Scientist/Software Engineer from the University of Michigan.",
};

const introdata = {
  title: "Hi, I'm Chiho",
  animated: {
    first: "Data Scientist",
    second: "Full-Stack Software Engineer",
    third: "Machine Learning Expert",
    fourth: "Entrepreneur",
    fifth: "Violinist",
    sixth: "MLO Financial Analyst",
  },
  description:
    "A dedicated individual who is constantly working on side projects, seeking growth opportunity, building, and breaking stuff",
  your_img_url: process.env.PUBLIC_URL + "/headshot.jpg",
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "I'm currently Double Majoring Data Science + Statistics at the University of Michigan. I've always loved creating things ever since I was a kid, whether it be making musical compositions or playing legos with my father, my enthusiasm to doing things I truly love has always been a core part of my identity. I've learned throughout my life that it only takes one small action to create immense change. This is my methodology when I work on a project or pursue a short-term goal. The little steps matter. After finding a love of technology and its plethora of positive impacts on my community, I have let this be my life goal: to solve real problems, invent cool stuff, and help people. Let's geek! Currently looking for new grad position in Full-Stack Engineer/Front-end Engineer/Back-end Engineer.",
};

const skills = [
  {
    name: "React",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "AWS",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "MySQL",
    proficiency: "95%",
    color: "#26d93c",
  },
  {
    name: "React Native",
    proficiency: "80%",
    color: "#8be41b",
  },
  {
    name: "Numpy",
    proficiency: "75%",
    color: "#ff8300",
  },
  {
    name: "Git",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Linux",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "HTTPS",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Problem-solving",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Fast-learner",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Self-starter",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Leadership",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Consistent & Organized",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Team player",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Clear communicator",
    proficiency: "100%",
    color: "#26d93c",
  },
  {
    name: "Curious and motivated",
    proficiency: "100%",
    color: "#26d93c",
  },
];

const languages = [
  {
    name: "Python",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "Java",
    proficiency: "90%",
    color: "#26d93c",
  },
  {
    name: "Node.js",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "JavaScript",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "C++",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "HTML5",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "R",
    proficiency: "99%",
    color: "#26d93c",
  },
  {
    name: "React.js",
    proficiency: "99%",
    color: "#26d93c",
  },
];

const dataportfolio = [
  {
    img: "images/snake.png",
    description:
      "Made a Snake game using PyGame ",
  },

  {
    img: "images/chatbot.png",
    description:
      "I made a chatbot that responds to inputs relating to medical services",
  },
  {
    img: "images/gswork.gif",
    description:
      "Created a WebAPI and Mobile Version for revamped Gold Star Mortgage Website"
  }
];

const hobby = [
  {
    name: "Certificates",
    img: ["images/certificate.png", "images/sqlcertificate.png", "images/vuecertificate.png"],
    description:
      "These are the certificates I have received from taking online courses/certificates of completion",
  },
  {
    name: "Violin",
    description:
      "I've been playing Violin since I was in 2nd grade. This has been a huge part of my life and I have gained many friends and fond memories with it. I'm currently playin in the Michigan POPS Orchestra as well as the Campus Symphony Orchestra at UMich",
    img: [""],

  },

  {
    name: "Cooking",
    description:
      "Coooking has always been a passion of mine, from making yummy Ramen to basically whatever I can make with leftover ingredients, it's always a fun thing to do with my free time",
    img: [""],

  },
  {
    name: "Coffee",
    description:
      "Ever since hibernating at the Shaprio Library, I have been a HUGE fan of drinking (and now making) coffee for me and my parents to enjoy!",
    img: [""],
  },
];

const work = [
  {
    company: "Gold Star Mortgage",
    time: "December 2023 - Present",
    position: "Software Development Intern + MLO",
    location: "Ann Arbor, Michigan",
    bullet: [
      "Technical Skills Development: Acquired advanced proficiency in SQL, C#, and Vue JS 3 through comprehensive training.",
      "Website Management Project: Utilized Azure and SQL to develop a robust API, enabling seamless integration of the main GS website with mobile platforms.",
      "Data Management Projects: Executed data management initiatives, significantly enhancing database performance and optimizing data workflows.",
      "Utilized Encompass software for data-driven loan origination and processing, significantly improving efficiency and accuracy.",
      "Applied data analysis skills to evaluate and approve mortgage applications, ensuring sound financial decisions.",
      "Contributed to boosting the local economy and helped community members achieve their dream of homeownership.",
    ],
    img: ["/images/goldstar.jpg", "/images/me_goldstar.jpg"],
  },
  {
    company: "ColorPhi",
    time: " June 2024 - Present",
    position: "Data Analyst",
    location: "Remote- Ann Arbor, Michigan",
    bullet: [
      "Developed advanced data mining algorithms and processes to identify the most preferred presets on a color-coding website.",
      "Analyzed user preferences and behavior to optimize website functionality and user experience.",
      "Implemented robust data management systems to ensure accuracy and efficiency in data collection and analysis."
    ],
    img: [""],
  },
  {
    company: "Innovation for Impact",
    time: "May 2024- Present",
    position: "Business Director + Back-End Member",
    location: "Ann Arbor, Michigan",
    bullet: [
      "Gained management + back-end development skills with Python, DJango, React, etc. to create a campus-wide banking application."
    ],
    img: [""]
  },
  {
    company: "University of Michigan, Ann Arbor",
    time: "October 2023 - May 2024",
    position: "Research Assistant",
    location: "Ann Arbor, Michigan",
    bullet: [
      "Conducted research on communication systems aimed at mitigating opinion polarization by utilizing advanced statistical methodologies and machine learning algorithms."
    ],
    img: [""],
  },
];
const contactConfig = {
  YOUR_EMAIL: "chsung@umich.edu",
  YOUR_SERVICE_ID: "service_y6hl9qo",
  YOUR_TEMPLATE_ID: "template_9cqfdh4",
  YOUR_USER_ID: "s7JpSrYb6tbVd2k_t"
};

const socialprofils = {
  github: "https://github.com/cheeto734",
  linkedin: "https://www.linkedin.com/in/chiho-sung-202763241/",
};

const courses = [
  "EECS 281- Data Structure & Algorithm",
  "EECS 280- Programming and Introductory Data Structures",
  "EECS 201- CompSci Pragmatics",
  "MATH 214- Linear Algebra",
  "EECS 203- Discrete Math",
  "MATH 215- Multivariable Calculus",
  "STATS 250- Statistics and Data Analysis",
  "STATS 206- Intro to Data Science",
  "COGSCI 101- Intro to CogSci",
  "ECON 101- Intro to Microeconomics",
  "EECS 183- Elementary Programming Concepts",
];

const certificates = [
  {
    img: ["images/certificate.png", "images/sqlcertificate.png", "images/vuecertificate.png"],
    description:
      "These are the certificates I have received from taking online courses/certificates of completion",
  },
];


const education = [
  {
    school: "University of Michigan, Ann Arbor",
    time: "Aug 2023 - May 2027",
    degree: "Bachelor of Science in Data Science, Statistics",
    gpa: "3.8 / 4.0",
    location: "Ann Arbor, Michigan",
  },

  {
    school: "Pioneer High School",
    time: "August 2019  - May 2023",
    degree: "High School Diploma with Honors",
    gpa: "4.0 / 4.0",
    location: "Ann Arbor, Michigan",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  languages,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  hobby,
  work,
  courses,
  certificates,
  education,
};