import React from 'react'
import { motion } from 'framer-motion'
import "./Media.css"



export default function Media({children, color}) {

    
const handleMedia = (e, info) => {
    const back = document.createElement("div")
    back.classList = "back"
    back.style.top = e.layerY + "px"
    back.style.left = e.layerX + "px"
    back.style.backgroundColor = color
    e.target.append(back)
}
const handleMedial = (e) => {
    const back = document.querySelector(".back")
        back.remove()
}

return (
    <motion.div onHoverStart={(e, info) => handleMedia(e, info)} onHoverEnd={e => handleMedial(e)} className='media'>
        {children}
    </motion.div>
  )
}
