import { useEffect, useState } from "react"

const Typing = ({staticText = "", deleteText = "", replaceText = "" , curDelay, curCount, typingSpeed = 150, timeDelay = 2000}) => {

    const [phase, setPhase] = useState('PageLoad')
    const [typedText, setTypedText] = useState(deleteText)

    useEffect(() => {
        switch (phase){
            case 'PageLoad':
                const timeout = setTimeout(() => {
                    setPhase('Deleting')
                }, timeDelay)

                return () => clearTimeout(timeout)

            case 'Deleting': {
                const timeout = setTimeout(() => {
                    setTypedText(deleteText.slice(0, typedText.length - 1))
                }, typingSpeed)
                
                if (typedText == ""){
                    setPhase('Typing');
                }
                
                return () => clearTimeout(timeout)
            }
            case 'Typing': {
                const timeout = setTimeout(() => {
                    setTypedText(replaceText.slice(0, typedText.length + 1))
                }, typingSpeed)

                return () => clearTimeout(timeout)
            }
            default:
                return
        }

    }, [typedText, phase])

  return (
    <span class = "cursor" style={{"--blink-delay": curDelay, "--blink-count": curCount }}> {staticText} {typedText}</span>
  )
}

export default Typing