import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Typing from './Typing'

const Button = ({form, type = "button", link = "", timeDelay = 2000, text, staticText}) => {
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
                if (link) {
                    setButton(                 
                        <Link href={link}>
                            <a>
                                <button className="button-glow text-xs sm:text-base" type={type} form={form}>
                                    <Typing replaceText={text} staticText={staticText} typingInterval={80} typeDelay={750} />
                                </button>
                            </a>
                        </Link>  
                )
                }
                else {
                    setButton(                 
                        <button className="button-glow text-xs sm:text-base" type={type} form={form}>
                            <Typing replaceText={text} staticText={staticText} typingInterval={80} typeDelay={750} />
                        </button>
                    )
                }
                setPhase('Done')
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

