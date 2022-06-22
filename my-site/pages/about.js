import Head from 'next/head'
import BoxContent from '../components/BoxContent'
import Button from '../components/Button'
import Typing from '../components/Typing'
import { useAnimation} from "../contexts/AnimationContext";

function About() {
  const [animation] = useAnimation()

  if(animation){
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>About</title>
        </Head>

        <div className="flex flex-col items-center">
        
          {/* ABOUT */}
          <h1 className="p-head mt-10">
            <Typing key={1} replaceText="&nbsp;ABOUT ME" typingInterval={80} typeDelay={500} curCount={4} />
          </h1>
          <BoxContent key={1} contentName="about" timeDelay={4000}/>

          {/* SKILLS */}
          <h1 className="p-head mt-16">
            <Typing key={3} replaceText="&nbsp;MY SKILLS" typingInterval={80} timeDelay={17000} typeDelay={500} curCount={4} />
          </h1>
          <BoxContent key={2} contentName="skills" timeDelay={21000}/>
          
          {/* FUN FACTS */}
          <h1 className="p-head mt-16">
            <Typing key={4} replaceText="&nbsp;FUN FACTS" typingInterval={80} timeDelay={38000} typeDelay={500} curCount={4} />
          </h1>
          <BoxContent key={3} contentName="facts" timeDelay={42000}/>

          {/* EXPERIENCE BUTTON */}
          <div className="my-10 sm:my-20 ">
            <Button key={1} link='/experience' timeDelay={52000} text="View my experience"/>
          </div>

        </div>
      </div> 
    )
  } else {
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>About</title>
        </Head>

        <div className="flex flex-col items-center">
        
          {/* ABOUT */}
          <h1 className="p-head mt-10">
            ABOUT ME
          </h1>
          <div className='about-box mt-5 text-xs sm:text-base'>
            I'm from Vietnam, currently an international student majoring in Computer Science at University of Cincinnati. I'm passionate about technology, I like to code and I always strive for exellence. I'm constantly
            learning to achieve my goal of becoming an outstanding software engineer.
          </div>
      

          {/* SKILLS */}
          <h1 className="p-head mt-16">
            MY SKILLS
          </h1>
          <BoxContent key={4} contentName="skillsStatic"/>
          
          {/* FUN FACTS */}
          <h1 className="p-head mt-16">
            FUN FACTS
          </h1>
          <BoxContent key={5} contentName="factsStatic"/>

          {/* EXPERIENCE BUTTON */}
          <div className="my-10 sm:my-20 ">
            <Button key={2} link='/experience' timeDelay={0} staticText="View my experience"/>
          </div>

        </div>
      </div> 
    )
  }
}

export default About