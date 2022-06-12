import { useEffect, useState } from "react"
import Typing from "./Typing"
import styles from '../styles/Home.module.css'

const typingSpeed = 100;

const texts = [
    <Typing key={1} staticText=" Hello" deleteText=", World!" replaceText=" there!" typingSpeed={typingSpeed} timeDelay={3500} />,
    <Typing key={2} deleteText=" Hello there!" replaceText="I'm Triet Pham" typingSpeed={typingSpeed} />,
    <Typing key={3} deleteText=" I'm Triet Pham" replaceText="Welcome to my website!" curCount={9} typingSpeed={typingSpeed} />
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
                }, 5000)

                return () => clearTimeout(timeout)
            }
            case 'Final': {
                setIntro(texts[2])
            }
            default:
                return
        }

    }, [intro, phase])

    return (
        <h1 className={styles.title}>
            {intro}
        </h1>
    )
}

export default Intro