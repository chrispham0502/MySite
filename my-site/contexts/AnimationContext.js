import React, { createContext, useContext, useState }  from 'react'

const AnimationContext =  createContext([])
// const AnimationUpdateContext = createContext()

export function useAnimation(){
  return useContext(AnimationContext)
}

export function AnimationProvider ({children}) {
  const [playAnimation, setPlayAnimation] = useState(true)
  
  const toggleAnimation = () => {
    console.log("toggle animation");
    setPlayAnimation(prePlayAnimation => !prePlayAnimation)
  }
  return (
    <>
      <AnimationContext.Provider value={[playAnimation, toggleAnimation]}>
        {children}
      </AnimationContext.Provider>
    </>
    
  )
}

export default AnimationProvider