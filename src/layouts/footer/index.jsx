import React from 'react'
import "./styles.scss"
import logo from "../../assets/Logo-footer.png"
import FooterSocials from './components/Socials'
import { IoMailOutline } from "react-icons/io5";

const footerLinks = [
    {
        category: "Snakers",
        items: [
            { key: "aboutUs", label: "About us" },
            { key: "showrooms", label: "Showrooms" },
            { key: "contact", label: "Contact" },
            { key: "faqs", label: "FAQs" },
        ],
    },
    {
        category: "Customer services",
        items: [
            { key: "deliveryPolicy", label: "Delivery policy" },
            { key: "sizeGuide", label: "Size guide" },
            { key: "returnPolicy", label: "Return policy" },
            { key: "termOfServices", label: "Term of services" },
        ],
    },
    {
        category: "Resources",
        items: [
            { key: "news", label: "News" },
            { key: "events", label: "Events" },
            { key: "support", label: "Support" },
        ],
    },
]

const LayoutFooter = () => {
    return (
        <footer className='footer'>
            <div className="footer__up">
                <div className='container footer__inner'>
                    <div className="footer__contact">
                        <img src={logo} alt="Logo footer" />
                        <div className="h-1"></div>
                        <p className='text-14-bbb'>Address: 380 Quan Hoa, Cau Giay, Hanoi</p>
                        <p className='text-14-bbb'>Hotline: 1800.808.88</p>
                        <p className='text-14-bbb'>Email: info@sneakers.vn</p>
                        <FooterSocials />
                    </div>

                    {footerLinks.map(footerLink => {
                        return (
                            <ul key={footerLink.category} className='footer__links'>
                                <p>{footerLink.category}</p>

                                {footerLink.items.map(item => {
                                    return (
                                        <li key={item.key} className='footer__link text-14-bbb'>{item.label}</li>
                                    )
                                })}
                            </ul>
                        )
                    })}

                    <div className="footer__leave-contact">
                        <p>Sign up to our newsletter and keep up to date with the latest arrivals</p>

                        <div className="footer__input">
                            <input type="text" placeholder='Your email' />
                            <IoMailOutline style={{ color: "#fff" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__copy-right">
                Copyright © 2020 - 2021 Sneakers. All rights reserved.
            </div>
        </footer>
    )
}

export default LayoutFooter