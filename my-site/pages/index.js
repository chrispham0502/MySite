import Head from 'next/head'
import Intro from '../components/Intro'
import Button from '../components/Button'
import { useAnimation} from "../contexts/AnimationContext";

function Home() {
  
  const [animation] = useAnimation()
  
  if (animation) {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Head>
          <title>Triet Pham's Portfolio</title>
        </Head>
  
         <div className="flex flex-col items-center">
            <Intro />
            <br/>
            <br/>
            <Button key={1} link='/about' timeDelay={19500} text="Learn more about me"/>
          </div>
      </div>
    )
  } else {
    return (
      <div className="flex h-full w-full justify-center items-center">
        <Head>
          <title>Triet Pham's Portfolio</title>
        </Head>
        <div className="flex flex-col items-center">
            <h1 className="intro">
              "Welcome to my website!"
            </h1> 
            <br/>
            <br/>
            <Button key={2} link='/about' timeDelay={0} staticText="Learn more about me"/>
          </div>  
      </div>
    )
  }
}
export default Home