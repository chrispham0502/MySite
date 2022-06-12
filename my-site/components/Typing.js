import { useEffect, useState } from "react"

const Typing = ({staticText = "", deleteText = "", replaceText = "" , curDelay, curCount, deleteSpeed = 60, typingSpeed = 150, typeDelay = 2000}) => {

    const [phase, setPhase] = useState('PageLoad')
    const [typedText, setTypedText] = useState(deleteText)

    useEffect(() => {
        switch (phase){
            case 'PageLoad':
                const timeout = setTimeout(() => {
                    setPhase('Deleting')
                }, typeDelay)

                return () => clearTimeout(timeout)

            case 'Deleting': {
                const timeout = setTimeout(() => {
                    setTypedText(deleteText.slice(0, typedText.length - 1))
                }, deleteSpeed)
                
                if (typedText == ""){
                    setPhase('Pausing');
                }
                
                return () => clearTimeout(timeout)
            }

            case 'Pausing': {
                const timeout = setTimeout(() => {
                    setPhase('Typing');
                }, 500)
                
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
    <span className = "cursor" style={{"--blink-delay": curDelay, "--blink-count": curCount }}> {staticText}{typedText}</span>
  )
}

export default Typing