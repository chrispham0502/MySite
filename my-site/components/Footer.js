import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { MdReplay, MdSkipNext } from "react-icons/md";
import { useAnimation } from "../contexts/AnimationContext";

const Footer = () => {
  const [animation, setAnimation , toggleAnimation] = useAnimation()
  const router = useRouter()
  
  useEffect(() => {
    const handleRouteChange = () => {
      
      setAnimation(true);
    }

    router.events.on('routeChangeStart', handleRouteChange)

  }, [router])

  return (
    <>
    <footer>
        <div className="flex flex-row relative">
          <a className="hover:opacity-50 ease-in-out duration-200" href="https://www.linkedin.com/in/triet-pham-0502/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={25}/>
          </a>
          <a className="hover:opacity-50 ease-in-out duration-200" href="https://github.com/chrispham0502" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={25} />
          </a>
          <a className="hover:opacity-50 ease-in-out duration-200" href="https://www.instagram.com/snow.0502/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={25}/>
          </a>
          <a className="hover:opacity-50 ease-in-out duration-200" href="https://www.facebook.com/minhtriet.pham.0502" target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook size={25}/>
          </a>     
        </div>
        <button className="button-a" onClick={toggleAnimation}>
        {animation
          ? <div title="Skip Animation"><MdSkipNext size={20}/></div>
          : <div title="Replay Animation"><MdReplay size={20}/></div>
          }
        </button>
        
      </footer>
    </>
  )
}

export default Footer