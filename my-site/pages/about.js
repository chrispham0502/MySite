import Head from 'next/head'
import AboutContent from '../components/AboutContent'
import Button from '../components/Button'
import IconText from '../components/IconText'
import Typing from '../components/Typing'



function About() {
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>About</title>
        </Head>

        <div className="flex flex-col items-center">
        
          {/* ABOUT */}
          <h1 className="p-head mt-10">
            <Typing key={1} replaceText="ABOUT ME" typingInterval={80} typeDelay={500} curCount={4} />
          </h1>
          <AboutContent contentName="about" timeDelay={4000}/>

          {/* SKILLS */}
          <h1 className="p-head mt-16">
            <Typing key={3} replaceText="MY SKILLS" typingInterval={80} timeDelay={17000} typeDelay={500} curCount={4} />
          </h1>
          <AboutContent contentName="skills" timeDelay={21000}/>
          
          {/* FUN FACTS */}
          <h1 className="p-head mt-16">
            <Typing key={6} replaceText="FUN FACTS" typingInterval={80} timeDelay={38000} typeDelay={500} curCount={4} />
          </h1>
          <AboutContent contentName="facts" timeDelay={42000}/>

          {/* EXPERIENCE BUTTON */}
          <div className="my-10 sm:my-20 ">
            <Button link='/experience' timeDelay={52000} text="View my experience"/>
          </div>

        </div>
      </div> 
    )
}

export default About