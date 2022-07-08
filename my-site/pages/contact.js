import Head from "next/head"
import Button from "../components/Button"
import Typing from "../components/Typing"
import BoxContent from "../components/BoxContent"
import { useAnimation } from "../contexts/AnimationContext";

function Contact() {

  const [animation] = useAnimation()
  let content;
    if (animation){
      content = (
        <div className="flex h-full w-full justify-center items-start overflow-auto">
          <Head>
            <title>Contact</title>
          </Head>
  
          <div className="flex flex-col items-center">
            {/* CONTACT INFO */}
            <h1 className="p-head mt-10">
              <Typing key={1} replaceText="&nbsp;CONTACT INFO" typingInterval={80} typeDelay={500} curCount={4} />
            </h1>
            <BoxContent key={1} contentName="contact" timeDelay={4000}/>
  
            <h1 className="p-head mt-20">
              <Typing key={2} replaceText="&nbsp;SEND A MESSAGE" timeDelay={10000} typingInterval={80} typeDelay={500} curCount={4} />
            </h1>
            <form id="contact-form-dynamic" name="contact" method="POST" data-netlify="true" className="contact-box mt-5 fade-in" style={{"--fade-in-animation":"fade-in-h" ,"--animation-delay":"15.5s"}}>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-box">
                <div className="form-input-box"><input className="form-input" name="name" placeholder="Name" required/></div>
                <div className="form-input-box"><input className="form-input" name="email" placeholder="Email" type="email" required/></div>
                <div className="form-input-box"><input className="form-input" name="message" placeholder="Message" required/></div>
              </div>
            </form>
  
            <div className="my-10 sm:my-20 ">
              <Button form="contact-form-dynamic" type="submit" key={1} timeDelay={17000} text="Send message"/>
            </div>
          </div>
        </div> 
      )
    } else {
      content = (
        <div className="flex h-full w-full justify-center items-start overflow-auto">
          <Head>
            <title>Contact</title>
          </Head>
  
          <div className="flex flex-col items-center">
          
            {/* CONTACT INFO */}
            <h1 className="p-head mt-10">
              CONTACT INFO
            </h1>
            <BoxContent key={3} contentName="contactStatic"/>
  
            <h1 className="p-head mt-20">
              SEND A MESSAGE
            </h1>
            <form id="contact-form-static" name="contact" data-netlify="true" className="contact-box mt-5" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-box">
                <div className="form-input-box"><input className="form-input" name="name" placeholder="Name" required/></div>
                <div className="form-input-box"><input className="form-input" name="email" placeholder="Email" type="email" required/></div>
                <div className="form-input-box"><input className="form-input" name="message" placeholder="Message" required/></div>
              </div>
            </form>
  
            <div className="my-10 sm:my-20 ">
              <Button form="contact-form-static" type="submit" key={2} timeDelay={0} staticText="Send message"/>
            </div>
          </div>
        </div> 
      )
    }

  return <>
    {/* Static contact form to help Netlify */}
    <form name="contact" data-netlify="true" hidden>
      <input name="name" placeholder="Name"/>
      <input name="email" placeholder="Email" type="email"/>
      <input name="message" placeholder="Message"/>
    </form>
    {content}
  </>
    
}
  
export default Contact