import React, { useEffect, useState } from 'react'
import Typing from './Typing'

const Button = ({link, timeDelay = 2000, text}) => {
    const [phase, setPhase] = useState('New')
    const [button, setButton] = useState()

    useEffect(() => {
        switch (phase){
            case 'New':
                const timeout = setTimeout(() => {
                    setPhase('Create')
                }, timeDelay)

                return () => clearTimeout(timeout)

            case 'Create': {
                setButton(
                    <button class="button-85 " role="button">
                        <a href={link}><Typing replaceText={text} typingSpeed={100} timeDelay={750} /></a>
                    </button>
                )
            }
            default:
                return
        }

    }, [button, phase])
  return (
    <>{button}</>
  )
}


export default Button

