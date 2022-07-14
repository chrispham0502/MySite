import Head from 'next/head'
import Button from '../components/Button'
import ExperienceCard from '../components/ExperienceCard'
import ProjectCard from '../components/ProjectCard'
import Typing from '../components/Typing'
import { BiPackage } from 'react-icons/bi'
import { GoGlobe } from 'react-icons/go'
import { AiOutlineRobot } from 'react-icons/ai'
import { useAnimation} from "../contexts/AnimationContext";

function Experience() {

  const [animation] = useAnimation()

  if (animation){
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>Experience</title>
        </Head>
  
        {/* EXPERIENCE */}
        <div className="flex flex-col items-center justify-center w-3/4 max-w-5xl">
          <h1 className="p-head mt-10">
              <Typing key={1} replaceText="&nbsp;MY EXPERIENCE" typingInterval={80} typeDelay={500} curCount={4} />
          </h1>
          <div className="flex flex-col  xl:flex-row w-full justify-between items-center mt-10">
            <div className="xl:mt-0 fade-in" style={{"--animation-delay": "5.4s"}}>
              <ExperienceCard bgURL="https://i.imgur.com/Ei73z0F.jpg" logoURL="https://i.imgur.com/8nJZoxI.jpg" company="Fox Corporation" job="Software Enginner Co-op" 
                              date="JAN 2021 - NOW" location="CINCINNATI - OH"
                              description= {<> 
                              • Worked in the Sports Data Team to contribute to the development of the FOX Sports App.<br/> 
                              • Created a web application using C# and Blazor to serve as a tool for internal uses.<br/>
                              • Created programs using C# to acquire and process data from providers through APIs and produce meaningful products for our clients.<br/> 
                              • Managed data in the database using SSMS and SQL. 
                              </>}
              />
            </div>
            
            <div className="mt-10 xl:mt-0 fade-in" style={{"--animation-delay": "5.4s"}}>
              <ExperienceCard bgURL="https://i.imgur.com/NXgBprX.png" logoURL="https://i.imgur.com/dbyH6v8.jpg" company="Univerisity of Cincinnati" job="Teaching Assistant"
                              date="JAN - APRIL 2022" location="CINCINNATI - OH"
                              description= {<> 
                              •	Worked alongside a professor and other TAs to teach a Computer Science class of 70 students.<br/> 
                              • Held lab sessions, office hours and online meetings to help students understand the core concepts of Data Structures and Algorithms.<br/> 
                              • Graded assignments and group projects with constructive feedbacks to help students improve.
                              </>}
              />
            </div>
            
            <div className="mt-10 xl:mt-0 fade-in" style={{"--animation-delay": "5.4s"}}>
              <ExperienceCard bgURL="https://i.imgur.com/NXgBprX.png" logoURL="https://i.imgur.com/dbyH6v8.jpg" company="Univerisity of Cincinnati" job="Teaching Assistant"
                              date="MAY - AUGUST 2021" location="CINCINNATI - OH"
                              description= {<> 
                              •	Worked alongside a professor and other TAs to teach an Engineering class of over 60 students.<br/> 
                              •	Introduced students to the concepts and principles of different fields of engineering.<br/> 
                              •	Improved students learning experience, academic performance, helped them develop soft skills and technical skills through Peer Mentoring sessions.<br/> 
                              •	Graded assignments, exams and ran project demonstrations.
                              </>}
              />
            </div>
          </div>
          
  
          {/* PROJECTS */}
          <h1 className="p-head mt-20">
              <Typing key={2} replaceText="&nbsp;MY PROJECTS" typingInterval={80} timeDelay={6000} typeDelay={500} curCount={4} />
          </h1>
  
          <div className="flex flex-col  xl:flex-row mt-5 w-full  items-center justify-between">
            <div className="fade-in" style={{"--fade-in-animation":"fade-in-h" ,"--animation-delay":"11.2s"}}>
              <ProjectCard  thumbnail={<BiPackage color='white' size={70}/>} projectName="PackTrack" projectDescription="A web application designed to provide tracking information and real-time updates for packages from various carriers."
                            toolList={["py", "flask","html", "tw", "sqlite"]} linkList={[ {icon:"git", url:"https://github.com/chrispham0502/PackageTrackingApp"}, {icon:"link", url:"https://chrispham-packtrack.herokuapp.com"}]}/>
            </div>
            <div className="fade-in" style={{"--fade-in-animation":"fade-in-h" ,"--animation-delay":"11.2s"}}>
              <ProjectCard  thumbnail={<GoGlobe color='white' size={65}/>} projectName="Geo Quiz" projectDescription="A simple web application that generates random geography quizzes."
                            toolList={["py", "flask","html", "css"]} linkList={[ {icon:"git", url:"https://github.com/chrispham0502/RevUC-Quiz-App"}]}/>
            </div>
            <div className="fade-in" style={{"--fade-in-animation":"fade-in-h" ,"--animation-delay":"11.2s"}}>
              <ProjectCard  thumbnail={<AiOutlineRobot color='white' size={75}/>} projectName="Pickup Bot" projectDescription="A robot programmed to pick up packages in a simulated warehouse environment."
                            toolList={["py", "labview"]}/>  
            </div>
          </div>
  
          
  
          {/* CONTACT BUTTON */}
          <div className="my-10 sm:my-20 ">
            <Button key={1} link='/contact' timeDelay={12000} text="Leave me a message"/>
          </div>
  
        </div>
      </div> 
    )
  } else {
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>Experience</title>
        </Head>
  
        {/* EXPERIENCE */}
        <div className="flex flex-col items-center justify-center w-3/4 max-w-5xl">
          <h1 className="p-head mt-10">
              MY EXPERIENCE
          </h1>
          <div className="flex flex-col  xl:flex-row w-full justify-between items-center mt-10">
            <div className="xl:mt-0">
              <ExperienceCard bgURL="https://i.imgur.com/Ei73z0F.jpg" logoURL="https://i.imgur.com/8nJZoxI.jpg" company="Fox Corporation" job="Software Enginner Co-op" 
                              date="JAN 2021 - NOW" location="CINCINNATI - OH"
                              description= {<> 
                              • Worked in the Sports Data Team to contribute to the development of the FOX Sports App.<br/> 
                              • Created a web application using C# and Blazor to serve as a tool for internal uses.<br/>
                              • Created programs using C# to acquire and process data from providers through APIs and produce meaningful products for our clients.<br/> 
                              • Managed data in the database using SSMS and SQL. 
                              </>}
              />
            </div>
            
            <div className="mt-10 xl:mt-0">
              <ExperienceCard bgURL="https://i.imgur.com/NXgBprX.png" logoURL="https://i.imgur.com/dbyH6v8.jpg" company="Univerisity of Cincinnati" job="Teaching Assistant"
                              date="JAN - APRIL 2022" location="CINCINNATI - OH"
                              description= {<> 
                              •	Worked alongside a professor and other TAs to teach a Computer Science class of 70 students.<br/> 
                              • Held lab sessions, office hours and online meetings to help students understand the core concepts of Data Structures and Algorithms.<br/> 
                              • Graded assignments and group projects with constructive feedbacks to help students improve.
                              </>}
              />
            </div>
            
            <div className="mt-10 xl:mt-0">
              <ExperienceCard bgURL="https://i.imgur.com/NXgBprX.png" logoURL="https://i.imgur.com/dbyH6v8.jpg" company="Univerisity of Cincinnati" job="Teaching Assistant"
                              date="MAY - AUGUST 2021" location="CINCINNATI - OH"
                              description= {<> 
                              •	Worked alongside a professor and other TAs to teach an Engineering class of over 60 students.<br/> 
                              •	Introduced students to the concepts and principles of different fields of engineering.<br/> 
                              •	Improved students learning experience, academic performance as well as helped them develop soft skills and technical skills by running Peer Mentoring sessions.<br/> 
                              •	Graded assignments, exams and ran project demonstrations.
                              </>}
              />
            </div>
          </div>
          
  
          {/* PROJECTS */}
          <h1 className="p-head mt-20">
              MY PROJECTS
          </h1>
  
          <div className="flex flex-col  xl:flex-row mt-5 w-full  items-center justify-between">
            <div>
              <ProjectCard  thumbnail={<BiPackage color='white' size={70}/>} projectName="PackTrack" projectDescription="A web application designed to provide tracking information and real-time updates for packages from various carriers."
                            toolList={["py", "flask","html", "tw", "sqlite"]} linkList={[ {icon:"git", url:"https://github.com/chrispham0502/PackageTrackingApp"}, {icon:"link", url:"https://chrispham-packtrack.herokuapp.com"}]}/>
            </div>
            <div>
              <ProjectCard  thumbnail={<GoGlobe color='white' size={65}/>} projectName="Geo Quiz" projectDescription="A simple web application that generates random geography quizzes."
                            toolList={["py", "flask","html", "css"]} linkList={[ {icon:"git", url:"https://github.com/chrispham0502/RevUC-Quiz-App"}]}/>
            </div>
            <div>
              <ProjectCard  thumbnail={<AiOutlineRobot color='white' size={75}/>} projectName="Pickup Bot" projectDescription="A robot programmed to pick up packages in a simulated warehouse environment."
                            toolList={["py", "labview"]}/>  
            </div>
          </div>
  
          
  
          {/* CONTACT BUTTON */}
          <div className="my-10 sm:my-20 ">
            <Button key={2} link='/contact' timeDelay={0} staticText="Leave me a message"/>
          </div>
  
        </div>
      </div> 
    )
  }
  
}
  
export default Experience