import { useEffect, useState } from "react"
import IconText from "./IconText"
import Typing from "./Typing"


const contents = {
"about":        <div className='about-box mt-5 text-xs sm:text-base'>
                    <Typing key={2} replaceText="I'm from Vietnam, currently an international student majoring in Computer Science at University of Cincinnati. I'm passionate about technology, I like to code and I always strive for exellence. I'm constantly
                                    learning to achieve my goal of becoming an outstanding software engineer." 
                                    typingInterval={30} timeDelay={0} typeDelay={0} curCount={13} />
                </div>,
"skills":       <div className='about-box mt-5 w-full py-8'>
                    <div className='flex flex-row  justify-between sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText curCount={1} timeDelay={0} icon="py" text="Python" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={1000} icon="cpp" text="C++" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={2000} icon="cs" text="C#" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText curCount={1} timeDelay={3000} icon="html" text="HTML" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={4000} icon="css" text="CSS" /> </div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={5000} icon="js" text="JavaScript" /> </div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText curCount={1} timeDelay={6000} icon="tw" text="Tailwind" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={7000} icon="sql" text="SQL" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={8000} icon="sqlite" text="SQLite" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText curCount={1} timeDelay={9000} icon="flask" text="Flask" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={10000} icon="next" text="Next.js" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={11000} icon="bz" text="Blazor" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText curCount={1} timeDelay={12000} icon="git" text="GitHub" /></div>
                        <div className="skill-content"><IconText curCount={1} timeDelay={13000} icon="vsc" text="VS Code" /></div>
                        <div className="skill-content"><IconText curCount={3} timeDelay={14000} icon="office" text="Office" /></div>
                    </div>
                </div>,
"skillsStatic": <div className='about-box mt-5 w-full py-8'>
                    <div className='flex flex-row  justify-between sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText icon="py" staticText="Python" /></div>
                        <div className="skill-content"><IconText icon="cpp" staticText="C++" /></div>
                        <div className="skill-content"><IconText icon="cs" staticText="C#" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText icon="html" staticText="HTML" /></div>
                        <div className="skill-content"><IconText icon="css" staticText="CSS" /> </div>
                        <div className="skill-content"><IconText icon="js" staticText="JavaScript" /> </div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText icon="tw" staticText="Tailwind" /></div>
                        <div className="skill-content"><IconText icon="sql" staticText="SQL" /></div>
                        <div className="skill-content"><IconText icon="sqlite" staticText="SQLite" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText icon="flask" staticText="Flask" /></div>
                        <div className="skill-content"><IconText icon="next" staticText="Next.js" /></div>
                        <div className="skill-content"><IconText icon="bz" staticText="Blazor" /></div>
                    </div>
                    <div className='flex flex-row  justify-between mt-5 sm:pl-8 xl:pl-16'>
                        <div className="skill-content"><IconText icon="git" staticText="GitHub" /></div>
                        <div className="skill-content"><IconText icon="vsc" staticText="VS Code" /></div>
                        <div className="skill-content"><IconText icon="office" staticText="Office" /></div>
                    </div>
                 </div>,
"facts":        <div className='about-box mt-5 w-full px-0 py-8'>
                    <div className='flex flex-row justify-center xl:px-6 xl:pr-1'>
                        <div className="hobby-content -mt-1 sm:mt-0"><IconText curCount={2} timeDelay={0} typeDelay={500} icon="dog" text="I'm a huge dog lover" /></div>
                        <div className="hobby-content -mt-1 sm:mt-0"><IconText curCount={2} timeDelay={2000} typeDelay={500} icon="guitar" text="I enjoy playing guitar" /></div>
                    </div>
                    <div className='flex flex-row justify-center xl:px-6 xl:pr-1'>
                        <div className="hobby-content"><IconText curCount={2} timeDelay={4000} typeDelay={500} icon="card" text="I collect playing cards" /></div>
                        <div className="hobby-content"><IconText curCount={4} timeDelay={6000} typeDelay={500} icon="sushi" text="I'm always down for sushi" /></div>
                    </div>
                </div>,
"factsStatic":  <div className='about-box mt-5 w-full px-0 py-8'>
                    <div className='flex flex-row justify-center  xl:px-6 xl:pr-1'>
                        <div className="hobby-content -mt-1 sm:mt-0"><IconText icon="dog" staticText="I'm a huge dog lover" /></div>
                        <div className="hobby-content -mt-1 sm:mt-0"><IconText icon="guitar" staticText="I enjoy playing guitar" /></div>
                    </div>
                    <div className='flex flex-row justify-center xl:px-6 xl:pr-1'>
                        <div className="hobby-content"><IconText icon="card" staticText="I collect playing cards" /></div>
                        <div className="hobby-content"><IconText icon="sushi" staticText="I'm always down for sushi" /></div>
                    </div>
                </div>,
"contact":      <div className='contact-box mt-5 w-full py-1 sm:py-6'>
                    <div className='flex flex-col md:flex-row justify-center xl:px-6 xl:pr-1'>
                        <div className="contact-content sm:mt-0 justify-center"><IconText curCount={2} timeDelay={0} typeDelay={500} icon="phone" text="+1 513-652-8234" /></div>
                        <div className="contact-content pb-3 sm:pb-0 sm:mt-0 justify-center"><IconText curCount={4} timeDelay={2000} typeDelay={500} icon="email" text="phamt7@mail.uc.edu" /></div>
                    </div>
                </div>,
"contactStatic":<div className='contact-box mt-5 w-full py-1 sm:py-6'>
                    <div className='flex flex-col md:flex-row justify-center xl:px-6 xl:pr-1'>
                        <div className="contact-content sm:mt-0 justify-center"><IconText icon="phone" staticText="+1 513-652-8234" /></div>
                        <div className="contact-content pb-3 sm:pb-0 sm:mt-0 justify-center"><IconText icon="email" staticText="phamt7@mail.uc.edu" /></div>
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