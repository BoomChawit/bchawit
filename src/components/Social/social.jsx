import React from 'react'
import "./social.css"

import { FaFacebookF, FaGithub, FaInstagram, FaGoogle, FaLinkedinIn } from 'react-icons/fa'

const Social = () => {
  return (
    <div className="social">
        <ul class="wrapper">

            <a href = "https://www.facebook.com/boomchawit/"  target= "_blank"  rel="noreferrer">
                <li class="icon facebook">
                    <span class="tooltip">Facebook</span>
                    <span><i class="fab"> <FaFacebookF /> </i></span>
                </li>
            </a>

            <a href = "https://www.instagram.com/b.chawit/"  target= "_blank"  rel="noreferrer">
                <li class="icon instagram">
                    <span class="tooltip">Instagram</span>
                    <span><i class="fab"> <FaInstagram /> </i></span>
                </li>
            </a>

            <a href = "https://github.com/BoomChawit"  target= "_blank"  rel="noreferrer">
                <li class="icon github">
                    <span class="tooltip">Github</span>
                    <span><i class="fab"> <FaGithub /> </i></span>
                </li>
            </a>

            <a href = "mailto: boomchawit.2203@gmail.com"  target= "_blank"  rel="noreferrer">
                <li class="icon google">
                    <span class="tooltip">Email</span>
                    <span><i class="fab"> <FaGoogle /> </i></span>
                </li>
            </a>

            <a href = "https://www.linkedin.com/in/bchawit/"  target= "_blank"  rel="noreferrer">
                <li class="icon linkedin">
                    <span class="tooltip">LinkedIn</span>
                    <span><i class="fab"> <FaLinkedinIn /> </i></span>
                </li>
            </a>
        </ul>
    </div>
  )
}

export default Social