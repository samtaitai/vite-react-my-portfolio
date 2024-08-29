const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://rjshkhr.github.io/cleanfolio',
    title: 'JS.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Soyon Lee',
    role: 'Junior Software Developer',
    description:
      'Motivated Computer Science student with a strong foundation in software development practices and object-oriented programming. Proficient in Python, Java, and C#, with hands-on experience in Git and Jira. Demonstrates a solid understanding of various testing strategies and continuous integration principles. Eager to apply classroom knowledge and practical skills to real-world software development projects.',
    social: {
      linkedin: 'https://www.linkedin.com/in/soyonlee/',
      github: 'https://github.com/samtaitai',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Journal App',
      description:
        'A personal micro journal web app. Each user enjoys the freedom to create, edit, and delete their notes, while the app ensures data integrity and privacy through Firestore security rules.',
      stack: ['JavaScript', 'ExpressJS', 'Vue', 'MongoDB'],
      sourceCode: 'https://github.com/samtaitai/vue_microjournal_withPinia',
      livePreview: 'https://moteballs.web.app/#/auth',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML/CSS',
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'SQL',
    'React',
    'Vue',
    'Git',
    'CI/CD',
    'Jest',
    'Azure',
    'AWS',
    'Docker',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'slee550@myseneca.ca',
  }
  
  export { header, about, projects, skills, contact }
  