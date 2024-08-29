import Typewriter from "typewriter-effect";
import './About.css'

function Type() {
  return (
    <h1 className='about__name'>
        <Typewriter
        options={{
        strings: [
            "Soyon Lee.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        }}
        />
    </h1>
    
  );
}

export default Type;
