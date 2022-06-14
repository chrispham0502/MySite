import { useEffect, useState } from "react"

const Typing = ({staticText = "", deleteText = "", replaceText = "" , curDelay, curCount, deleteInterval = 60, typingInterval = 150, typeDelay = 2000, timeDelay = 0}) => {

    const [phase, setPhase] = useState('New')
    const [typedText, setTypedText] = useState(deleteText)
    const [curClass, setCurClass] = useState()

    useEffect(() => {
        switch (phase){

            case 'New': {
                const timeout = setTimeout(() => {
                    setPhase('Create')
                    setCurClass('cursor')
                }, timeDelay)

                return () => clearTimeout(timeout)
            }

            case 'Create': {
                const timeout = setTimeout(() => {
                    setPhase('Deleting')
                }, typeDelay)

                return () => clearTimeout(timeout)
            }
                

            case 'Deleting': {
                const timeout = setTimeout(() => {
                    setTypedText(deleteText.slice(0, typedText.length - 1))
                }, deleteInterval)
                
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
                }, typingInterval)

                return () => clearTimeout(timeout)
            }
            default:
                return
        }

    }, [curClass, typedText, phase])

  return (
    <span className = {curClass} style={{"--blink-delay": curDelay, "--blink-count": curCount }}> {staticText}{typedText}</span>
  )
}

export default Typing