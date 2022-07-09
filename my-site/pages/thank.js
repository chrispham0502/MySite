import Head from 'next/head'
import Button from '../components/Button'
import Typing from '../components/Typing';
import { useAnimation } from "../contexts/AnimationContext";

function Thank() {

  const [animation] = useAnimation();
  
  if (animation) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Head>
          <title>Thank you!</title>
        </Head>
  
         <div className="flex flex-col items-center">
            <h1 className="intro">
                <Typing key={1} replaceText="Thank you for your message!" typingInterval={80} typeDelay={1000} curCount={6}/>
            </h1>
            <br/>
            <br/>
            <Button key={1} link='/' timeDelay={6000} text="Return to homepage"/>
          </div>
      </div>
    )
  } else {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Head>
          <title>Thank you!</title>
        </Head>
        <div className="flex flex-col items-center">
            <h1 className="intro">
                Thank you for your message!
            </h1> 
            <br/>
            <br/>
            <Button key={2} link='/' timeDelay={0} staticText="Return to homepage"/>
          </div>
      </div>
    )
  }
}
export default Thank