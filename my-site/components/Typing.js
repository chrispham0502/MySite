import { useEffect, useState } from "react"

const Typing = ({staticText = "", deleteText = "", replaceText = ""}) => {

    const [phase, setPhase] = useState('PageLoad')
    const [typedText, setTypedText] = useState(deleteText)

    useEffect(() => {
        switch (phase){
            case 'PageLoad':
                const timeout = setTimeout(() => {
                    setPhase('Deleting')
                }, 2000)

                return () => clearTimeout(timeout)

            case 'Deleting': {
                const timeout = setTimeout(() => {
                    setTypedText(deleteText.slice(0, typedText.length - 1))
                }, 150)
                
                if (typedText == ""){
                    setPhase('Typing');
                }
                
                return () => clearTimeout(timeout)
            }
            case 'Typing': {
                const timeout = setTimeout(() => {
                    setTypedText(replaceText.slice(0, typedText.length + 1))
                }, 150)

                return () => clearTimeout(timeout)
            }
            default:
                return
        }

    }, [typedText, phase])

  return (
    <span class = "cursor"> {staticText} {typedText}</span>
  )
}

export default Typing