import React from 'react'
import instagram from "../../../assets/icon/instagram.svg"
import facebook from "../../../assets/icon/facebook.svg"
import twitter from "../../../assets/icon/twitter.svg"
import tiktok from "../../../assets/icon/tiktok.svg"

const socials = [
    { id: 1, img: instagram, name: "Instagram" },
    { id: 2, img: facebook, name: "Facebook" },
    { id: 3, img: twitter, name: "Twitter" },
    { id: 4, img: tiktok, name: "Tiktok" },
]

const FooterSocials = () => {
    return (
        <div className='footer__socials'>
            {socials.map(social => {
                return (
                    <div key={social.id} className='footer__social'>
                        <img src={social.img} alt={social.name} />
                    </div>
                )
            })}
        </div>
    )
}

export default FooterSocials