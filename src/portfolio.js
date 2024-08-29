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
    resume: 'https://example.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/soyonlee/',
      github: 'https://github.com/samtaitai',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'CI/CD',
    'Jest',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'slee550@myseneca.ca',
  }
  
  export { header, about, projects, skills, contact }
  