import { DiPython, DiCss3} from "react-icons/di";
import { AiFillHtml5, AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai";
import {TbBrandNextjs} from "react-icons/tb";
import {SiCplusplus, SiCsharp, SiJavascript, SiTailwindcss, SiBlazor, SiFlask, SiMicrosoftoffice, SiVisualstudio, SiVisualstudiocode, SiSqlite} from "react-icons/si";
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
    "sqlite": <SiSqlite size={25}/>
}  

const test = []

for (const key of Object.keys(icons)){
    test.push(<div className="flex flex-row"> {icons[key]} &nbsp;<Typing replaceText="  TestText" /></div>)
}

const IconText = ({icon, text = "", timeDelay = 0}) => {
    
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
                        {icons[icon]} &nbsp;&nbsp; <div className="text-skill"><Typing replaceText={text} typingInterval={50} typeDelay={0} curCount={1}/></div>
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