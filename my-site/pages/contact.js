import Head from "next/head"
import Button from "../components/Button"
import Typing from "../components/Typing"
import BoxContent from "../components/BoxContent"

function Contact() {
    return (
      <div className="flex h-full w-full justify-center items-start overflow-auto">
        <Head>
          <title>Contact</title>
        </Head>

        <div className="flex flex-col items-center">
        
          {/* CONTACT INFO */}
          <h1 className="p-head mt-10">
            <Typing key={1} replaceText="&nbsp;CONTACT INFO" typingInterval={80} typeDelay={500} curCount={4} />
          </h1>
          <BoxContent contentName="contact" timeDelay={4000}/>

          <h1 className="p-head mt-20">
            <Typing key={1} replaceText="&nbsp;SEND A MESSAGE" timeDelay={8000} typingInterval={80} typeDelay={500} curCount={4} />
          </h1>
          <form className="contact-box mt-5 fade-in" style={{"--fade-in-animation":"fade-in-h" ,"--animation-delay":"13.5s"}} action="POST" data-netlify="true">
            <div className="form-box">
              <div className="form-input-box"><input className="form-input" placeholder="Name"/></div>
              <div className="form-input-box"><input className="form-input" placeholder="Email"/></div>
              <div className="form-input-box"><input className="form-input" placeholder="Message"/></div>
            </div>
          </form>

          <div className="my-10 sm:my-20 ">
            <Button link='#' timeDelay={15000} text="Send message"/>
          </div>
        </div>
      </div> 
    )
}
  
export default Contact