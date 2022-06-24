import React, { createContext, useContext, useState }  from 'react'

const AnimationContext =  createContext([])
// const AnimationUpdateContext = createContext()

export function useAnimation(){
  return useContext(AnimationContext)
}

export function AnimationProvider ({children}) {
  const [playAnimation, setPlayAnimation] = useState(true)
  
  const toggleAnimation = () => {
    setPlayAnimation(prePlayAnimation => !prePlayAnimation)
  }
  return (
    <>
      <AnimationContext.Provider value={[playAnimation, setPlayAnimation, toggleAnimation]}>
        {children}
      </AnimationContext.Provider>
    </>
    
  )
}

export default AnimationProvider