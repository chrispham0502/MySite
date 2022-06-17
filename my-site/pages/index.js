import Head from 'next/head'
import Intro from '../components/Intro'
import Button from '../components/Button'

function Home() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <Head>
        <title>Triet Pham's Portfolio</title>
      </Head>

      <div className="flex flex-col items-center">
        <Intro />
        <br/>
        <br/>
        <Button link='/about' timeDelay={19500} text="Learn more about me"/>
      </div>
    </div>
      
  )
}

export default Home