import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
//import DownloadIcon from '@mui/icons-material/Download'
import { about } from '../portfolio'
import './About.css'
import ResumePdf from '../assets/Soyon Lee_resume_1p_js.pdf'
import Type from './Type'
//import { Row, Button } from 'react-bootstrap'

const About = () => {
  const { name, role, description, social } = about
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ResumePdf;
    link.setAttribute('download', 'SoyonLee_Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='about center'>
      {name && (
        <>
          <h1>Hi, I am</h1>
          <Type />
        </>

      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact'>
        {(
          <button className='btn btn--outline' onClick={handleDownload}>
            Resume
          </button>
        )}
        {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
            </>
          )}
      </div>
    </div>
  )
}

export default About
