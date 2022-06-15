import { useEffect, useState } from "react"
import IconText from "./IconText"
import Typing from "./Typing"


const contents = {
    "about": <div className='about-box mt-5 text-xs sm:text-base'>
                <Typing key={2} replaceText="I'm from Vietnam, currently an international student majoring in Computer Science at University of Cincinnati. I'm passionate about technology, I like to code and I always strive for exellence. I'm constantly
                learning to achieve my goal of becoming an outstanding software engineer." 
                typingInterval={30} timeDelay={0} typeDelay={1000} curCount={13} />
            </div>,
    "skills": <div className='about-box mt-5 w-full py-8'>
                <div className='flex flex-row  justify-between sm:pl-8 xl:pl-16'>
                    <div className="skill-content"><IconText timeDelay={0} icon="py" text="Python" /></div>
                    <div className="skill-content"><IconText timeDelay={1000} icon="cpp" text="C++" /></div>
                    <div className="skill-content"><IconText timeDelay={2000} icon="cs" text="C#" /></div>
                </div>
                <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                    <div className="skill-content"><IconText timeDelay={3000} icon="html" text="HTML" /></div>
                    <div className="skill-content"><IconText timeDelay={4000} icon="css" text="CSS" /> </div>
                    <div className="skill-content"><IconText timeDelay={5000} icon="js" text="JavaScript" /> </div>
                </div>
                <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                    <div className="skill-content"><IconText timeDelay={6000} icon="tw" text="Tailwind" /></div>
                    <div className="skill-content"><IconText timeDelay={7000} icon="sql" text="SQL" /></div>
                    <div className="skill-content"><IconText timeDelay={8000} icon="sqlite" text="SQLite" /></div>
                </div>
                <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                    <div className="skill-content"><IconText timeDelay={9000} icon="flask" text="Flask" /></div>
                    <div className="skill-content"><IconText timeDelay={10000} icon="next" text="Next.js" /></div>
                    <div className="skill-content"><IconText timeDelay={11000} icon="bz" text="Blazor" /></div>
                </div>
                <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                    <div className="skill-content"><IconText timeDelay={12000} icon="git" text="GitHub" /></div>
                    <div className="skill-content"><IconText timeDelay={13000} icon="vsc" text="VS Code" /></div>
                    <div className="skill-content"><IconText curCount={3} timeDelay={14000} icon="office" text="Office" /></div>
                </div>
            </div>,
    "facts":<div className='about-box mt-5 w-full py-8'>
                <div className='flex flex-row justify-center xl:px-6 xl:pr-1'>
                    <div className="hobby-content sm:mt-0"><IconText curCount={2} timeDelay={0} typeDelay={500} icon="dog" text="I'm a huge dog lover" /></div>
                    <div className="hobby-content sm:mt-0"><IconText curCount={2} timeDelay={2000} typeDelay={500} icon="guitar" text="I enjoy playing guitar" /></div>
                </div>
                <div className='flex flex-row justify-center xl:px-6 xl:pr-1'>
                    <div className="hobby-content"><IconText curCount={2} timeDelay={4000} typeDelay={500} icon="card" text="I collect playing cards" /></div>
                    <div className="hobby-content"><IconText curCount={4} timeDelay={6000} typeDelay={500} icon="sushi" text="I'm always down for sushi" /></div>
                </div>
            </div>
}

const AboutContent = ({contentName, timeDelay = 0}) => {
    const [phase, setPhase] = useState('New')
    const [content, setContent] = useState()

    useEffect(() => {
        switch (phase){
            case 'New':
                const timeout = setTimeout(() => {
                    setPhase('Create')
                }, timeDelay)

                return () => clearTimeout(timeout)

            case 'Create': {
                setContent(
                    contents[contentName]
                )
                setPhase('Done')
            }
            default:
                return
        }

    }, [content, phase])
  return (
    <>
        {content}
    </>
  )
}

export default AboutContent