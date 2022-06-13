import { AiFillGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <>
    <footer>
        <div className="flex flex-row">
          <a className="hover:opacity-50 ease-in-out duration-300" href="https://www.facebook.com/minhtriet.pham.0502" target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook size={25}/>
          </a>
          <a className="hover:opacity-50 ease-in-out duration-300" href="https://www.instagram.com/snow.0502/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram size={25}/>
          </a>
          <a className="hover:opacity-50 ease-in-out duration-300" href="https://www.linkedin.com/in/triet-pham-0502/" target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={25}/>
          </a>
          <a className="hover:opacity-50 ease-in-out duration-300" href="https://github.com/chrispham0502" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size={25} />
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer