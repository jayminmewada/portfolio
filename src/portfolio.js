const header = {
  homepage: 'https://github.com/jayminmewada',
  title: 'JM.',
}

const about = {
  name: 'Jaymin Mewada',
  role: 'Software Developer',
  description:
    'Developing secure, scalable applications at Zeel Infotech using Java, C++, and Python. Optimizing performance, managing databases, and working on both front-end and back-end solutions.',
  resume: 'https://drive.google.com/file/d/1w4Bmc8nJIEX0g5uIGjB7ev3E3zz5FJMk/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/jaymin-mewada-15874b248/',
    github: 'https://github.com/jayminmewada',
  },
}

const projects = [
  {
    name: 'Newsletter',
    description:
      'Python application to scrape and store the top 10 daily news in MongoDB, and created a JavaScript-based newsletter feature to email the scraped news. Configured MongoDB for efficient data storage, and used Python (cloudscraper) and JavaScript (SMTP API) for data manipulation and emailing functionality.',
    stack: ['JavaScript', 'Python', 'Html/CSS'],
    sourceCode: 'https://github.com/jayminmewada/Newsletter',
    
  },
  {
    name: 'Vartalab',
    description:
      'Group chat application, "Vartalab," using JavaScript and Firebase for real-time messaging, user authentication, and responsive design. Implemented Firebase Realtime Database for seamless messaging and configured Firebase settings for authentication and database management',
    stack: ['JavaScript', 'Firebase'],
    sourceCode: 'https://github.com/jayminmewada/ChatApplication',
  },
  {
    name: 'Morse Code',
    description:
      'Java application that converts text to Morse code and vice versa, featuring a JavaFX GUI and MongoDB integration for data storage. The app, managed with Maven, allows users to input text, convert it to Morse code (or vice versa), and store conversion results in MongoDB for retrieval.',
    stack: ['Java', 'Mongodb'],
    sourceCode: 'https://github.com/jayminmewada/MorseCode',
  },
]

const skills = [
  'Java',
  'Delphi(pascal,c++)',
  'C', 
  'C++',
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'React',
  'SpringBoot',
  'Mongodb',
  'MySQL',
  'Git',
  'Docker',
  'Cloud(AWS)', 
]

const contact = {
  email: 'jayminm31@gmail.com',
}

export { header, about, projects, skills, contact }
