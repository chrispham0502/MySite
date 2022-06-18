import { DiPython, DiCss3} from "react-icons/di";
import { AiFillHtml5, AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import { FaDog, FaGuitar } from "react-icons/fa";
import { SiCplusplus, SiCsharp, SiJavascript, SiTailwindcss, SiBlazor, SiFlask, SiMicrosoftoffice, SiVisualstudio, SiVisualstudiocode, SiSqlite, SiLabview } from "react-icons/si";
import { GiSushis } from "react-icons/gi";
import { CgCardSpades } from "react-icons/cg";
import { BsLink45Deg, BsFillPhoneFill } from "react-icons/bs";
import { MdEmail} from "react-icons/md";
import { useEffect, useState } from "react";
import Typing from "./Typing";

const icons = {
    // tech icons
    "py": <DiPython size={25}/>,
    "cpp": <SiCplusplus size={24}/>,
    "cs": <SiCsharp size={24}/>,
    "js": <SiJavascript size={23}/>,
    "html": <AiFillHtml5 size={25}/>,
    "css": <DiCss3  size={25}/>,
    "tw": <SiTailwindcss size={25}/>,
    "bz": <SiBlazor size={25}/>,
    "flask": <SiFlask size={25}/>,
    "next": <TbBrandNextjs size={25}/>,
    "office": <SiMicrosoftoffice size={25}/>,
    "git": <AiFillGithub size={25}/>,
    "vs": <SiVisualstudio size={25}/>,
    "vsc": <SiVisualstudiocode size={25}/>,
    "sql": <AiOutlineConsoleSql size={25}/>,
    "sqlite": <SiSqlite size={25}/>,
    "labview":<SiLabview size={28}/>,
    
    // other icons
    "dog": <FaDog size={24}/>,
    "guitar": <FaGuitar size={24}/>,
    "card": <CgCardSpades size={24}/>,
    "sushi": <GiSushis size={24}/>,
    "link": <BsLink45Deg size={25}/>,
    "phone": <BsFillPhoneFill size={25}/>,
    "email": <MdEmail size={28}/>
}  

const test = []

for (const key of Object.keys(icons)){
    test.push(<div className="flex flex-row"> {icons[key]} &nbsp;<Typing replaceText="  TestText" /></div>)
}

const IconText = ({icon, text = "", curCount = 1, timeDelay = 0}) => {
    
    const [iconText, setIconText] = useState([])
    const [phase, setPhase] = useState("New")
    useEffect(() => {
        switch (phase){
            case 'New': {
                const timeout = setTimeout(() => {
                    setPhase('Create')
                }, timeDelay)

                return () => clearTimeout(timeout)
            }
            case 'Create': {
                setIconText(
                    <div className="flex flex-row"> 
                        {icons[icon]} &nbsp;&nbsp; <div className="text-skill"><Typing replaceText={text} typingInterval={30} typeDelay={0} curCount={curCount}/></div>
                    </div>
                )
                setPhase('Done')
            }

            default:
                return
        }

    }, [ iconText, phase])

  return (
    <div> {iconText} </div>
  )
}

export default IconText