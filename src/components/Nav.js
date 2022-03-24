import React, { useEffect, useState } from 'react'

const Nav = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
           setShow(window.scrollY > 100)
    
        })

        return () => {
            window.removeEventListener("scroll",this)
        }

    }, [])




    return (
        <nav className={`${show &&  "show_background"}`}>
            <ul>
                <li>
                    <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="200" alt="netflix logo" />
                    </a>
                </li>
                
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar logo" className='avatar_logo' />
                </li>
            </ul>         
        </nav>
    )
}

export default Nav
