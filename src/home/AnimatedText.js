import { useEffect, useState } from "react"
export const AnimatedText = () => {
    const [text, setText] = useState("")

    useEffect(() => {
        animateText()
    }, [])

    const bioText = `I am Semir Becic, Software Developer in OWD Security & Services. I work as Frontend Developer but I do some small things in
                 backend too.`
    const animateText = () => {
        for (let i = 0; i<bioText.length; i++) {
            setTimeout(() => {
                setText(bioText.substring(0, i+1))
            }, 250)
        }
    }

   
    
                 return <div>{text}</div>
}