import React, { useState } from 'react'
import "./styles.scss"

const Tabs = ({ items = [] }) => {
    const [active, setActive] = useState(0);

    return (
        <div className='common__tabs'>
            <ul className="flex items-center justify-center">
                {items.map((item, index) => {
                    return (
                        <li key={item.key}
                            className={`common__tab ${active === index ? "active" : ""}`}
                            onClick={() => setActive(index)}
                        >
                            {item.label}
                        </li>
                    )
                })}
            </ul>

            {items[active]?.children}
        </div>
    )
}

export default Tabs