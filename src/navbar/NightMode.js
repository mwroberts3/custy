import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect } from 'react'

const NightMode = ({lightTheme, setLightTheme}) => {
    useEffect(() => {
        if (lightTheme) {
            localStorage.setItem('light-theme', true)
            
            document.getElementsByTagName('BODY')[0].style.background = 'white'
            
            if (document.getElementById('custy-logo')) {
                document.getElementById('custy-logo').style.filter = 'invert(0%)'
            }
        } else {
            if (localStorage.getItem('light-theme')) {
                localStorage.setItem('light-theme', false)
            }
    
            document.getElementsByTagName('BODY')[0].style.background = 'black'
    
            if (document.getElementById('custy-logo')) {
                document.getElementById('custy-logo').style.filter = 'invert(100%)'
            } 
        }
    })

    return (
        <div id="color-theme-icon">
            {lightTheme ? <FaMoon size={20} onClick={() => {setLightTheme(false)}}/>
            :
            <FaSun size={20} onClick={() => {setLightTheme(true)}}/>
            }
        </div>
    )
}

export default NightMode
