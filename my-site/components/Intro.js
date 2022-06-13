import { useEffect, useState } from "react"
import Typing from "./Typing"

const typingInterval = 80;

const texts = [
    <Typing key={1} staticText=" Hello" deleteText=", World!" replaceText=" there!" typingInterval={typingInterval} typeDelay={3500} />,
    <Typing key={2} deleteText=" Hello there!" replaceText="I'm Triet Pham" typingInterval={typingInterval} />,
    <Typing key={3} deleteText=" I'm Triet Pham" replaceText="Welcome to my website!" curCount={9} typingInterval={typingInterval} />
]


const Intro = () => {
    const [phase, setPhase] = useState('First')
    const [intro, setIntro] = useState(texts[0])

    useEffect(() => {
        switch (phase) {
            case 'First':
                const timeout = setTimeout(() => {
                    setPhase('Second')
                }, 5250)

                return () => clearTimeout(timeout)

            case 'Second': {
                setIntro(texts[1])
                const timeout = setTimeout(() => {
                    setPhase('Final')
                }, 5250)

                return () => clearTimeout(timeout)
            }
            case 'Final': {
                setIntro(texts[2])
                setPhase('Done')
            }
            default:
                return
        }

    }, [intro, phase])

    return (
        <h1 className="intro">
            {intro}
        </h1>
    )
}

export default Intro