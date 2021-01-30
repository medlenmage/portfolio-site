import Mock from "../mock";

const database = {
  information: {
    name: 'Joshua Medlen',
    aboutContent: "I am a full stack web developer in the Nashville area. I can provide clean code, dependability, and someone with great intiative. I am versed in React, JS, Python, and Django.",
    age: 30,
    phone: '615-692-2741',
    nationality: 'American',
    language: 'English',
    email: 'joshua246@gmail.com',
    address: '121 King Street, Melbourne, Australia',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/joshua.medlen',
      twitter: 'https://twitter.com/MageMedlen',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/joshuamedlen/',
      dribbble: '',
      github: 'https://github.com/medlenmage'
    },
    brandImage: '/images/headshot.png',
    aboutImage: '/images/headshot 2.jpg',
    aboutImageLg: '/images/headshot 2.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Front End Web Development",
      icon: 'code',
      details: "I have skills in front end development that provide clean, working front end code using languages such as JS and React."
    },
    {
      title: "Back End Web Development",
      icon: 'code',
      details: "I can leverage my knowledge in Python, Django, and SQL to assist in building and maintaining databases as well as helping connect back end to the front end"
    },
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 65
    },
    {
      title: "Javascript",
      value: 85
    },
    {
      title: "jQuery",
      value: 85
    },
    {
      title: "ReactJS",
      value: 95
    },
    {
      title: "Sass",
      value: 65
    },
    {
      title: "Git/Version Control",
      value: 90
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Gamer Log",
      subtitle: "A log for gamer's who lose track of multiple games they are playing.",
      imageUrl: "https://github.com/medlenmage/capstone-gamer-log/blob/master/screenshots/appScreenshots/landingPage.png?raw=true",
      largeImageUrl: ["https://github.com/medlenmage/capstone-gamer-log/blob/master/screenshots/appScreenshots/gamesPage.png?raw=true"],
      githubUrl: "https://github.com/medlenmage/capstone-gamer-log",
      url: 'https://gamer-log.web.app/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Full Stack Web Developer",
        company: "Nashville Software School",
        details: "Built full stack web applications solo or in teams to learn new or build on existing tech skills."
      },
      {
        id: 2,
        year: "2014 - Present",
        position: "Equipment Operator",
        company: "Metro Nashville Public Works",
        details: "Drive, operate, and maintain light and heavy equipment for use in repair and maintenance around the city."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Certificate of Completion",
        university: "Nashville Software School",
        details: "Built full stack web application projects alone or in teams of three to five with set deadlines to meet"
      },
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['6159-692-2741'],
    emailAddress: ['joshua246@gmail.com'],
    address: "2190 Memorial Dr, Clarksville, TN, 37043"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});