import { useEffect, useState } from "react"
import Typing from "./Typing"
import styles from '../styles/Home.module.css'

const texts = [
    <Typing key={1} staticText="Hello" deleteText=", World!" replaceText=" there!" typingSpeed={150} timeDelay={3500} />,
    <Typing key={2} deleteText="Hello there!" replaceText="I'm Triet Pham" typingSpeed={150} />,
    <Typing key={3} deleteText="I'm Triet Pham" replaceText="Welcome to my page!" typingSpeed={150} />
]


const Intro = () => {
    const [phase, setPhase] = useState('New')
    const [intro, setIntro] = useState(texts[0])

    useEffect(() => {
        switch (phase) {
            case 'New':
                const timeout = setTimeout(() => {
                    setPhase('Second')
                }, 6000)

                return () => clearTimeout(timeout)

            case 'Second': {
                setIntro(texts[1])
                const timeout = setTimeout(() => {
                    setPhase('Final')
                }, 6000)

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